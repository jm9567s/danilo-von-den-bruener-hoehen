import React, { useEffect, useRef, useState } from 'react'

function Navbar() {

  const [isTransparent, setTransparency] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {

  
      
      const changeNavbarOpacity = () => {

        console.log(window.scrollY);
        if(window.scrollY <= 1210) {
          setTransparency(true);
        } else {
          setTransparency(false);
        }
      }

    window.addEventListener('scroll', changeNavbarOpacity);
    return() => window.removeEventListener('scroll', changeNavbarOpacity);
    

  }, [])

  return (
    <>
      <nav className={`bg-gray-800 bg-opacity-10 text-slate-500 w-full duration-200 fixed top-0 ${isTransparent ? 'bg-opacity-10 text-white ' : 'bg-opacity-80 text-white'} tablet:h-full tablet:w-2/4 tablet:ease-in-out`}>
        <div className=" flex items-center justify-center tablet:bg-gray-700 tablet:w-full tablet:h-full ">
          <ul className="
          nav-menu
          object-fill
          justify-center 
          space-x-8 
          flex 
          flex-row
          h-20
          uppercase
          font-bold
          text-lg
          tablet:flex-col
          tablet:items-center
          tablet:space-x-0
          tablet:space-y-4
          tablet:h-full
          ">
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Start' className='start flex items-center h-full' onClick={closeMenu}>
                <span>
                Start
                </span>
              </a>
            </li>
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Über-mich' className='über-mich flex items-center h-full' onClick={closeMenu}>
                <span>
                  Über mich
                </span>
              </a>
            </li>
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Galerie' className='bedeckung flex items-center h-full' onClick={closeMenu}>
                <span>
                  Galerie
                </span>
              </a>
            </li>
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Bedeckung' className='bedeckung flex items-center h-full' onClick={closeMenu}>
                <span>
                  Bedeckung
                </span>
              </a>
            </li>
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Links' className='links flex items-center h-full' onClick={closeMenu}>
                <span>
                  Links
                </span>
              </a>
            </li>
            <li className="nav-item hover:text-slate-50 hover:scale-105 duration-200">
              <a href='#Links' className='links flex items-center h-full' onClick={closeMenu}>
                <span>
                  Kontakt
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar