import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/reducers';
import { logout } from '../redux/actions/userActions';

const Sidebar: React.FC = () => {
    const {userDetail} = useSelector((state: RootState) => state?.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    
    return (
        <div className="sidebar">
            <div className="sidebar__user-details">
                <div className="sidebar__avatar">{userDetail?.name.charAt(0).toUpperCase()}</div>
                <div className="sidebar__info">
                <div className="sidebar__name">{userDetail?.name}</div>
                <div className="sidebar__email">{userDetail?.email}</div>
                </div>
            </div>
            <button className="sidebar__logout" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
