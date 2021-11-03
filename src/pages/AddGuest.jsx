import React, {useState, useReducer, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { GuestReducer } from '../Reducers/GuestReducer'
import '../styles/add-guest.css'


const init = () =>{
    const guests = localStorage.getItem("guests")
    return guests ? JSON.parse(guests) : []
}

const AddGuest = ({history}) => {

    const [data, setData] = useState({ name: "", lastName: "", email:"", twitter:""})
    const {name, lastName, email, twitter} = data

    const [terms, setTerms] = useState(false)

    const [state, dispatch] = useReducer(GuestReducer, [], init)

    useEffect(() =>{
        localStorage.setItem("guests", JSON.stringify(state))
    }, [state])

    const actionAdd = {
        type: "add",
        payload: {
            id: '_' + Math.random().toString(36).substr(2, 9),
            name,
            lastName,
            email,
            twitter
            
        }
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleData = () =>{
        if(terms){
            
            if(name == "" || lastName == "" || email == "" || twitter == ""){
                alert("Por favor, llene todos los campos")
            }else{
            dispatch(actionAdd)
            setData({name: "", lastName: "", email:"", twitter:""})
            history.goBack()
            }
        } else {
            alert("Acepta los terminos y condiciones de uso")
        }
    }


    return (
        <>
        <Navbar/>
        <div className="add-guest-container">
            <input onChange={handleChange} name="name" value={name} className="input-form" type="text" placeholder="Nombre"></input>
            <input onChange={handleChange} name="lastName" value={lastName} className="input-form" type="text" placeholder="Apellidos"></input>
            <input onChange={handleChange} name="email" value={email} className="input-form" type="email" placeholder="Email"></input>
            <input onChange={handleChange} name="twitter" value={twitter} className="input-form" type="text" placeholder="Twitter"></input>
            <div className="terms-form">
                <input className="check-form" type="checkbox" value={terms} onChange={(e) => setTerms(e.target.value)} name="terms" id="terms" />
                <label className="terms-label" for="terms">Acepto los términos y condiciones</label>
            </div>
            <button className="btn-form" onClick={handleData}>Registrar</button>
        </div>
        </>
    )
}

export default AddGuest
