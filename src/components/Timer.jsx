import React from "react";

// Current example Update queue: [setTime(prevTime => prevTime + 1)] // state is 0
function Timer() {
	const [time, setTime] = React.useState(0);

	console.log("Renders");

	function increment() {
		// State is like a photo in that particular call
		setInterval(() => {
			// setTime(time + 1)
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	}

	return (
		<div>
			<h1>{time} seconds</h1>
			<button onClick={increment}>Start Timer</button>
		</div>
	);
}

/**
 * JSX output:
 * <div>
 * 		<h1>0</h1>
 * 		<button>Increment</button>
 * </div>
 *
 * Second render:
 *
 * <div>
 * 		<h1>1</h1>
 * 		<button>Increment</button>
 * </div>
 *
 */

export default Timer;
