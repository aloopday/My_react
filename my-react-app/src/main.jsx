
import { useState } from 'react';
import {createRoot}from 'react-dom/client';
import MyButton from './MyButton.jsx';  // 注意大小写一致，推荐大写 B
import AboutPage from './AboutPage.jsx';
import Profile from './Avatar.jsx';
import ShoppingList from './CarList.jsx';
import NewButton from './NewButton.jsx';
import CountButton from'./Count.jsx'
import MyApp from './BigButton.jsx';

function App(){

   const [count,setCount] =useState(0);

    function handleClick(){
        setCount(count +1);
    }

  
  return(
    <>
    
    <h2 style={{color:'red' }}>Welcome to my first button test.</h2>
    <MyButton />
    <AboutPage />
    <Profile />
    <h2 style={{color:'orange'}}>Olivia you are so sweet, <br />
    You will get the number 1!</h2>
    <p>This is my shopList</p>
     <button onClick={handleClick}>
            Clicked {count} times
        </button>
    <ShoppingList />
    <NewButton />
   <CountButton count={count} onClick={handleClick} />
   <CountButton count={count} onClick={handleClick} />
   <MyApp />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);
