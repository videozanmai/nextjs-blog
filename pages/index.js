import { useState } from "react"
import Layout from "../components/layout"
import Link from "next/link"
import MyImage from "../components/image"
import useSWR from "swr"

export default function Home() {
  const [pref, setPref] = useState({id:0,item:'name'})
  const [address,setAddress] = useState('/api/hello/' + pref.id + '/' + pref.item)
  const {data,error} = useSWR(address)
  const url = './data.txt'

  const onChange = (e) => {
    pref.id = e.target.value
    setPref(pref)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }

  const onSelect = (e) => {
    pref.item = e.target.value
    setPref(pref)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }
  return (
    <div>
      <Layout header="ヘッダーに表示する文字" title="Top page.">
        <div className="alert alert-primary">
          <h5 className="mb-4">data</h5>
          <Link href="./Other">
            <button className="btn btn-primary">go to Other</button>
          </Link>
          <Link href="./Calc">
            <button className="btn btn-primary">go to Calc</button>
          </Link>
          <MyImage fname="test.png" size="250"/>
          <h5 className="mb-4">{JSON.stringify(data)}</h5>
        <input type="number" className="form-control" onChange={onChange}/>
        <select onChange={onSelect} className="form-control form-control-sm">
          <option value="name">Name</option>
          <option value="mail">Mail</option>
          <option value="age">Age</option>
        </select>
        </div>
      </Layout>
    </div>
  )
}
