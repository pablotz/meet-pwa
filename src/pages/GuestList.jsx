import React, {useEffect, useReducer, useState} from 'react'
import { GuestReducer } from '../Reducers/GuestReducer'
import Navbar from '../components/Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import GuestCard from '../components/GuestCard/GuestCard'
import '../styles/guest-list-container.css'


const init = () =>{
    const guests = localStorage.getItem("guests")
    return guests ? JSON.parse(guests) : []
}

const GuestList = () => {

    const [state, dispatch] = useReducer(GuestReducer, [], init)
    const [guests, setGuests] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        setGuests(state)
    }, [state])

    const handleSearch = (e) => {
        const search = e.target.value
        const filteredGuests = state.filter(guest => guest.name.toLowerCase().includes(search.toLowerCase()))
        setGuests(filteredGuests)
    }


    return (
        <>
        <Navbar />
        <div className="add-guest-container">
            <NavLink className="add-guest-link" to="/add-guest">Agregar participante</NavLink> <br />
            <input className="search-input" onChange={handleSearch} type="text" placeholder="Buscar participante" />
        </div>
        <div className="guest-list-container">
            {guests.map(guest => {
                return (
                    <GuestCard 
                    guest = {guest} 
                    />
                )
            })}
        </div>
        </>
    )
}

export default GuestList
