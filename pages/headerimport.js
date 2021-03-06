import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HeaderImport(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
      crossOrigin='anonymous'></link>
    </Head>
  )
}