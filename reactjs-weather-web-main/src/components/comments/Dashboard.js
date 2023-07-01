import { Button } from '@mui/material';
import React, { useState } from 'react'
import {
    Menu,
    MenuItem,
    ProSidebarProvider,
    Sidebar,
    SubMenu,
  } from "react-pro-sidebar";
import DashboardComments from './DashboardComments';
import Cities from './Cities';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    const [cities, setShowCities] = useState()
    const [feedbacks, setShowFeedbacks] = useState()

    const showCities = () => {
        setShowCities(true)
        setShowFeedbacks(false)
    }
    const showFeedbacks = () => {
        setShowCities(false)
        setShowFeedbacks(true)
    }

    const logout =() => {
        navigate('/weather/Zurich')
    }

  return (
    <div className='d-flex'>
    <ProSidebarProvider>
             <Sidebar style={{ height: "940px" }} className="shadow">
               <Menu>
                 <img
                   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PANuzefZzv34oAsPcin3rMTL8htbzC9jEg&usqp=CAU'
                   alt="logo"
                   width={150}
                   className="ml-5 pl- "
                   style={{marginLeft: "40px"}}
                 />
                 
                 <MenuItem onClick={()=>showCities()}>
                   {" "}
                   <i className="bi bi-activity mr-3"></i> Cities{" "}
                 </MenuItem>
                 
                 <MenuItem>
                   <i className="bi bi-person-heart mr-3"></i>Best customers
                 </MenuItem>
                 <MenuItem>
                   <i className="bi bi-receipt mr-2"></i>Invoices
                 </MenuItem>
                 <MenuItem onClick={()=>showFeedbacks()}>
                   <i className="bi bi-envelope mr-2"></i>Feedbacks
                 </MenuItem>
                 <MenuItem className="text-center mt-5">
                   <Button variant="danger" onClick={()=>logout()} >
                     Log out
                   </Button>
                 </MenuItem>
               </Menu>
             </Sidebar>
           </ProSidebarProvider>
           <div className='w-100'>
            {
                feedbacks && <DashboardComments />
            }
            {
                cities && <Cities />
            }
           </div>
           </div>
  )
}

export default Dashboard