import React from 'react';
import Timer from './components/Timer';

// Update queue: []
function App() { 
	console.log("Renders App")
	const [showTimer, setShowTimer] = React.useState(false)

	function toggleTimer() {
		setShowTimer(!showTimer)
	}

  return (
    <div>
			<button onClick={toggleTimer}>{showTimer ? 'Hide Timer' : 'Show Timer'}</button>
			{showTimer && <Timer />}
		</div>
  )
}

export default App
