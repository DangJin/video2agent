import {Composition} from 'remotion';
import MyVideo from './components/MyVideo';

export const RemotionRoot = () => {
	const width = 1920; // 示例宽度
	const height = 1080; // 示例高度


	return (
		<Composition
			id="MyVideo"
			component={MyVideo}
			durationInFrames={300} // 15 seconds at 30fps
			fps={30}
			width={height}
			height={width}
			defaultProps={{
				text: '人这一生中遇到的磨难很多，\n我们时而成熟时而胆小，\n又在一次次绝境中激发出内在的潜能，\n从而变得坚强和勇敢。',
			}}
		/>
	);
};
