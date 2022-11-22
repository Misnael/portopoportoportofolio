import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../container/components/Topbar/Topbar'
import styles from '../styles/Home.module.css'
import Firstmain from '../container/components/mainbox/Firstmain/Firstmain'

export default function Home() {
  return (
   <>
  
    <Topbar />
    <Firstmain />
   
   </>
  )
}
