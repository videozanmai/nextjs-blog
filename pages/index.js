import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let title = 'Next.js pddage'
  let message = 'React Next.js 動く'

  const h1 = {
    textAlign:'right',
    padding:'5px 15px'
  }
  const p = {
    textAlign:'left',
    margin:'0px 5px',
    color:'#669',
    fontSize:'18pt'
  }
  const subTitle = {
    textAlign:'center',
    margin:'0px 5px',
    color:'#99d',
    fontSize:'24pt',
    fontWeight:'bold'
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        crossOrigin='anonymous'></link>
      </Head>
      <h1 className='bg-primary text-white display-4' style={h1}>React</h1>
      <div className='container'>
        <h4 className='my-3' style={subTitle}>{title}</h4>
        <div className='alert alert-primary text-center'>
          <p className='h5' style={p}>{message}</p>
        </div>
      </div>
    </div>
  )
}
