import React, { useEffect, useState } from 'react';
import useFileSelection  from '../../hooks/useFileSelection';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';
import { logoutUser } from '../../firebase';
import Loading from '../../components/Loader/Loading';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [addFile, removeFile] = useFileSelection();

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
      </div>
      <button onClick={logoutUser}>
        Logout
      </button>
    </div>) 
}
  </>
  );
};
export default Home;

