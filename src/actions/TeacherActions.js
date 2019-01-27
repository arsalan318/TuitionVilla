import { Actions } from "react-native-router-flux";
import firebase from '../config/FirebaseConfig'

import {
    TEACHER_UPDATE,
    TEACHER_CREATE,
    CLASS_INPUT,
    SUBJECT_INPUT,
    SIGNIN_USER,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_SUCCESS,
    SIGN_OUT,
    IMAGE_UPLOAD,
    TEACHER_FETCH_SUCCESS,
    TEACHERS_FETCH_SUCCESS,
    SELECTED_TEACHER_FETCH,
    TEACHER_CHANGE_PROFILES,
    CURRENT_TEACHER_FETCH_SUCCESS
} from './types';
export const teacherUpdate = ({ prop, value }) => {
    return {
        type: TEACHER_UPDATE,
        payload: { prop, value }
    };
};

export const signUser = ({ email, password, name, phone, address, cnic, age, education, experience, subjects, classes, uri }) => {

    return (dispatch) => {
        dispatch({ type: SIGNIN_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                () => {
                    console.log(uri);
                    const { currentUser } = firebase.auth();
                    const {uid} = currentUser.uid;
                    firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
                        .set({ email, name, phone, address, cnic, age, education, experience, subjects, classes, uri, uid })
                        .then(() => {
                            console.log("inside .then()");
                            Actions.teacher_timeline();
                            return { type: TEACHER_CREATE };
                        })
                        .catch(() => {
                            return { type: SIGNIN_USER_FAIL };

                        });
                })
            .catch(() => dispatch({ type: SIGNIN_USER_FAIL }));
    };
};


export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_OUT });
        firebase.auth().signOut()
            .then(() => {
                Actions.Login();

            })
            .catch(() => {
                // console.log(error);
            });
    };

};


export const ClassInput = ({ condition, val }) => {
    return {
        type: CLASS_INPUT,
        payload: { condition, val }
    };

}
export const SubjectInput = ({ condition, val }) => {
    return {
        type: SUBJECT_INPUT,
        payload: { condition, val }
    };
}

export const UploadImage = ({ uri }) => {

    return {
        type: IMAGE_UPLOAD,
        payload: uri
    }
}
export const teacherFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
            .on('value', function (snapshot) {
                dispatch({ type: TEACHER_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const teachersFetch = () => {
    
    return (dispatch) => {
        firebase.database().ref(`/users/Teachers`)
            .on('value', snapshot => {
                const teachersObj = snapshot.val();
                const teachers = [];
                for (let teacher in teachersObj) {
                    teachers.push(teachersObj[teacher])
                    //students[student]["id"]=student
                }
                dispatch({ type: TEACHERS_FETCH_SUCCESS, payload: teachers });
            });
    };
};

export const onSelectedTeacher=(id)=>{
    console.log("Id in action "+id);
    return (dispatch) => {
      firebase.database().ref(`/users/Teachers/`+id)
        .on('value', snapshot => {
          dispatch({ type: SELECTED_TEACHER_FETCH, payload: snapshot.val() });
        });
    };
  };

  export const TeacherChangeProfiles=(newData)=>{
    return(dispatch)=>{
      dispatch({ type: TEACHER_CHANGE_PROFILES, payload: newData });
    }
  }
  
  export const currentTeacherFetch=()=>{
    return (dispatch) => {
      const {currentUser} = firebase.auth();
      firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
        .on('value', snapshot => {
          
          dispatch({ type: CURRENT_TEACHER_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
  }