import React, { useState } from 'react'
import './Home.css'
import {UserBean} from '../../Modals/UserDetails'
import CreateResume from '../Create/CreateResume'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewResume from '../View/ViewResume';



export default function Home(props) {

    const [cursor, setcursor] = useState("view")
    const [userDetailsBean, setuserDetailsBean] = useState(UserBean)
    const [viewResume, setviewResume] = useState(false)

    switch (cursor) {
        case "create":
            return (
                <div className="container homeDiv" style={{ height: window.innerHeight - 150 }}>
                    <ToastContainer hideProgressBar= {true} closeButton={false}  />
                <CreateResume viewResume={viewResume} setviewResume={setviewResume} setcursor={setcursor} setuserDetailsBean={setuserDetailsBean} />
                </div>)
        case "view":
            return (
                <div className="container homeDiv" style={{ height: window.innerHeight - 150, overflowY:"scroll" }}>
                    <ToastContainer hideProgressBar= {true} closeButton={false}  />
                <ViewResume cursor={cursor} setcursor = {setcursor} userDetailsBean ={userDetailsBean}  />
                </div>)
        default:
            return (<div></div>)
    }

}