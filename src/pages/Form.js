


import react, { useState } from "react";
import '../styles/Form.css';


function Form() {

    const [switchForm, setSwitchForm] = useState(true);

    const btnName = ["Small Form", "Big Form"];

    return (
        <section className="form-sec">
            <div className="form-sec-btn">
                <button onClick={()=> setSwitchForm(!switchForm)}>{switchForm? btnName[1] : btnName[0]}</button>
            </div>
            {switchForm? 
                <SmallForm/> 
                :
                <BigForm/> 
                }
        </section>
    );
}


function SmallForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
        setName('');
        setEmail('');
    }

    return (

        <div className="small-form">
            <h1>Small Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" >Submit</button>
            </form>
        </div>

    );
}

function BigForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        date: "",
        message: ""
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData(prev => ({
        //   ...prev,
        //   [name]: value
        // }));

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            phoneNo: "",
            date: "",
            message: ""
        });
        console.log(formData);
    }

    return (

        <div className="big-form">
            <h1>Big Form</h1>
            <form onSubmit={handleSubmit} >
                <input name="name" placeholder="Name" value={formData.name} type="text" onChange={handleChange} required />
                <input name="email" placeholder="Email" value={formData.email} type="email" onChange={handleChange} required />
                <input name="phoneNo" placeholder="Valid Mobile Number" value={formData.phoneNo} type="tel" onChange={handleChange} required />
                <input name="date" value={formData.date} type="date" onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} type="text" onChange={handleChange} required />
                <button type="submit" >Submit</button>
            </form>
        </div>

    );
}

export default Form;