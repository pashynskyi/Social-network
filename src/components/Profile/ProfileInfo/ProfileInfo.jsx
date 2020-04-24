import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.titlePhoto} src='https://publicaffairs.vpcomm.umich.edu/wp-content/uploads/sites/19/mc-image-cache/2015/01/pa-home.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.profilePhoto} src='https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg' alt='' />
                </div>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;