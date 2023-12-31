import React,{ useEffect, useState, useRef }  from 'react';
import { FaEllipsisH,FaEdit,FaSistrix } from "react-icons/fa";
import ActiveFriend from './ActiveFriend';
import Friends from './Friends';
import RightSide from './RightSide';
import {useDispatch, useSelector} from 'react-redux';
import { getFriends, messageSend, getMessage,ImageMessageSend } from '../store/actions/messangerAction';

const Messenger = () => {
     const scrollRef = useRef();
     const {friends, message} = useSelector(state => state.messenger );
     const {myInfo} = useSelector(state => state.auth);
     const [currentfriend, setCurrentFriend] = useState('');
     const [newMessage, setNewMessage] = useState('');

 const inputHendle = (e) => {
     setNewMessage(e.target.value);

 }
 const emojiSend = (emu) => {
     setNewMessage(`${newMessage}`+  emu);
}

const ImageSend = (e) => {

     if(e.target.files.length !== 0){
          const imagename = e.target.files[0].name;
          // const newImageName = Date.now() + imagename;
          const newImageName =  imagename;

          const formData = new FormData();

          formData.append('senderName',myInfo.userName);
          formData.append('imageName',newImageName);
          formData.append('receiverId',currentfriend._id);
          formData.append('image', e.target.files[0]);
          dispatch(ImageMessageSend(formData));

     }



}
 const sendMessage = (e) => {
     e.preventDefault();
     const data = {
          senderName : myInfo.userName,
          receiverId : currentfriend._id,
          message : newMessage ? newMessage : '❤'
     }
     dispatch(messageSend(data));

 }
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getFriends());
     },[]);

     useEffect(() => {
          if(friends && friends.length > 0)
          setCurrentFriend(friends[0])
        
      },[friends]);

      useEffect(() => {
          dispatch(getMessage(currentfriend._id))
      },[ currentfriend?._id]);
      useEffect(() => {
          scrollRef.current?.scrollIntoView({behavior: 'smooth'}) 
      },[ message]);

  return (
       <div className='messenger'>
<div className='row'>
     <div className='col-3'>
          <div className='left-side'>
               <div className='top'>
                    <div className='image-name'>
                         <div className='image'>
                              <img src={`http://localhost:4000/api/images/${myInfo.image}`}  alt='' />
                         </div>
                         <div className='name'>
                         <h3> Hi {myInfo.userName} </h3>
                         </div>
                       </div>
                       <div className='icons'>
                            <div className='icon'>
                              <FaEllipsisH />
                            </div>
                            <div className='icon'>
                                  <FaEdit/> 
                            </div>
                       </div>
               </div>
               <div className='friend-search'>
                    <div className='search'>
                    <button> <FaSistrix /> </button>
                    <input type="text" placeholder='Search' className='form-control' />
                    </div>
               </div>

               <div className='active-friends'>

                    <ActiveFriend />
               </div>

               <div className='friends'>
               {
                    friends && friends.length>0 ? friends.map((fd) => <div onClick={()=> setCurrentFriend(fd)}  className={currentfriend._id === fd._id ? 'hover-friend active' : 'hover-friend' }> 
                    <Friends friend={fd} />
                    </div> ) : 'No Friend'
                } 


               </div>

          </div>
                      
                 </div>
                 {
                    currentfriend ?  <RightSide 
                    currentfriend={currentfriend}
                    inputHendle={inputHendle}
                    newMessage={newMessage}
                    sendMessage={sendMessage}
                    message={message}
                    scrollRef= {scrollRef}
                    emojiSend = {emojiSend}
                    ImageSend= {ImageSend}
                    /> : 'Please Select your Friend'
               }
            </div>
       </div>
  )
};
export default Messenger;