import React from 'react'
import { UserCardProps } from '../types/props'

const UserCard = (props: any) => {
  return (
    <>
      <p>ФИО: {props.user.name}</p>
      <p>город: {props.user.address.city}</p>
      <p>компания: {props.user.company.name}</p>
      <button onClick={props.onClick}>Подробнее</button>
    </>
  )
}

export default UserCard