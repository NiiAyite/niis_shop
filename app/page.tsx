"use client";

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { HomeIcon } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  )
}
