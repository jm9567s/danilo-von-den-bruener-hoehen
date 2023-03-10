import React from 'react'
import { useEffect, useRef, useState } from 'react'





function Lightbox({ clickedImage, setClickedImage}) {
  
  const lightboxRef = useRef(null);
  
  function closeLightboxView() {
      setClickedImage(null);
  }

  useEffect(() => {

      function handleCloseLightbox(event) {
          if(event.target === lightboxRef.current) {
              closeLightboxView();
          }
      }

      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleCloseLightbox);

      return () => {
          
          document.body.style.overflow = 'visible';
          document.removeEventListener('click', handleCloseLightbox);

      }
  },[])

  return (
    <div ref={lightboxRef} className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-10 lightbox'>
      <img
        src={clickedImage}
        alt={clickedImage.alt}
        className='tablet:max-w-md tablet:px-5'
        style={{ position: 'absolute', margin: 'auto', maxHeight: '90vh' }}
      />
    </div>
  );
}

export default Lightbox;
