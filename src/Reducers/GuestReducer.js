export const GuestReducer = (state, action) =>{
    // Todo action tiene un tipo para lo cuál agregramos un switch-case para determinar que tipo es.
    switch (action.type){
        case "add":
            return [...state, action.payload] //Hacemos una copia del state y le agregamos un action.payload que contiene la información que viene dentro el cuál es un objeto con los nuevos datos.
        case "edit":
            debugger
            return state.map(guest => (guest.id === action.payload.id ? action.payload : guest)) //Hacemos una copia del state y le agregamos un action.payload que contiene la información que viene dentro el cuál es un objeto con los nuevos datos.
        case "delete":
            return state.filter(element => element.id !== action.payload)
        default:
            return state;
    }
}