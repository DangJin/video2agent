// import React from 'react';
import {AbsoluteFill} from 'remotion';
import Subtitles from './Subtitles';
import backgroundImage from '../static/bg.jpg'; // Ensure you have CleanShot.png in the same directory

const MyVideo = ({text}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<h1
				style={{
					position: 'absolute',
					top: '5%',
					width: '100%',
					textAlign: 'left',
					padding: '0 0 0 100px ',
					fontSize: '60px',
					color: 'black',
				}}
			>
				《稿定摘抄》
			</h1>

			<Subtitles
				text={text}
				style={{
					position: 'absolute',
					top: '40%',
					width: '100%',
					textAlign: 'center',
					fontSize: '48px', // 增大字体大小
					lineHeight: '1.5',
					color: 'black',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					bottom: '5%',
					width: '100%',
					padding: '0 100px',
					textAlign: 'right',
					fontSize: '36px',
					color: 'black',
				}}
			>
				—— 《搞定》
			</div>
		</AbsoluteFill>
	);
};

export default MyVideo;
