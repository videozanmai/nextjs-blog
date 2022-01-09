import Layout from "../components/layout"
import Link from "next/link"

export default function Other() {
  return (
    <div>
        <Layout header="Next" title="Other page.">
            <div className="card p-4 text-center">
                <h5 className="mb-4">this is other page...</h5>
                <Link href=".">
                    <button className="btn btn-primary">
                        Back to Top
                    </button>
                </Link>
            </div>
        </Layout>
    </div>
  )
}
