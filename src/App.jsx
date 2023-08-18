import React from 'react';
import Timer from './components/Timer';

function App() { 
	const [showTimer, setShowTimer] = React.useState(true)

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
