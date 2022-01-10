import { useState } from "react"
import Layout from "../components/layout"
import Link from "next/link"
import MyImage from "../components/image"
import useSWR from "swr"

export default function Home() {
  const [address,setAddress] = useState('/api/hello')
  const {data,error} = useSWR(address)
  const url = './data.txt'

  const onChange = (e) => {
    setAddress('/api/hello?id=' + e.target.value)
  }

  return (
    <div>
      <Layout header="ヘッダーに表示する文字" title="Top page.">
        <div className="alert alert-primary">
          <h5 className="mb-4">data</h5>
          <Link href="./Other">
            <button className="btn btn-primary">go to Other</button>
          </Link>
          <MyImage fname="test.png" size="250"/>
          <h5 className="mb-4">{JSON.stringify(data)}</h5>
        <input type="number" className="form-control" onChange={onChange}/>
        </div>
      </Layout>
    </div>
  )
}
