import React from "react";

// Update queue: [setTime((prevTime) => prevTime + 1)]
function Timer() {
	const [time, setTime] = React.useState(0);
	const [timerStarted, setTimerStarted] = React.useState(false);
	console.log("Renders")

	React.useEffect(() => {
		console.log("Running useEffect")
		if (timerStarted) {
			console.log("Starting timer")
			const timer = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);

			return () => { // return clean up function
				console.log("Cleaning up")
				clearInterval(timer);
			};
		}
	});

	function startTimer() {
		setTimerStarted(true);
	}

	return (
		<div>
			<h1>{time} seconds</h1>
			<button onClick={startTimer}>Start Timer</button>
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
 * After clicking the button:
 *
 * <div>
 * 		<h1>0</h1>
 * 		<button>Increment</button>
 * </div>
 * 
 * 
 * <div>
 * 		<h1>1</h1>
 * 		<button>Increment</button>
 * </div>
 *
 */

export default Timer;
