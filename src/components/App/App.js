import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'

const App = () => {
  const pretendActivity = {
    activity: "Kat's new activity to test the component",
    type: "social",
    participants: 1,
    price: 0.1,
    link: "",
    key: "1288934",
    accessibility: 0.2,
  };
  
  const [type, setType] = useState('');
  const [activity, setActivity] = useState({});

  function chooseType(event) {
    setType({ type: event.target.value})
  }

  function searchBoredAPI(type) {
    console.log(`Searching Bored API for a ${type} activity. This is from the searchBoredAPI function in App.js`)
  }

  return (
    <div >
      < Header />
      < Activity activity={pretendActivity} />
      < SearchButtons 
          setActivity={setActivity}
          searchBoredAPI={searchBoredAPI} 
          chooseType={chooseType}/>
      < Footer />
    </div>
  )
}

export default App;
