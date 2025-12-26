const products=[
    {title:'Tesla',isCar: true, id:1},
    {title:'Apple',isCar: false, id:2},
    {title:'Toyota',isCar: true,id:3},

];

function ShoppingList(){
    const listItems =products.map(product =>
        <li
            key={product.id}
            style={{
                color:product.isFruit ?'magenta' :'darkgreen'

            }}
            >
                {product.title}
            </li>
    );

    return(
        <ul>{listItems}</ul>
    );

}

export default ShoppingList;