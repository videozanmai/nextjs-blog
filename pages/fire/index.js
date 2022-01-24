import { useState,useEffect } from "react";
import Layout from "../../components/layout";
import db from '../../components/fire'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const auth = getAuth()
const provider = new GoogleAuthProvider();

export default function Home() {
    const mydata = []
    const [data, setData] = useState(mydata)
    const [message, setMessage] = useState('wait...')

    useEffect(() => {
        signInWithPopup(auth, provider).then(result=>{
            setMessage('logined:' + result.user.displayName)
        })
    },[])

    return (
        <div>
            <Layout header="Next.js" title="Top page">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{message}</h5>
                    <p className="h6 text-left">
                        uid:{auth.currentUser != null ? auth.currentUser.uid : ''}<br/>
                        displayName:{auth.currentUser != null ? auth.currentUser.displayName : ''}<br/>
                        email:{auth.currentUser != null ? auth.currentUser.email : ''}<br/>
                        phoneNumber:{auth.currentUser != null ? auth.currentUser.phoneNumber : ''}
                    </p>
                </div>
            </Layout>
        </div>
    )
}

