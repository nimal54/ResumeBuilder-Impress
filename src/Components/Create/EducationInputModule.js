import React, { useState } from "react";
import { toast } from 'react-toastify';

export default function EducationInputModule(props) {
    const [inputList, setInputList] = useState([{ institutionName: "", passYear: "", nameOfCource: "" }]);

    const handleInputChange = (e, index) => {
        console.log(e.target);
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { institutionName: "", passYear: "", nameOfCource: "" }]);
    };

    const handleSaveData = (e) => {
        e.preventDefault()
        props.seteducationBean(inputList)
        props.seteduFlag(true)
        toast("Saved Education Data");
    }

    return (
        <div>
            {inputList.map((x, i) => {
                return (
                    <div className="form-row" style={{ marginBottom: "5%" }} key={i}>
                        <div className="col">
                            <label className="labelStyle">Institution Name</label>
                            <input type="text" name="institutionName" className="form-control" value={x.institutionName} onChange={e => handleInputChange(e, i)} placeholder="eg : ABCD Engineering Science" required />
                        </div>
                        <div className="col">
                            <label className="labelStyle">Passout Year</label>
                            <input type="number" name="passYear" className="form-control" value={x.passYear} onChange={e => handleInputChange(e, i)} placeholder="eg : 2019" required />
                        </div>
                        <div className="col">
                            <label className="labelStyle">Course Name</label>
                            <input type="text" name="nameOfCource" className="form-control" value={x.nameOfCource} onChange={e => handleInputChange(e, i)} placeholder="eg : Btech" required />
                        </div>
                        {inputList.length !== 1 && <button className="btn btn-secondary" style={{ marginBottom: "30px", marginRight: "3px", marginTop: "30px" }} onClick={() => handleRemoveClick(i)}>-</button>}
                        {inputList.length - 1 === i && <button className="btn btn-success" style={{ marginBottom: "30px", marginTop: "30px" }} onClick={handleAddClick}>+</button>}
                    </div>
                );
            })}
            <button className="btn btn-outline-warning" style={{ marginBottom: "30px", float: "right", color: "#ffa01b" }} onClick={e => handleSaveData(e)}>Save </button>
        </div>
    );
}

