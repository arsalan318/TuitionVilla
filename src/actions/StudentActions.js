import firebase from '../config/FirebaseConfig'
import {
  STUDENT_UPDATE,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL,
  SIGNIN_USER,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  IMAGE_UPLOAD,
  TURN_IMAGE_LOAD,
  SUBJECTS_CHANGED,
  STUDENT_FETCH_SUCCESS,
  TEACHER_FETCH_SUCCESS,
  SELECTED_STUDENT_FETCH,
  STUDENTS_FETCH_SUCCESS,
  STUDENT_CHANGE_PROFILES,
  CURRENT_STUDENT_FETCH_SUCCESS

  
} from './types';
import { Actions } from 'react-native-router-flux';

export const studentUpdate = ({ prop, value }) => {
  return {
    type: STUDENT_UPDATE,
    payload: { prop, value }
  };
};

export const signUpHandler = ({ email, password, name, phone, address, cnic, age, Class, institute, subjects, uri }) => {
  //console.log(email, password, name, phone, address, cnic, age, Class, institute, subjects, uri);
  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          const { currentUser } = firebase.auth();
          const uid = currentUser.uid;
          firebase.database().ref(`/users/Students/${currentUser.uid}`)
            .set({ uid, email, name, phone, address, cnic, age, Class, institute, subjects, uri })
            .then(() => {//console.log("inside second .then()")

              Actions.student_timeline();
              return { type: STUDENT_CREATE_SUCCESS };
             
            })
            .catch((err) => {
              dispatch({ type: STUDENT_CREATE_FAIL, payload: err })
            });
        })
      .catch(() => dispatch({
        type: SIGNIN_USER_FAIL
      }));
  };
};


export const subjectsChanged = ({condition, val}) => {
  return {
    type: SUBJECTS_CHANGED,
    payload: { condition, val }
  };
}


export const UploadImage = (uri) => {

  return {
    type: IMAGE_UPLOAD,
    payload: uri
  };
}
export const TurnLoadImage = () => {
  return {
    type: TURN_IMAGE_LOAD,

  }
}


export const studentFetch = () => {
  const {currentUser}= firebase.auth();
  return (dispatch) =>{
      firebase.database().ref(`/users/Students/${currentUser.uid}`)
      .on('value', snapshot =>{
          dispatch({ type: TEACHER_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
}

export const onSelectedStudent=(id)=>{
  console.log("Id in action "+id);
  return (dispatch) => {
    firebase.database().ref(`/users/Students/`+id)
      .on('value', snapshot => {
        dispatch({ type: SELECTED_STUDENT_FETCH, payload: snapshot.val() });
      });
  };
};

export const studentsFetch = () => {
  console.log("Fetching Student");
  return (dispatch) => {
    firebase.database().ref(`/users/Students`)
      .on('value', snapshot => {
        const studentsObj = snapshot.val();
        const students = [];
        for (let student in studentsObj) {
          students.push(studentsObj[student])
          //students[student]["id"]=student
        }
        dispatch({ type: STUDENTS_FETCH_SUCCESS, payload: students });
      });
  };
};


export const changeProfiles=(newData)=>{
  return(dispatch)=>{
    dispatch({ type: STUDENT_CHANGE_PROFILES, payload: newData });
  }
}

export const currentStudentFetch=()=>{
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/Students/${currentUser.uid}`)
      .on('value', snapshot => {
        
        dispatch({ type: CURRENT_STUDENT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
}