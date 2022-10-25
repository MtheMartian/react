import './App.css';
import {useState} from 'react';

const who = [
  {title: 'Sheriff', headShot: 150, body: 50, id: 1},
  {title: 'Ghost', headShot: 107, body: 23, id: 2},
  {title: 'Pistol', headShot: 80, body: 'Garbage', id: 3},
];

function MyButton({count, onClick}){
  return(
    <button className='poop' onClick={onClick}>Clicked {count} Times</button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count + 1);
  }

  const fireArm = who.map(guns =>
    <li key={guns.id}>
      <h2>{guns.title}</h2>
      <p>Headshot Damage: {guns.headShot}</p>
      <p>Bodyshot Damage: {guns.body}</p>
    </li>
  );
  
  return (
    <main>
      <h1>Welcome!</h1>
      <ul id='my-guns'>{fireArm}</ul>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </main>  
  );
}

export default App;
