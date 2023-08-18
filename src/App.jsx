import React from 'react';
import Timer from './components/Timer';

function App() { 
	const [time, setTime] = React.useState(0) 

	function increment() {
		// State is like a photo in that particular call
		setInterval(() => {
			// setTime(time + 1)
			setTime(prevTime => prevTime + 1); 
		}, 1000);
	}

  return (
    <Timer />
  )
}

export default App
