import React from 'react';
import s from './Sidebar.module.css';
import FriendsItems from './FriendsItems/FriendsItems';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className={s.aside}>
      <nav>
        <ul className={s.menu}>
          <li className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
              Profile
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>
              Messages
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>
              Users
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>
              News
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>
              Music
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>
              Settings
            </NavLink>
          </li>
        </ul>
        <div className={`${s.item} ${s.friends}`}>
          <NavLink to="/friends" activeClassName={s.activeLink}>
            Friends
          </NavLink>
          <FriendsItems />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;