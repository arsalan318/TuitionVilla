import firebase from 'firebase';
import '@firebase//database';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  ADDRESS_CHANGED,
  CONTACT_CHANGED,
  CNIC_CHANGED,
  AGE_CHANGED,
  CLASS_CHANGED,
  INSTITUTE_CHANGED,
  SUBJECTS_CHANGED,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL,
  SIGNUP_STUDENT_FAIL,
  SIGNUP_STUDENT_SUCCESS,
  IMAGE_PICKED,
  STUDENT_FETCH_SUCCESS,
  SELECTED_STUDENT_FETCH,
  CHANGE_PROFILES
} from './types';

export const changeProfiles=(newData)=>{
  return(dispatch)=>{
    dispatch({ type: CHANGE_PROFILES, payload: newData });
  }
}

export const studentFetch = () => {
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
        dispatch({ type: STUDENT_FETCH_SUCCESS, payload: students });
      });
  };
};

export const imagePicked = (uri, data) => {
  return {
    type: IMAGE_PICKED,
    payload: { uri, data }
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};
export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    payload: text
  };
};
export const contactChanged = (text) => {
  return {
    type: CONTACT_CHANGED,
    payload: text
  };
};
export const cnicChanged = (text) => {
  return {
    type: CNIC_CHANGED,
    payload: text
  };
};
export const ageChanged = (text) => {
  return {
    type: AGE_CHANGED,
    payload: text
  };
};
export const classChanged = (text) => {
  return {
    type: CLASS_CHANGED,
    payload: text
  };
};
export const instituteChanged = (text) => {
  return {
    type: INSTITUTE_CHANGED,
    payload: text
  };
};
export const subjectsChanged = (condition, text) => {
  return {
    type: SUBJECTS_CHANGED,
    payload: { text, condition }
  };
};

export const signUpHandler = ({ email, password, name, contact, address, cnic, age, Class, institute, subjects }) => {

  return (dispatch) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        student => {
          
          const { currentUser } = firebase.auth();
          const uid =currentUser.uid;
          firebase.database().ref(`/users/Students/${currentUser.uid}`)
            .set({ uid,name, email, contact, address, cnic, age, Class, institute, subjects, })
            .then(() => {
              dispatch({ type: STUDENT_CREATE_SUCCESS });
              //Actions.timeline();
            })
            .catch((err) => {
              dispatch({ type: STUDENT_CREATE_FAIL, payload: err })
            });
        })
      .catch((err) => signStudentFail(dispatch, err));
  };
};

export const signStudentSuccess = (dispatch, student) => {
  dispatch({
    type: SIGNUP_STUDENT_SUCCESS,
    payload: student
  });

}
export const signStudentFail = (dispatch, err) => {
  dispatch({ type: SIGNUP_STUDENT_FAIL, payload: err });
};

export const onSelectedStudent=(id)=>{
  console.log("Id in action "+id);
  return (dispatch) => {
    firebase.database().ref(`/users/Students/`+id)
      .on('value', snapshot => {
        dispatch({ type: SELECTED_STUDENT_FETCH, payload: snapshot.val() });
      });
  };
};



