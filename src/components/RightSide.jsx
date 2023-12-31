import React from 'react';
import { FaPhoneAlt,FaVideo,FaRocketchat } from "react-icons/fa";
import Message from './Message';
import MessageSend from './MessageSend';
import FriendInfo from './FriendInfo';

const RightSide = (props) => {

  const {currentfriend,inputHendle,newMessage,sendMessage, message, scrollRef, emojiSend,ImageSend} = props;

  return (
       <div className='col-9'>
            <div className='right-side'>
                <input type="checkbox" id='dot' />
                 <div className='row'>
                      <div className='col-8'>
          <div className='message-send-show'>
               <div className='header'>
                    <div className='image-name'>
                         <div className='image'>
                         <img src={`http://localhost:4000/api/images/${currentfriend.image}`}  alt='' />

                         </div>
                         <div className='name'>
                              <h3>{currentfriend.userName}</h3>
                         </div>
                    </div>

          <div className='icons'>
     <div className='icon'>
          <FaPhoneAlt/>
     </div>

     <div className='icon'>
          <FaVideo/>
     </div>

     <div className='icon'>
        <label htmlFor='dot'> <FaRocketchat/> </label> 
     </div>

    </div>
         </div>
                     <Message 
                     message = { message}
                     currentfriend = {currentfriend}
                     scrollRef = {scrollRef}
                     />
                     <MessageSend
                         inputHendle = {inputHendle}
                         newMessage = {newMessage}
                         sendMessage = {sendMessage}
                         emojiSend = {emojiSend}
                         ImageSend = {ImageSend}
                     />
             </div>
                    
                      </div>  

                 <div className='col-4'>
                    <FriendInfo  currentfriend={currentfriend} />
               </div>  


                 </div>
            </div>
       </div>
  )
};

export default RightSide;