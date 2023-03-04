import React from 'react'

function GalleryImage({ src, alt, width }) {
  return (
    <>
        <div className='flex items-center justify-center'>
            <img src={src} alt={alt} width={width}/>
        </div>
    </>
  )
}

export default GalleryImage