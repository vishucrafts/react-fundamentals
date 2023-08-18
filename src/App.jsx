import React from 'react';

// First example Update queue: [setTime(1), setTime(1)]
// Current example Update queue: [setTime(1), setTime(prevTime => prevTime + 1)]
function App() { 
	const [time, setTime] = React.useState(0) 

	console.log("Renders")

	function increment() {
		setTime(time + 1);
		setTime(prevTime => prevTime + 1);
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
