import React, { useState } from "react";
import { toast } from 'react-toastify';

export default function ExperienceInputModule(props) {
    const [inputList, setInputList] = useState([{ companyName: "", expYear: "", designation: "" }]);

    const handleInputChange = (e, index) => {
        e.preventDefault()
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };


    const handleRemoveClick = (e, index) => {
        e.preventDefault()
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = (e) => {
        e.preventDefault()
        setInputList([...inputList, { companyName: "", expYear: "", designation: "" }]);
    };

    const handleSaveData = (e) => {
        e.preventDefault()
        props.setexperienceBean(inputList)
        props.setexpFlag(true)
        toast("Saved Experience Data");
    }

    return (
        <div>
            {inputList.map((x, i) => {
                return (
                    <div className="form-row" key={i}>
                        <div className="col">
                        <label className="labelStyle">Company Name</label>
                            <input type="text" name="companyName" className="form-control" value={x.companyName} onChange={e => handleInputChange(e, i)} placeholder="ABCD Pvt Lmt" required/>
                        </div>
                        <div className="col">
                        <label className="labelStyle">Year of Experience</label>
                            <input type="text" name="expYear" className="form-control" value={x.expYear} onChange={e => handleInputChange(e, i)} placeholder="eg : 2.5" required/>
                        </div>
                        <div className="col">
                        <label className="labelStyle">Designation</label>
                            <input type="text" name="designation" className="form-control" value={x.designation} onChange={e => handleInputChange(e, i)} placeholder="eg : Full Stack Developer" required />
                        </div>
                        {inputList.length !== 1 && <button className="btn btn-secondary"  style={{ marginBottom: "30px", marginRight: "3px", marginTop: "30px" }} onClick={e => handleRemoveClick(e, i)}>-</button>}
                        {inputList.length - 1 === i && <button className="btn btn-success" style={{ marginBottom: "30px", marginTop: "30px" }} onClick={e => handleAddClick(e)}>+</button>}
                    </div>
                );
            })}
            <button className="btn btn-outline-warning" style={{ marginBottom: "30px", float: "right", color: "#ffa01b" }} onClick={e => handleSaveData(e)}>Save </button>
        </div>
    );
}

