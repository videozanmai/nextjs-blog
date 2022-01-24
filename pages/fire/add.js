import { useState,useEffect } from "react";
import Layout from "../../components/layout";
import db from '../../components/fire'
import { useRouter } from "next/router";

export default function Add() {
    const [message, setMessage] = useState('add data')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [age, setAge] = useState('')
    const router = useRouter()

    const onChangeName = ((e) => {
        setName(e.target.value)
    })
    const onChangeMail = ((e) => {
        setMail(e.target.value)
    })
    const onChangeAge = ((e) => {
        setAge(e.target.value)
    })

    const doAction = ((e) => {
        const od = {
            name:name,
            mail:mail,
            age:age
        }
        db.collection('mydata').add(od).then(ref=>{
            router.push('/fire')
        })
    })

    return (
        <div>
            <Layout header="Next.js" title="Top page">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{message}</h5>
                    <div className="text-left">
                        <div className="form-grpup">
                            <label>Name:</label>
                            <input type="text" onChange={onChangeName} className="form-control"/>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="form-grpup">
                            <label>Mail:</label>
                            <input type="text" onChange={onChangeMail} className="form-control"/>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="form-grpup">
                            <label>Age:</label>
                            <input type="text" onChange={onChangeAge} className="form-control"/>
                        </div>
                    </div>
                </div>
                <button onClick={doAction} className="btn btn-primary">Add</button>
            </Layout>
        </div>
    )
}

