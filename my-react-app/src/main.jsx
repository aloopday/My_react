

import {createRoot}from 'react-dom/client';
import MyButton from './MyButton.jsx';  // 注意大小写一致，推荐大写 B
import AboutPage from './AboutPage.jsx';
import Profile from './Avatar.jsx';
import ShoppingList from './CarList.jsx';

function App(){
  
  return(
    <>
    <h2 style={{color:'red' }}>Welcome to my first button test.</h2>
    <MyButton />
    <AboutPage />
    <Profile />
    <p>This is my shopList</p>
    <ShoppingList />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);