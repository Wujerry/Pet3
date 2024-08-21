'use client'
import { useEffect } from 'react'
import bgMatter from '../matter/app-bg'
import { Pet } from '../pet/Pet'

export default function AppBg() {
  useEffect(() => {
    // bgMatter()
    Pet()
  }, [])
  return <div id='app-bg-wrapper' className='absolute bottom-0 left-0 right-0 top-0' style={{ zIndex: -1 }}></div>
}
