import React from 'react';
import Sidebar from './Sidebar';
import './MainLayout.scss';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout__content">
        <Outlet/>
        <footer className="main-layout__footer">
          <span>© {new Date().getFullYear()} Evolveonai Vendor Portal</span>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
