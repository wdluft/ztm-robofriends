import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
// import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'


const App = () => {
  const [robotList, setRobotList] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange= (e) => {
    setSearchField(e.target.value);
  }

  const filteredRobots = robotList.filter(robot => robot.name.toLowerCase().includes(searchField));

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(res => {
      return res.json();
    })
    .then(users => {
      setRobotList(users);
    });
  }, []);

  if(robotList.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  )
}

export default App
