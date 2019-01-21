import {
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
    SIGNUP_STUDENT_SUCCESS,
    SIGNUP_STUDENT_FAIL,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    IMAGE_PICKED,
    STUDENT_FETCH_SUCCESS,
    CHANGE_PROFILES,
    SELECTED_STUDENT_FETCH
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    name: "",
    address: "",
    contact: "",
    cnic: "",
    age: "",
    Class: "",
    institute: "",
    subjects: [],
    student: null,
    image: null,
    error: "",
    students: [],
    selectedStudent:null,
    profiles:[]
};


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_PROFILES:
            return{...state,profiles:action.payload}

        case SELECTED_STUDENT_FETCH:
            console.log("fetched Student: "+action.payload);            
            return{...state,selectedStudent:action.payload}

        case STUDENT_FETCH_SUCCESS:
            console.log(action.payload);
            return {...state,students:action.payload,profiles:action.payload};

        case IMAGE_PICKED:
            console.log(state)
            return { ...state, image: { uri: action.payload.uri, base64: payload.data } }

        case EMAIL_CHANGED:

            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:

            return { ...state, password: action.payload };

        case NAME_CHANGED:

            return { ...state, name: action.payload };

        case ADDRESS_CHANGED:
            return { ...state, address: action.payload };

        case CONTACT_CHANGED:
            return { ...state, contact: action.payload };

        case CNIC_CHANGED:
            return { ...state, cnic: action.payload };

        case AGE_CHANGED:
            return { ...state, age: action.payload };

        case CLASS_CHANGED:
            return { ...state, Class: action.payload };

        case INSTITUTE_CHANGED:
            return { ...state, institute: action.payload };

        case SUBJECTS_CHANGED:
            console.log("action:" + action)
            let selectedSubjects = state.subjects;

            if (action.payload.condition === true) {
                selectedSubjects = state.subjects;
                selectedSubjects.push(action.payload.text);
            }
            else {
                selectedSubjects = state.subjects.filter((subject) => {
                    return subject !== action.payload.text
                });
            }
            return { ...state, subjects: selectedSubjects };

        case SIGNUP_STUDENT_SUCCESS:
            console.log(state)
            console.log("Signup Success")
            return { ...state, student: action.payload }

        case SIGNUP_STUDENT_FAIL:
            console.log(state)
            console.log("Signup FAILED " + action.payload)
            return state

        case STUDENT_CREATE_SUCCESS:
            console.log("Student create Success")
            return state

        case STUDENT_CREATE_FAIL:
            console.log("Student create FAIL " + action.payload)
            return state


        default:
            return state;
    }
}   