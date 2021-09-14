import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'
import ActivityList from '../ActivityList/ActivityList'

const App = () => {
  const result = {
    activity: "Kat's awesome random activity to test the component",
    type: "social",
    participants: 1,
    price: 0.1,
    link: "",
    key: "1288934",
    accessibility: 0.2,
  };
  
  const initialResults = [result, result, result];

  const [results, setResults] = useState(initialResults)
  const [type, setType] = useState({ type: '' })

  function addResult(result) {
    setResults([results, ...results])
  }

  function chooseType(event) {
    console.log("This is the chooseType function in App.js")
    setType({ type: event.target.value})
    console.log("This is the initial value of type: ",{type})
  }

  function searchBoredAPI(type) {
    console.log(`Searching Bored API for a ${type} activity. This is from the searchBoredAPI function in App.js`)
  }

  return (
    <div >
      < Header />
      < ActivityList results={results} />
      < SearchButtons 
          addResult={addResult} 
          searchBoredAPI={searchBoredAPI} 
          chooseType={chooseType}/>
      < Footer />
    </div>
  )
}

export default App
