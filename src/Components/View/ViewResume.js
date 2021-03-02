import React from 'react'
import './ViewResume.css'
export default function ViewResume(props) {

    const handleState = (e) => {
        props.setcursor("create")
    }

    return (
        <div className="card" style={{ marginTop: "2%" }}>
            <h5 className="card-header">Hi, {props.userDetailsBean.fName}<br></br><br></br><p className="headWelcomeText" >Welcome To Impress Resume Viewer</p></h5>
            <div className="card-body">
                <button type="submit" onClick={e => handleState(e)} style={{ justifyContent: "left", margin: "20px" }} className="btn btn-success">Create New Resume</button>
                <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}> Name :</span>{props.userDetailsBean.fName} {props.userDetailsBean.lName} </h5>
                <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Email :</span>{props.userDetailsBean.email} </h5>
                <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Phone Number :</span>{props.userDetailsBean.phNumber} </h5>
                <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Address :</span>{props.userDetailsBean.address} </h5>
                <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Skills :</span>{props.userDetailsBean.skills} </h5>
            </div>
            <div className="card-body">
                <hr></hr>
                <h6 style={{ color: "grey", marginTop: "3%", marginBottom: "1%" }}><b >Education  details</b></h6>

                {
                    props.cursor === 'view' ?
                        (
                            props.userDetailsBean.eduDetails.map((data, key) => {
                                return (
                                    <div className="card-body">
                                        <p style={{ color: "grey", fontSize: "13px" }}>{key + 1} - </p>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Institution :</span>{data.institutionName} </h5>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Passout Year :</span>{data.passYear} </h5>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Course :</span>{data.nameOfCource} </h5>
                                    </div>)
                            }))
                        :
                        (<p></p>)}

                <hr></hr>
                <h6 style={{ color: "grey", marginTop: "3%", marginBottom: "1%" }}><b >Education  details</b></h6>

                {
                    props.cursor === 'view' ?
                        (
                            props.userDetailsBean.expDetails.map((data, key) => {
                                return (
                                    <div className="card-body">
                                        <p style={{ color: "grey", fontSize: "13px" }}>{key + 1} - </p>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Company :</span>{data.companyName} </h5>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Experience :</span>{data.expYear} </h5>
                                        <h5 className="card-title h2style" ><span style={{ color: "grey", fontSize: "15px" }}>Designation :</span>{data.designation} </h5>
                                    </div>)
                            }))
                        :
                        (<p></p>)}



            </div>

        </div>

    )
}