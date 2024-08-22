'use client'
import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import './mint.css'
import MintButton from './MintButton'
import AppBg from './AppBg'

const Mint = () => {
  return (
    <div className='flex h-full w-full flex-col place-content-center items-center justify-center px-4 text-slate-900'>
      <TiltCard />
      <div className='mt-[30px] flex justify-center'>
        <MintButton></MintButton>
      </div>
      <div className='p-2 text-center text-lg text-gray-500'>
        Pet3 is a virtual pet on Chrome Extension.
        <br />
        Drag to find hidden treasure box and $PET
      </div>
    </div>
  )
}

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

const TiltCard = () => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className='relative h-48 w-40 rounded-xl bg-gradient-to-br from-yellow-300 to-red-300'
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg'
      >
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className='text-center text-2xl font-bold'
        >
          <img src='pet3.png' alt='' />
        </p>
      </div>
    </motion.div>
  )
}

export default Mint
