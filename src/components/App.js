import React, {useEffect, useState} from 'react'

function App() {
    const [image, setImage] = useState(false)
    const [showImage, setShowImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => (setShowImage(data), setImage(!image)))
    }, [])

   
return (
    <div>
    <p>{image ? "" : "Loading..."}</p>;
    <img src={showImage} alt="A Random Dog"></img>
    </div>
)

}


export default App;