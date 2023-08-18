import React from 'react';

// Update queue: [setCounter(0 + 1), setCounter(0 + 1)]
function App() { 
	const [counter, setCounter] = React.useState(0) // It's like a photo of that particular call
	// first time React.useState is called it returns [0, function]
	// second time React.useState is called it returns [1, function]

	// On click a state update is added to the update queue
	// On exiting the event handler, the update queue is flushed
	function increment() {
		setCounter(counter + 1);
		setCounter(counter + 1);
	}

  return (
    <div>
      <h1>{counter}</h1>
			<button onClick={increment}>Increment</button>
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
