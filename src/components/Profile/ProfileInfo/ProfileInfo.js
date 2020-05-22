import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user_photo.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <div>
          <img
            className={styles.profilePhoto}
            src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
            alt="" />
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {props.profile.fullName}
        <div>
        </div>
        <div>{props.profile.aboutMe}</div>
        <ul>
          <li>
            <a href={props.profile.contacts.facebook} target="_blank"
              rel="noopener noreferrer">My facebook</a>
          </li>
          <li>
            <a href={props.profile.contacts.website} target="_blank"
              rel="noopener noreferrer">My website</a>
          </li>
          <li>
            <a href={props.profile.contacts.vk} target="_blank"
              rel="noopener noreferrer">My vk</a>
          </li>
          <li>
            <a href={props.profile.contacts.twitter} target="_blank"
              rel="noopener noreferrer">My twitter</a>
          </li>
          <li>
            <a href={props.profile.contacts.instagram} target="_blank"
              rel="noopener noreferrer">My instagram</a>
          </li>
          <li>
            <a href={props.profile.contacts.youtube} target="_blank"
              rel="noopener noreferrer">My youtube</a>
          </li>
          <li>
            <a href={props.profile.contacts.github} target="_blank"
              rel="noopener noreferrer">My github</a>
          </li>
          <li>
            <a href={props.profile.contacts.mainLink} target="_blank"
              rel="noopener noreferrer">My mainLink</a>
          </li>
        </ul>
        <div> Looking for a job:
          {props.profile.lookingForAJob ? <span> &#9745;</span> : <span> &#9746;</span>}
        </div>
        <div>
          {props.profile.lookingForAJob ? <div>Description: {props.profile.lookingForAJobDescription}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;