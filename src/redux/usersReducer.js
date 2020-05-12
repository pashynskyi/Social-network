const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //   followed: false, fullName: 'Artem', status: 'I am developer', location: { city: 'Kyiv', country: 'Ukraine' }
    // },
    // {
    //   id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //   followed: true, fullName: 'Ivan', status: 'I am driver', location: { city: 'Moscow', country: 'Russia' }
    // },
    // {
    //   id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdpllNCsholZhg_nWGbfePCnMFRBCf7hqXZ0_NEutG5CxNzBMc&usqp=CAU',
    //   followed: false, fullName: 'Dmitry', status: 'I am developer too', location: { city: 'Minsk', country: 'Belarus' }
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;