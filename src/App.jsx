import React from 'react';

// Current example Update queue: [setTime(1)] // state is 0
// afterwards Update queue: [] // state is 1
// Next example Update queue: [setTime(1)] But state is already 1 so React bails out
// afterwards Update queue: [] // state is 1
function App() { 
	const [time, setTime] = React.useState(0) 

	console.log("Renders")

	function increment() {
		// State is like a photo in that particular call
		setInterval(() => {
			setTime(time + 1); // setTime(1) React bails out after first time because state is already 1
		}, 1000);
	}

  return (
    <div>
      <h1>{time} seconds</h1>
			<button onClick={increment}>Start Timer</button>
    </div>
  )
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

export default App
