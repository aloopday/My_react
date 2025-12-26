
const user={
    name:'Sonia',
    imageUrl:'https://i.imgur.com/XY9mQz1.png',
    imageSize:150,

};

 function Profile(){
    return(
        <>
        <h1>
            {user.name}
        </h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' +user.name}
            style={{
                width:user.imageSize,
                height:user.imageSize
            }}
            />
        </>
    );
}

export default Profile;