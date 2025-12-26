function Video({video}){
    return(
        <div>
            <Thumbnail video={video} />
            <a href={video.url}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </a>
            <likeButton video ={video} />
        </div>
    )
}