import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
import './Home.css'
import useFileSelection  from '../../hooks/useFileSelection';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';
import { logoutUser } from '../../firebase';
import Loading from '../../components/Loader/Loading';
//import ImageUpload from '../../components/ImageUpload/ImageUpload';
//import Image from '../../components/ImageGallery/Image';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [addFile, removeFile] = useFileSelection();
  const [images, setImages] = useState([ {
    original: "https://picsum.photos/id/1024/1000/600/",
    thumbnail: "https://picsum.photos/id/1024/250/150/",
  },
  {
    original: "https://picsum.photos/id/1025/1000/600/",
    thumbnail: "https://picsum.photos/id/1025/250/150/",
  },
  {
    original: "https://picsum.photos/id/1026/1000/600/",
    thumbnail: "https://picsum.photos/id/1026/250/150/",
  },
  {
    original: "https://picsum.photos/id/1027/1000/600/",
    thumbnail: "https://picsum.photos/id/1027/250/150/",
  },
  {
    original: "https://picsum.photos/id/1029/1000/600/",
    thumbnail: "https://picsum.photos/id/1029/250/150/",
  },]);


  const request = ()=>{
    new Promise(resolve => setTimeout(()=> resolve(), 10000));
  }
  useEffect(()=>{
    request()
    setIsLoading(!isLoading)
    },[]);

  return (
    <>
    {isLoading ? (<Loading/>) : (<div style={{ textAlign: 'center'}}>
      <h1>Welcome to this Gallery</h1>  
      <div style={{ marginTop: '20px' }}>
        <div className='card' style={{ margin: 'auto', width: '50%'  }}>
          <DragAndDrop addFile={addFile} removeFile={removeFile}/>         
        </div>
        <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
      </div>
      {/*<Image />
      <ImageUpload/>*/}
      <button onClick={logoutUser}>
        Logout
      </button>
    </div>) 
}
  </>
  );
};
export default Home;

