import Head from "next/head";
import styles from '../styles/Home.module.css'
import Header from "./header";
import Footer from "./footer";
import HeaderImport from "../pages/headerimport";

export default function Layout(props) {
    return (
        <div>
            <HeaderImport title={props.title}/>
            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary">
                    {props.title}</h3>
                    {props.children}
            </div>
            <Footer footer="copyright SYODA-tuyano."/>
        </div>
    )
}