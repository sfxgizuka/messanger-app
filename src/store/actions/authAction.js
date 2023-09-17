import axios from 'axios';
// import {REGISTER_FAIL,REGISTER_SUCCESS} from "../types/authType";
const REGISTER_FAIL = 'REGISTER_FAIL'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const userRegister = (data) => {
     return async (dispatch) => {

          const config = {
               headers: {
                    'Content-Type':'application/josn'
               }
          }
          try{
               const response = await axios.post('http://localhost:5000/api/messenger/user-register',data,config);
               console.log(response.data);
               localStorage.setItem('authToken',response.data.token);

               dispatch({
                    type : REGISTER_SUCCESS,
                    payload:{
                         successMessage: response.data.successMessage,
                         token : response.data.token
                    }
               })

          } catch(error){
               dispatch({
                    type: REGISTER_FAIL,
                    payload:{
                         error : error.response?.data?.error?.errorMessage 
                    }
                })
          }

     }
}