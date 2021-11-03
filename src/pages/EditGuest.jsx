import React, {useReducer, useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import { GuestReducer } from '../Reducers/GuestReducer'
import '../styles/add-guest.css'

const init = () =>{
    const guests = localStorage.getItem("guests")
    return guests ? JSON.parse(guests) : []
}

const EditGuest = ({history}) => {
    const {id} = useParams()
    const [state, dispatch] = useReducer(GuestReducer, [], init)
    const [data, setData] = useState({name: "", lastName: "", email:"", twitter:""})
    const {name, lastName, email, twitter} = data
    const [terms, setTerms] = useState(false)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const actionEdit = {
        type: "edit",
        payload: {
            id,
            name,
            lastName,
            email,
            twitter
        }
    }

    const handleEdit = () =>{
        dispatch(actionEdit)
        setData({name: "", lastName: "", email:"", twitter:""})
        history.goBack()
    }

    useEffect(() => {
        const guest = state.find(guest => guest.id === id)
        setData({
            name: guest.name,
            lastName: guest.lastName,
            email: guest.email,
            twitter: guest.twitter
        })

    }, [])

    useEffect(() =>{
        localStorage.setItem("guests", JSON.stringify(state))
    }, [state])


    return (
        <>
        <Navbar />
        <div className="add-guest-container">
            <label className="user-info-add">Nombre:</label> <br/>
            <input onChange={handleChange} name="name" value={name} className="input-form" type="text" placeholder="Nombre"></input> <br />
            <label className="user-info-add">Apellidos:</label> <br/>
            <input onChange={handleChange} name="lastName" value={lastName} className="input-form" type="text" placeholder="Apellidos"></input> <br/>
            <label className="user-info-add">Correo electronico:</label> <br/>
            <input onChange={handleChange} name="email" value={email} className="input-form" type="email" placeholder="Email"></input> <br/>
            <label className="user-info-add">Twitter:</label> <br/>
            <input onChange={handleChange} name="twitter" value={twitter} className="input-form" type="text" placeholder="Twitter"></input>
            <button className="btn-form" onClick={handleEdit}>Editar registro</button>
        </div>
        </>
    )
}

export default EditGuest
