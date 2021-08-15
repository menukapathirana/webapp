import React,{useState} from 'react';
import './Cards.css'
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';



function Cards() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='cards'>
      {/* <Title/>
      <UploadForm /> */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        
    </div>
  );
}

export default Cards;