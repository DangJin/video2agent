const express = require('express');
const { bundle } = require('@remotion/bundler');
const { getCompositions, renderMedia } = require('@remotion/renderer');

const app = express();
const port = 9000;

app.use(express.json());

app.post('/render', async (req, res) => {
  try {
    // 假设视频组件的路径
    const compositionId = 'MyVideo';
    const entry = './src/index.js';

    console.log('Creating a Webpack bundle of the video');
    const bundleLocation = await bundle(entry);

    console.log('Getting the compositions');
    const comps = await getCompositions(bundleLocation, {
      inputProps: req.body,
    });

    const composition = comps.find((c) => c.id === compositionId);
    if (!composition) {
      throw new Error(`No composition with the ID ${compositionId} found`);
    }

    const outputLocation = `out/${compositionId}.mp4`;

    console.log('Rendering video');
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation,
      inputProps: req.body,
    });

    console.log('Render complete');
    res.json({ message: 'Video rendered successfully', outputLocation });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});