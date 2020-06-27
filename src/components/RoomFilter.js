import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'
//get all unique values
const getUnique = (items,value) => {
    return[...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,type,price,minPrice,maxPrice,minSize,maxSize,capacity,pets,breakfast,
    } = context
    //get unique types
    let types = getUnique(rooms,'type')
    //add all
    types = ['all',...types]
    //map to JSX
    types = types.map((item,index) =>{
        return <option value = {item} key = {index}>{item}</option>
    })
    let people = getUnique(rooms,'capacity')
    people = people.map((item,index) =>{
    return <option key = {index} value = {item}>{item}</option>
    })
    return (
        <section className = "filter-container">
            <Title title = "Seach Rooms"/>
            <form className = "filter-form">
                {/*select Type*/}
                <div className = "from-group">
                    <label htmlFor = "type">Room type</label>
                    <select name = "type" id = "type" value = {type} className = "form-control" 
                    onChange = {handleChange}>
                        {types}
                    </select>
                </div>
                {/*End select Type*/}
                {/*Guest*/}
                <div className = "from-group">
                    <label htmlFor = "capacity">Guests</label>
                    <select name = "capacity" id = "capacity" value = {capacity} className = "form-control" 
                    onChange = {handleChange}>
                        {people}
                    </select>
                </div>
                {/*End Guest*/}
                {/*Room Price*/}
                <div className = "form-group">
                <label htmlFor = "price">Room Price ${price}</label>
                <input type = "range" name = "price" min = {minPrice} max = {maxPrice} id = "price"
                value = {price} onChange = {handleChange} className = "form-control"/>
                </div>
                {/* End Room Price*/}
                {/* Size*/}
                <div className = "form-group">
                    <label htmlFor = "size">Room size</label>
                    <div className = "size-inputs">
                        <input type = "number" name = "minSize" id = "size" value = {minSize} 
                        onChange = {handleChange} className = "size-input"/>
                        <input type = "number" name = "maxSize" id = "size" value = {maxSize} 
                        onChange = {handleChange} className = "size-input"/>
                    </div>
                </div>
                {/* End of size*/}
                {/* Extras*/}
                <div className = "form-group">
                    <div className = "single-extra">
                        <input type = "checkbox" name = "breakfast" id = "breakfast" 
                        checked = {breakfast} onChange = {handleChange}/>
                        <label htmlFor = "breakfast">Breakfast</label>
                    </div>
                    <div className = "single-extra">
                        <input type = "checkbox" name = "pets" id = "pets" 
                        checked = {pets} onChange = {handleChange}/>
                        <label htmlFor = "pets">Pets</label>
                    </div>
                </div>
                {/* End of Extras*/}
            </form>
        </section>
    )
}