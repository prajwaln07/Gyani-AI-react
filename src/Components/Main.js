import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import './Main.css'
import { Context } from '../Context/Context';
const Main = (props) => {

   
        const {
            onSent,
            recentPrompt,
            showResults,
            loading,
            resultData,
            setInput,
            input,
        } = useContext(Context);

  return (
    <div className='main'>
<div className='nav-bar'>
  <p className='chatBot-title'>Gyani</p>
  <img className= 'user-icon large' src={assets.user_icon}></img>
</div>

<div className='main-container'>
{
    !showResults ?<>
    <div className='greet'>
<div className='greeting'>
    <p className=' primary-para greet-para'>Hello,Dev.</p>
    <p className=' secondary-para greet-para'>How can I help you today?</p>
</div>
  </div>

<div className='cards'>

<div className='card'>
  <p>Suggest beautiful places to see on an upcoming road trip</p>
  <img src={assets.compass_icon} ></img>
</div>

<div className='card'>
  <p>Briefly summarize this concept: urban planning</p>
  <img src={assets.bulb_icon}></img>
</div>

<div className='card'>
  <p>Tell me about React js and React native</p>
  <img src={assets.message_icon}></img>
</div>

<div className='card'>
  <p>Brainstorm team bonding activities for our work retreat</p>
  <img src={assets.code_icon}></img>
</div>

</div>

    </>:
    <div className='result'>

    <div className='result-title'>
    <div>
        <img className='user-icon' src={assets.user_icon}></img>
        </div>

        <div>
        <p>{recentPrompt}</p>
        </div>

    </div>

    <div className='result-data'>
        <img src={assets.gemini_icon}></img>
        {loading ? <div className='loader'>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </div>
        : <p  className='result-status' >{resultData}</p>
        }
       
    </div> 

    </div>
}

 

<div className='main-bottom'>
  <div className='search-box'>
    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a Prompt here'></input>
    <div>
      <img src={assets.gallery_icon}></img>
      <img src={assets.mic_icon}></img>
      <img onClick={()=>onSent()} src={assets.send_icon} ></img>
    </div>
  </div>
  <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
</div>

</div>


    </div>
  )
}

export default Main