const { renderMedia } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');
const { bundle } = require('@remotion/bundler');


const renderVideo = async (text) => {
  const composition = 'MyVideo';
  const outputDir = path.join(__dirname, 'out');
  const outputPath = path.join(outputDir, 'output'+new Date().getTime()+'.mp4');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }


  try {
    await renderMedia({
      composition,
      serveUrl: 'http://localhost:3000/MyVideo',
      codec: 'h264',
      outputLocation: outputPath,
      inputProps: { text },
    });
    return outputPath;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while rendering the video.');
  }
};
module.exports = { renderVideo };
