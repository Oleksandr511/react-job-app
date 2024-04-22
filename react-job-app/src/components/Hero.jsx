import React from 'react'
import { useTranslation } from 'react-i18next'



const Hero = ({ title = 'Become a React Dev', subtitle = "Find the React job that fits your skill set" }) => {
  const [t, i18n] = useTranslation('global')

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div>
      <section className="bg-indigo-700 py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-2xl text-left p-3">
                
                <button onClick={()=>changeLang('en')} className='pr-3 hover:text-gray-500'>Eng </button>
                <button onClick={()=>changeLang('ukr')} className='hover:text-gray-500'>Ukr</button>
              </div>
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              
              {t("title")}
              
            </h1>
            <p className="my-4 text-xl text-white">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero