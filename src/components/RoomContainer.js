import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {RoomConsumer} from '../context'
import Loading from '../components/Loading'
export default function RoomsContainer() {
    return (
        <>
        <RoomConsumer>
            {(value)=>{
                console.log(value)
                const {Loading,sortedRooms,rooms} = value
                if(Loading){
                    return <Loading/>
                }
                return(
                    <div>
                    <RoomsFilter rooms = {rooms}/>
                    <RoomsList rooms = {sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
        </>
    )
}