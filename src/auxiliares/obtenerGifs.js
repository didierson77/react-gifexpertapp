

export const obtenerGifs=async(categoria)=>{
        
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=SlRMGX0O1TB9brqtcvj22BE3Ih9bdwwl`;
    const resp= await fetch(url);
    const {data}= await resp.json();

    const gifs=data.map( img=>{
            return{
                    id:     img.id,
                    titulo: img.title,
                    url:    img.images?.downsized_medium.url,

            }
    });

    return gifs;
    // console.log(data);
    //console.log(gifs);
    // setImages(gifs);
}
