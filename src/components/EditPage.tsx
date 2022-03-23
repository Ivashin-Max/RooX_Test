import { useState } from 'react'
import { UserCardProps } from '../types/props'
import MyForm from './MyForm';


const UserPage = (props: UserCardProps) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="main">
      <div className="main_header">
        <span>Профиль пользователя</span>
        <button className='button button_blue' onClick={() => setDisabled(false)}>Редактировать</button>
      </div>
      <div className="edit">
        <MyForm disabled={disabled} user={props.user} />
      </div>
    </div>
  )
}

export default UserPage