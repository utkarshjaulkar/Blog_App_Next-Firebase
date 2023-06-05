import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EnterPage from './enter'
import Loader from '../components/Loader'
import { toast } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      {/* <Loader show /> */}
      <button
        onClick={() => {
          toast.success('Hello Toast')
        }}
      >
        Toast me
      </button>
    </div>
  )
}
