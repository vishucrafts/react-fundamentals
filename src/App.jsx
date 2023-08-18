function App() {
	var counter = 0;

	function increment() {
		counter++; // counter = counter + 1
	}

  return (
    <div>
      <h1>{counter}</h1>
			<button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
