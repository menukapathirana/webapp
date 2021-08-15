import React,{useState} from 'react';
import '../../App.css';
import Title from '../Title';
import UploadForm from '../UploadForm';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';

export default function Products() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
  <div>
  <h1 className='products'>PRODUCTS</h1>
  <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
  </div>
  );
}