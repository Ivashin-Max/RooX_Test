import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/queries'
import EditPage from './EditPage';
import UserCard from './UserCard';




const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User>();
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {

        setUsers(res.data)
        setLoading(false)
      })
  }, [])


  const handleClick = (user: User) => {
    setEditUser(user);
    setOpenEdit(true)
  }

  const editPage = editUser && openEdit;

  const handleSort = (sortPar: string) => {
    switch (sortPar) {
      case 'city':
        const sortedArr = [...users].sort((a, b) => a.address.city.localeCompare(b.address.city));
        setUsers(sortedArr);
        break;
      case 'company':
        const sortedArr2 = [...users].sort((a, b) => a.company.name.localeCompare(b.company.name));
        setUsers(sortedArr2);
        break;
      default:
        break;
    }
  }



  return (
    <>
      <div className='sidebar_container'>
        <p>Сортировка</p>
        <button onClick={() => handleSort('city')}>по городу</button>
        <button onClick={() => handleSort('company')}>по компании</button>
      </div>
      {!editPage && <div>
        <p>Список пользователей</p>
        {loading && <span className="loader"></span>}
        {users.map((user) => {
          return <UserCard key={user.id} user={user} onClick={() => handleClick(user)} />
        })}
        {!loading && <p>Найдено {users.length} пользователей</p>}


      </div >}
      {editPage && <EditPage user={editUser} />}
    </>
  )
}

export default UserList