import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user_photo.png';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        debugger;
        props.setUsers(response.data.items);
      });
    }


    // props.setUsers([
    //   {
    //     id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //     followed: false, fullName: 'Artem', status: 'I am developer', location: { city: 'Kyiv', country: 'Ukraine' }
    //   },
    //   {
    //     id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //     followed: true, fullName: 'Ivan', status: 'I am driver', location: { city: 'Moscow', country: 'Russia' }
    //   },
    //   {
    //     id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //     followed: false, fullName: 'Dmitry', status: 'I am developer too', location: { city: 'Minsk', country: 'Belarus' }
    //   }
    // ])
  }

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;