import React from 'react';
import memeData from "../memeData.js"

export default function Meme() {

	function getRandomMeme(){
		
	const memesArray = memeData.data.memes;
	const randomNumber = Math.floor(Math.random()*memesArray.length)
		const url = memesArray[randomNumber].url;
		console.log(url)
		
	}
	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form-input"
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form-input"
				/>
				<button onClick = {getRandomMeme} className="form-btn">
					Get a new meme image 🏞️
				</button>
			</div>
		</main>
	);
}
