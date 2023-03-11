import React from 'react'

function GalleryImage({ src, alt }) {
  return (
    <>
        <div className='flex items-center justify-center'>
            <img src={src} alt={alt}/>
        </div>
    </>
  )
}

export default GalleryImage