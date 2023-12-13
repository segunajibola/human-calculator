import Image from 'next/image'
import NavBar from '../components/NavBar'
import HomePage from '../components/Home'

export default async function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}
