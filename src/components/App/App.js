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

  return (
    <div >
      < Header />
      < ActivityList results={results} />
      < SearchButtons />
      < Footer />
    </div>
  )
}

export default App
