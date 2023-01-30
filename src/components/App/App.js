import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'
import ApiError from '../ApiError/ApiError'

const App = () => {
    const [activity, setActivity] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [selectedType, setSelectedType] = useState('social');

    useEffect(() => {
      fetch(`http://www.boredapi.com/api/activity?type=${selectedType}`)
      .then((response)=> {
        if (response.ok) {
          return response.json(); 
        }
        throw new Error("Bad response - message from App.js fetch")
      })
      .then((response) => setActivity(response))
      .catch((error) => console.log(error));
    },[]) 

  const pretendActivity = {
    activity: "Kat's new activity to test the component",
    type: "social",
    participants: 1,
    price: 0.1,
    link: "",
    key: "1288934",
    accessibility: 0.2,
  };
  
  return (
    <div >
      < Header />
      < Activity activity={activity} />
      < ApiError apiError={apiError} />
      < SearchButtons 
          setActivity={setActivity}
          />
      
      < Footer />
    </div>
  )
}

export default App;
