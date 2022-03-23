import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/queries'
import EditPage from './EditPage';
import UserCard from './UserCard';
import env from '../static/static.json'


const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User>();
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const editPage = editUser && openEdit;

  useEffect(() => {
    axios.get(env.url)
      .then(res => {
        setUsers(res.data)
        setLoading(false)
      })
  }, [])


  const handleMore = (user: User) => {
    setEditUser(user);
    setOpenEdit(true)
  }


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
      <aside className='sidebar_container'>
        <p>Сортировка</p>
        <button className='button button_blue' onClick={() => handleSort('city')}>по городу</button>
        <button className='button button_blue' onClick={() => handleSort('company')}>по компании</button>
      </aside>
      <main className='main'>
        {!editPage && <section className='main_list'>
          <p className='main_header'>Список пользователей</p>
          {loading && <span className="loader"></span>}
          {users.map((user) => {
            return <UserCard key={user.id} user={user} onClick={() => handleMore(user)} />
          })}
          {!loading && <p>Найдено {users.length} пользователей</p>}
        </section >}
        {editPage && <EditPage user={editUser} />}
      </main>
    </>
  )
}

export default UserList