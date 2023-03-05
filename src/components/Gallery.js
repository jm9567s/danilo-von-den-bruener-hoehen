import React, { useState } from 'react'
import GalleryImage from './GalleryImage';
import Lightbox from './Lightbox';


const imageList = [
    {
        src: "Images/DSC_8798.JPG",
        alt: "bild1",
    },
    {
        src: "Images/DSC_8853-Bearbeitet.JPG",
        alt: "bild2",
    },
    {
        src: "Images/DSC_8895.JPG",
        alt: "bild3"
    },
    {
        src: "Images/bildvonwhatsapp.jpg",
        alt: "bild4",
        width: 810,
    },
    {
        src: "Images/DSC_8862.JPG",
        alt: "bild5"
    },
    {
        src: "Images/DSC_9041.JPG",
        alt: "bild6",
        width: 800,
    },
    {
        src: "Images/DSC_9112.JPG",
        alt: "bild7"
    },
    {
        src: "Images/DSC_8848.JPG",
        alt: "bild8"
    },
    {
        src: "Images/DSC_9116.JPG",
        alt: "bild9"
    },
];

function Gallery() {


    const [clickedImage, setClickedImage] = useState(null);

    const handleClick = (image, idx) => {
        setClickedImage(image.src);
        console.log(image.src + " got clicked!");
    }
    

return (
    <section id='Galerie' className='w-full bg-[#282727] flex flex-col justify-center items-center'>
        <div className='grid grid-cols-3 gap-4 pt-10 pb-10 tablet:grid-cols-1'>
            {imageList.map((image, idx) => (
                <div key={idx} className='relative'>
                    <img
                        src={image.src}
                        alt={image.alt}
                        clickedImage={image.src}
                        className='h-full w-full object-cover object-center hover:drop-shadow-sm'
                        style={{ maxHeight: '600px' }}
                    />
                    <div onClick = {() => handleClick(image, idx)} className='absolute inset-0 flex items-center justify-center opacity-0 hover:bg-opacity-75 transition-opacity duration-300 cursor-pointer'>
                    </div>
                </div>
            ))}
        </div>
        { clickedImage && <Lightbox clickedImage={clickedImage} setClickedImage={setClickedImage}/> }
    </section>
)
}

export default Gallery