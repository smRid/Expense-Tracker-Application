import React from 'react'

import '../resources/default-layout.css'
// DefaultLayout component defining the layout structure
function DefaultLayout(props) {
  return (

    // This is the outermost container for the layout. It encapsulates the entire layout structure defined by the DefaultLayout 
    <div className='layout'>

          {/* Header section containing branding or navigation */}
          <div className='header d-flex justify-content-between align-items-center'>

                <div>
                    <h1 className='logo'>Expense Tracker</h1>
                </div>
                
                <div className="username">username</div>


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
