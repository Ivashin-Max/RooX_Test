import React from 'react'
import { UserCardProps } from '../types/props'

const UserCard = (props: UserCardProps) => {
  return (
    <section className='main_card'>
      <p><span>ФИО:</span> {props.user.name}</p>
      <p><span>город:</span> {props.user.address.city}</p>
      <p><span>компания:</span> {props.user.company.name}</p>
      <button className='button' onClick={props.onClick}>Подробнее</button>
    </section>
  )
}

export default UserCard