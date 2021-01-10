import './App.css';
import { useState, useEffect, useCallback } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import AddButton from './AddButton'

function App() {
  const [gotData, setGotData] = useState(false)
  const [items, setItems] = useState(undefined)

  const getData = useCallback(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    if (!response) {
      return
    }

    setItems(response.data)
  }, [])

  useEffect(() => {
    if (!gotData) {
      getData()
      setGotData(true)
    }
  }, [getData, gotData])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
        <AddButton getData={getData}/>
      </header>
      <main className="App-main">
        {items?.map((value, index) => (
          <TodoItem key={index} title={value.title} completed={value.completed} />
        ))}
      </main>
    </div>
  );
}

export default App;
