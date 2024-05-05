import React from 'react'
import '../resources/default-layout.css'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

// DefaultLayout component defining the layout structure
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('Expense-Tracker-System-By-CapTain_N-user'))
  const handleMenuClick = (e) => {
    message.info('Logged out!'); // Displaying a message when user logs out
  };

  const navigate = useNavigate()
  // const items = [{ label: 'Log out', key: '3', icon: <UserOutlined />, danger: true, }];
  const items = [{
    label: (
      <li onClick={() => {
        localStorage.removeItem('Expense-Tracker-System-By-CapTain_N-user')
        navigate("/login")
      }}>Logout</li>
    ), icon: <UserOutlined />
  }];

  // Object containing properties for the dropdown menu
  const menuProps = { items, onClick: handleMenuClick, };


  return (

    // This is the outermost container for the layout. It encapsulates the entire layout structure defined by the DefaultLayout 
    <div className='layout'>

      {/* Header section containing branding or navigation */}
      <div className='header d-flex justify-content-between align-items-center'>

        <div>
          <h1 className='logo'>Expense Tracker</h1>
        </div>

        <div className="username">
          <Dropdown.Button menu={menuProps}
          icon={<UserOutlined />}>{user.name}</Dropdown.Button>
        </div>


      </div>

      {/* 
            Main content area where dynamic content will be displayed.
            Whatever is passed as children to DefaultLayout will be rendered here.
          */}

      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}
export default DefaultLayout
