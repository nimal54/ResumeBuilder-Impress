import React, { useState } from 'react'
import './CreateResume.css'
import EducationInputModule from './EducationInputModule'
import ExperienceInputModule from './ExperienceInputModule'
import { TaggitSkills } from './TaggitSkills'
import { toast } from 'react-toastify';
import validator from 'validator'

export default function CreateResume(props) {
    const [educationBean, seteducationBean] = useState({})
    const [experienceBean, setexperienceBean] = useState({})
    const [expFlag, setexpFlag] = useState(false)
    const [eduFlag, seteduFlag] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()

        if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e.target.email.value)) {
            toast("Enter Valid Email");
        }
        else if (!validator.isMobilePhone(e.target.phn.value)) {
            toast("Enter Valid Phone Number");
        }
        else if (!eduFlag) {
            toast("Ensure that to save Education Feild ,Try again !!!");
        } else if (!expFlag) {
            toast("Ensure that to save Experience Feild ,Try again !!!");
        } else {
            props.setuserDetailsBean({
                fName: e.target.fname.value,
                lName: e.target.lname.value,
                email: e.target.email.value,
                phNumber: e.target.phn.value,
                address: e.target.address.value,
                skills: localStorage.getItem('skill'),
                eduDetails: educationBean,
                expDetails: experienceBean
            })
            props.setviewResume(true)
            toast("Resume Creation Successfully");
        }
    }

    const handleState = (e) => {
        props.setcursor("view")
    }




    return (
        <div className="parentDiv">
            <h2 style={{ fontSize: "22px", fontWeight: "300" }}>
                COMPLETE YOUR <b style={{ color: "#ffa01b" }}>RESUME</b>
            </h2>
            {
                props.viewResume ?
                    <div>
                        <button type="submit" onClick={e => handleState(e)} style={{ justifyContent: "left", margin: "20px" }} className="btn btn-warning">View Resume</button>
                    </div>
                    : <p></p>}
            <div><br></br>
                <h6><b style={{ color: "grey", marginTop: "5%" }}>Basic details</b></h6>
                <form onSubmit={handleSubmit} >
                    <div className="form-row">
                        <div className="col">
                            <label className="labelStyle">First Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="eg : Nimal" required />
                        </div>
                        <div className="col">
                            <label className="labelStyle">Last Name</label>
                            <input type="text" name="lname" className="form-control" placeholder="eg : Viju" required />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label className="labelStyle">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg : nimalviju@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label className="labelStyle">Phone Number</label>
                        <input type="number" name="phn" className="form-control" placeholder="eg : 919656112322" required />
                        <div className="invalid-feedback">
                            Please provide a valid number.
                    </div>
                    </div>
                    <div className="form-group">
                        <label className="labelStyle">Address</label>
                        <input type="text" name="address" className="form-control" id="inputAddress" placeholder="eg :ABCD House, Ernakulam, Kerala, India" required />
                    </div>

                    <h6 style={{ color: "grey", marginTop: "3%", marginBottom: "1%" }}><b >Education  details</b></h6>
                    <EducationInputModule seteducationBean={seteducationBean} seteduFlag={seteduFlag}></EducationInputModule>
                    <br></br>
                    <h6 style={{ color: "grey", marginTop: "3%", marginBottom: "1%" }}><b >Experience  details</b></h6>
                    <ExperienceInputModule setexperienceBean={setexperienceBean} setexpFlag={setexpFlag}></ExperienceInputModule>
                    <br></br>
                    <TaggitSkills></TaggitSkills>
                    <br></br>
                    <div className="form-check">
                        <p style={{ fontSize: "12px" }}>I agree to the <b style={{ color: "#ffa01b" }}>terms of service</b></p>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>

                    <button type="reset" style={{ marginLeft: "20px" }} className="btn btn-secondary">Reset</button>
                </form>
            </div>
            {
                props.viewResume ?
                    <div>
                        <button type="submit" onClick={e => handleState(e)} style={{ justifyContent: "left", margin: "20px" }} className="btn btn-warning">View Resume</button>
                    </div>
                    : <p></p>}

        </div>
    )
}

