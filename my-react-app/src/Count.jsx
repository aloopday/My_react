import {useState} from 'react';
function CountButton(){
    const [count,setCount] =useState(0);

    function handleClick(){
        setCount(count +1);
    }

    return(
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

export default CountButton;