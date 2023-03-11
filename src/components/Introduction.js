import React from 'react'
import { Text } from 'react-native';

function Introduction() {

  const healthInfo = "HD:A1 | ED:0/0 | OCD:Frei \n DM Exon 1 n/dm | Exon 2n/n"

  return (
    <>
      <section id="Über-mich" className='intro_wrapper flex flex-col items-center justify-center bg-[#282727] bg-opacity-100'>
        <div className='intro_wrapper text-center'>
          <header className='pt-10 pb-5 text-4xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>
            <h1>
              <span className=''>Berner Sennen Deckrüde</span>
            </h1>
          </header>
          <header className='font-dancing-font'>
            <h2>
              <span className='text-6xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Danilo von den Brüner Höhen</span>
            </h2>
            <h2>
              <span className='text-3xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>- Rufname Michl -</span>
            </h2>
          </header>
          <div className='pb-10 content'>
            <p className='pt-10 text-gray-300 text-2xl font-tilt-neon'>Zuchtbuchnr: BSV2020 - 005</p>
            <div className='text-2xl general-dog-info text-gray-300 font-tilt-neon'>
              <Text style={{ fontStyle: 'font-tilt-neon', fontSize: '1.25rem', lineHeight: '1.5rem',color: '#D1D5DB'}}>
                Geboren am 03.05.2020 {`\n`}
                am Niederrhein im Ort Hamminkeln
              </Text>
              <p>Größe: 68cm</p>
              <p>Gewicht: 50kg</p>
            </div>
            <div className='health-dog-info pt-5'>
              <p>
                <Text style={{ fontSize: '1.25rem', lineHeight: '1.5rem',fontWeight: 'bold', color: "#D1D5DB" }}>
                  HD:A1 | ED:0/0 | OCD:Frei
                  {`\n`}
                  DM Exon1 n/dm | Exon2 n/n"
                </Text>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Introduction