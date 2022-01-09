import Header from "./header"
import Link from "next/link"

export default function Home() {
  let title = 'Index'

  return (
    <div>
      <Header title={title}/>
      <h1 className='bg-primary text-white display-4 text-right'>React</h1>
      <div className='container'>
        <h2 className='my-3 text-center'>{title}</h2>
        <h3 className="my-3 text-primary text-center">
          {title}
        </h3>
        <div className="card p-3">
          <p>
            これは、ページ移動のサンプルです。
          </p>
          <Link href="/Other">
            <a>Go to Other page</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
