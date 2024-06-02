import React, { useContext, useState } from 'react'
import './Sidebar.css'
// import { assets } from '../assets/assets'
// import { assets } from '../../assets/assets'
import {assets} from '../assets/assets'
import { Context } from '../Context/Context';


export default  function Sidebar(){

    const [extended,setExtended]=useState(false);
    const {onSent,prevPrompts,setRecentPrompts}=useContext(Context);

    function menuClickHandler(){
        setExtended(!extended);
    }

    return (


        <div className='sidebar-wrapper'>

      <div className='sidebar1'>
<div className='menu-icon' >
    <img src={assets.menu_icon} onClick={menuClickHandler}></img>
</div>

<div className='new-chat'>
    <img src={assets.plus_icon}></img>
    {extended && 
    <p>New Chat</p>
    }

</div>

<div className='recent'>
{extended && 
    <p className='recent-title'>Recent</p>
}

{
prevPrompts.map((item,index)=>{
return (
    <div className='recent-entry margin-top'>

<img src={assets.message_icon}></img>

 <p >{item.slice(0,18)} ...</p>

</div>
)
})
}

{/* {extended && 
 

} */}
</div>

      </div>

      <div className='sidebar2'>

      <div className='recent-entry bottom-sidebar-icons'>
        <img src={assets.question_icon}></img>
        {extended &&   <p>Help</p>}
       
      </div>
        
      <div className='recent-entry bottom-sidebar-icons'>
        <img src={assets.history_icon}></img>
        {extended &&    <p>Activity</p>}
      
      </div>

      <div className='recent-entry bottom-sidebar-icons'>
        <img src={assets.setting_icon}></img>
        {extended &&    <p>Settings</p> }
     
      </div>

        </div>

        </div>
    )
}
