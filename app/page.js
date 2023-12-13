import Image from 'next/image'
import NavBar from '../components/NavBar'

export default async function Home() {
  return (
    <>
      <NavBar />
      <h1 className='text-red-500'>hello</h1>
    </>
  )
}
