import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import SidebarUserInfo from '../compoents/sidebar/SidebarUserInfo';
import UserListingsSearch from '../compoents/userlistings/UserListingsSearch'
import UserLists from '../compoents/userlistings/UserLists';

function UserListingScreen() {
  const sideBarRef = useRef();
  const [listUsers, setListUsers] = useState([])
  const [userInfo, setUserInfo] = useState('')

  const getUsersListings = async () => {
    let { data } = await axios.get('https://dummyjson.com/users')
    setListUsers(data.users)
  }
  useEffect(() => {
    getUsersListings()
  }, []);
  
  const openDeatilSidebar = (e, id) => {
    const user = listUsers.filter((val) => {
      return val.id === id
    })
    setUserInfo(user)
    openNav()
  }
  const openNav = () => {
    sideBarRef.current.style.width = "400px";
  }

  return (
    <section className='userlisting p-4 bg-light'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 pt-2 pb-2'>
            <div className='float-md-start'>
              <h2>Users</h2>
              <p>Here are all the users for this project.</p>
            </div>
            <div className='float-md-end'>
              <button className='btn btn-outline-primary'>+ Add User</button>
            </div>
          </div>
          <UserListingsSearch />
          <SidebarUserInfo userInfo={userInfo} sideBarRef={sideBarRef} />
          <UserLists listUsers={listUsers} openDeatilSidebar={openDeatilSidebar} />
        </div>
      </div>
    </section>
  )
}
export default React.memo(UserListingScreen)