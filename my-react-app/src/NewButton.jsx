
function NewButton(){
    function handleClick(){
        alert('You clicked me!');
    }

    return(
        <button onClick={handleClick}>
            Surprise!
        </button>

    );
}

export default NewButton;