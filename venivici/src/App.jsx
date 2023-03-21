import { useState } from 'react'
import './App.css'
import APIDogInfo from './components/APIdoginfo'
import BanList from './components/banlist';
const ACCESS_KEY = import.meta.env.VITE_DOG_API_ACCESS_KEY;

function App() {
  const dogNames = ["Luna", "Max", "Bella", "Milo", "Daisy", "Cooper", "Lucy", "Charlie",
                    "Willow", "Teddy", "Penny", "Tucker", "Sadie", "Buddy", "Maggie", "Bear",
                    "Rosie", "Rocky", "Ruby", "Leo"];
  const [currentDogName, setCurrentDogName] = useState(null);
  const [dogValues, setDogValues] = useState({
    url: "",
    breed: "",
    breed_group: "",
    life_span: "",
    weight: ""
  })

  // I'm going to make my one banned attribute the breed attribute
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const getRandDogName = () => {
    let randomDogNameIndex = Math.floor(Math.random() * dogNames.length);

    setCurrentDogName(dogNames[randomDogNameIndex]);
  }

  const getDogValues = async () => {
    let query = `https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=${true}`;
    let response = await fetch(query);
    let json = await response.json();
    console.log(json);
    
    // get another query if you got one that has a banned attribute
    while(bannedAttributes.includes(json[0].breeds[0].name)) {
      response = await fetch(query);
      json = await response.json();
      console.log(json);
    }
    setDogValues({
      url: json[0].url,
      breed: json[0].breeds[0].name,
      breed_group: json[0].breeds[0].breed_group,
      life_span: "Life: " + json[0].breeds[0].life_span,
      weight: json[0].breeds[0].weight.metric + " lbs"
    })
    getRandDogName();
  }

  const addToBannedList = (attribute) => {
    if(!bannedAttributes.includes(attribute)) {
      setBannedAttributes((bannedSoFar) => [...bannedSoFar, attribute]);
    }
  }

  const removeFromBannedList = (attribute) => {
    if(bannedAttributes.includes(attribute)) {
      setBannedAttributes(bannedAttributes.filter(item => item !== attribute));
    }
  }

  return (
    <div className='whole_app'>
      <div className='dog_generator'>
        <h1>Veni Vici!</h1>
        <h3>Discover dogs from your wildest dreams! 🐶🐕</h3>
        <APIDogInfo dogValues={dogValues} currentDogName={currentDogName} onSubmit={getDogValues} addToBannedList={addToBannedList}/>
      </div>
      <div className='column_container'>
        <BanList bannedAttributes={bannedAttributes} removeFromBannedList={removeFromBannedList}/>
      </div>
    </div>
  )
}

export default App
