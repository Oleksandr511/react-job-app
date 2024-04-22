import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import global_en from '../locales/en/global.json'
import global_ukr from '../locales/ukr/global.json'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    lng: "ukr",
    ukr: {
      global: global_ukr
    }
  }
})


const HomePage = () => {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <Hero />
      </I18nextProvider>
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage