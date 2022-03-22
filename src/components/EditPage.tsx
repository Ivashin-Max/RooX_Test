import React, { useEffect, useState } from 'react'
import { UserCardProps } from '../types/props'

const UserPage = (props: UserCardProps) => {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [web, setWeb] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    setName(props.user.name);
    setUserName(props.user.username);
    setEmail(props.user.email);
    setStreet(props.user.address.street);
    setCity(props.user.address.city);
    setZip(props.user.address.zipcode.toString());
    setPhone(props.user.phone.toString());
    setWeb(props.user.website);

  }, [])

  const handleSubmit = () => {

    const submit = {
      "name": name,
      "userName": userName,
      "email": email,
      "street": street,
      "city": city,
      "zip": zip,
      "phone": phone,
      "web": web,
      "comment": comment,
    };
    console.log(JSON.stringify(submit))
  }

  return (
    <div className="edit">
      <div className="edit_header">
        <p>Профиль пользователя</p>
        <button onClick={() => setDisabled(false)}>Редактировать</button>
      </div>
      <div className="edit_main">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={disabled} />


        <label
          htmlFor="userName">User name</label>
        <input
          type="text"
          id='userName'
          onChange={(e) => setUserName(e.target.value)}
          disabled={disabled}
          value={userName} />


        <label
          htmlFor="email">E-mail</label>
        <input
          type="text"
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          value={email} />


        <label
          htmlFor="street">Street</label>
        <input
          type="text"
          id='street'
          onChange={(e) => setStreet(e.target.value)}
          disabled={disabled}
          value={street} />


        <label
          htmlFor="city">City</label>
        <input
          type="text"
          id='city'
          onChange={(e) => setCity(e.target.value)}
          disabled={disabled}
          value={city} />


        <label
          htmlFor="zip">Zip Code</label>
        <input
          type="text"
          id='zip'
          onChange={(e) => setZip(e.target.value)}
          disabled={disabled}
          value={zip} />


        <label
          htmlFor="phone">Phone</label>
        <input
          type="text"
          id='phone'
          onChange={(e) => setPhone(e.target.value)}
          disabled={disabled}
          value={phone} />


        <label
          htmlFor="web">Website</label>
        <input
          type="text"
          id='web'
          onChange={(e) => setWeb(e.target.value)}
          disabled={disabled}
          value={web} />

        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          onChange={(e) => setComment(e.target.value)}
          disabled={disabled}
          value={comment}
        />
      </div>
      <button onClick={handleSubmit} className="edit_submit">Отправить</button>
    </div>
  )
}

export default UserPage