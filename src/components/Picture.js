import React from 'react';
import './Picture.css';
import api from '../utils/Api';

function Picture() {
    const[pictures, setPictures]=React.useState([]);

    React.useEffect(()=>{
      api.picturesDownload('london', 4)
       .then ((res)=>{
          setPictures(res.results);
})

        .catch((err)=>{
           console.log(err);
}) 
},[]);
if(pictures.length!==0){
   return (
     <div className="picture">
      <img src={pictures[0].urls.small} className="picture__item" alt=''/>
      <img src={pictures[1].urls.small} className="picture__item" alt=''/>
      <img src={pictures[2].urls.small} className="picture__item" alt=''/>
      <img src={pictures[3].urls.small} className="picture__item" alt=''/>
     </div>
   );
   }else{
      console.log("no pictures");
    return (
        <div/>
      );   
   }      
}

 //
export default Picture;