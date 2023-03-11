import React, { useState } from 'react'
import { Image } from 'react-native-web'
import { Link } from 'react-router-dom'
import { Text } from 'react-native'

function Content() {


    return (
        <>
            <section id='über-mich' className='flex flex-col justify-center items-center bg-[#282727] bg-opacity-90 
                pt-20'>
                <div className=''>
                    <header className='pb-5'>
                        <h1>
                            <span className='text-6xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Über mich</span>
                        </h1>
                    </header>
                </div>
                <div className='w-2/4 text-center laptop:w-2/4 tablet:w-3/4'>
                    <span className='font-bold text-gray-300 text-2xl font-tilt-neon'>
                        Unser Rüde wuchs in der Kupferstadt Stolberg auf mit dem wunderschönen Wahrzeichen der
                        Stolberger Burg , dem Tor zur Nordeifel.

                        Er liebt ausgiebige Spaziergänge in den Feldern und Tälern unserer schönen Heimat , genießt
                        aber genauso das chillen am Rursee mit uns.
                        Stets ist er ausgeglichen , genügsam und passt sich den jeweiligen Situationen an.
                        Während seines Erwachsen werden besuchten wir oft die belgische und holländische Küste mit ihm
                        wobei er das Autofahren sehr liebt. In den Urlauben zeigt er sich interessiert
                        an neuen Umgebungen und begleitet uns souverän auch in Biergärten oder ins Restaurant.
                        Am 01.05.2022 wurde er vom BSV 2010 e.V. nach vorgeschriebenen Regeln geprüft.
                        Erfolgreich legte er seine Zuchtzulassungsprüfung ab.
                        An seiner Seite lebt unsere ukrainische Berner Sennen Hündin Zita , die er stets kavaliersmäßig
                        behandelt und auch natürlich schon mal in ihre Schranken verweist.
                        Sein souveränes Verhalten gegenüber anderen Hunden beweist er jeden Tag
                        und ist auch deshalb in unserem Ort Mausbach sehr beliebt.
                        Bei Spaziergängen mit anderen Hunden übernimmt er auch gerne mal die Führungsposition
                        überlegen und stressfrei.
                        In der Welpen , Junghund und Hundeschule für Erwachsene Fellnasen meistert er gekonnt
                        und ruhig alle gelernten Aufgaben und Situationen.
                        Erwähnen möchten wir das Danilo an vielen Hundeausstellungen teilgenommen
                        hat und zahlreiche Auszeichnungen erhielt.
                        Seit November 2022 kann er sich als nationaler Champion ausweisen.
                    </span>
                    <div className='pt-10'>
                        <img className='w-3/5 mx-auto rounded-xl shadow-white shadow-xl tablet:w-full' src='Images/DSC_9112.JPG' alt='Banner' />
                    </div>
                    <div className='pt-10 tablet:w-fit'>
                        <p className='pb-5 text-center text-6xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white tablet:text-4xl'>Meine Lebensgefährtin</p>
                        <img className='w-3/5 mx-auto rounded-xl shadow-white shadow-xl tablet:w-full' src='Images/DSC_9025.JPG' alt='Zita' />
                    </div>
                    <div className='pt-10 text-gray-300 font-bold'>
                        <p className='text-2xl'>
                        Meine Eltern
                        </p>
                        <ul className=''>
                            <li>
                                <Text style={{ fontSize: '1.25rem', lineHeight: '1.5rem',fontWeight: 'bold', color: "#D1D5DB" }}>
                                    Pablo vom Hollandhof {`\n`}
                                    E1 N/N, E2 N/N, ED 0/0, HD A
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: '1.25rem', lineHeight: '1.5rem',fontWeight: 'bold', color: "#D1D5DB" }}>
                                    Kendy vom Feldbachtal {`\n`}
                                    HD A1, ED 0/0, OCD frei, E1 N/DM, e2 N/N, WH 65
                                </Text>
                            </li>
                        </ul>
                    </div>
                    <div className='text-gray-300 pt-10 font-bold text-2xl'>
                        <p className='text-center pb-5 text-4xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>
                            Über uns
                        </p>
                        Unsere Hunde sind Familienmitglieder leben mit in unserem Haus mit Garten.
                        Wir leben mit unseren Lakritznasen am Rande der Nordeifel in dem Dorf Mausbach. Der Ort ist ein
                        Stadtteil der Kupferstadt Stolberg und sehr ländlich.
                        Stolberg ist bekannt für die Produktion von Messing und Kupfer.
                        Einzigartig ist das Vorkommen des Galmeiveilchens.Das Veilchen kommt weltweit nur hier
                        sowie in einem grenznahem Belgischem Gebiet vor und ist streng geschützt.
                        Bis zur Rureifel und dem Nationalpark Nordeifel sind es nur wenige Kilometer. Gerne lassen wir hier auf
                        langen Spaziergängen mit Danilo und Zita die Seele zur Ruhe kommen.
                        Wir sind dem Berner Sennenhunde Verein 2010 e. V. angeschlossen und treffen uns
                        regelmäßig mit anderen Berner Freunden. Um uns weiterzubilden besuchen wir Zuchtseminare
                        und nehmen an Hundeausstellungen teil.
                        <img src="Images/DSC_9017.JPG" alt="über-uns" className="pt-10" />
                    </div>
                </div>
            </section>
            <section id='Bedeckung' className=' flex flex-col justify-center items-center  bg-[#282727] bg-opacity-90 
                pt-20'>
                <div className=' pt-20 text-6xl font-bold'>
                    <header className='pb-5'>
                        <h1>
                            <span className='font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Bedeckung</span>
                        </h1>
                    </header>
                </div>
                <div className='w-1/2 font-tilt-neon flex flex-col justify-center items-center text-gray-300 font-bold text-2xl laptop:w-1/2 tablet:w-3/4'>
                    <p className='indent-8 text-center'>

                        Wir würden uns über zuchtinteressierte Besitzer von Hündinnen freuen, welche mit Ihrer gesunden Hündin,
                        zwecks der Deckart, einem unabhängigen Zuchtverband angehören.

                    </p>
                    <p className='pt-5 indent-8 text-center'>
                        Deckanfragen sollten bitte nicht kurzfristig erfolgen.
                    </p>
                </div>
                <div className='w-1/2 pt-20 laptop:w-1/2 tablet:w-3/4 pb-20'>
                    <img className='' src='/Images/Stammbaum.jpg' alt="Stammbaum" />
                </div>
            </section>
        </>
    )
}

export default Content