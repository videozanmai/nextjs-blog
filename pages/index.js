import Layout from "../components/layout"
import Link from "next/link"
import MyImage from "../components/image"

export default function Home() {
  return (
    <div>
      <Layout header="ヘッダーに表示する文字" title="Top page.">
        <div className="alert alert-primary">
          <h5 className="mb-4">Welcome to next.js!</h5>
          <Link href="./Other">
            <button className="btn btn-primary">go to Other</button>
          </Link>
          <MyImage fname="test.png" size="300"/>
        </div>
      </Layout>
    </div>
  )
}
