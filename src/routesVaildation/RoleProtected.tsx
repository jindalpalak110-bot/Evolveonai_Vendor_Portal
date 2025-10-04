import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../redux/reducers';

interface RoleProtectedProps {
  roles: string[]; // allowed roles
}

const RoleProtected: React.FC<RoleProtectedProps> = ({ roles }) => {
  const { token, userDetail } = useSelector((state: RootState) => state.user);
  if (!token) return <Navigate to="/" />;
  const role = (userDetail?.role || '') as string;
  return roles.includes(role) ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default RoleProtected;
