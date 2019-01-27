import {
    TEACHER_UPDATE,
    TEACHER_CREATE,
    CLASS_INPUT,
    SUBJECT_INPUT,
    SIGN_OUT,
    IMAGE_UPLOAD,
    TEACHER_FETCH_SUCCESS,
    TEACHERS_FETCH_SUCCESS,
    SELECTED_TEACHER_FETCH,
    TEACHER_CHANGE_PROFILES,
    CURRENT_TEACHER_FETCH_SUCCESS

} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    Address: '',
    error: '',
    phone: '',
    cnic: '',
    age: '',
    education: '',
    experience: '',
    classes: [],
    subjects: [],
    uri: '',
    teachers: [],
    selectedTeacher: null,
    profiles:[],
    teacher:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEACHER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TEACHER_CREATE:
            return { ...state, ...INITIAL_STATE };
        case CLASS_INPUT:
            var Class = state.classes;
            if (action.payload.condition === true) {

                Class.push(action.payload.val);
            }
            else {
                Class.splice(Class.indexOf(action.payload.val), 1);

            }

            return { ...state, classes: Class }
        case SUBJECT_INPUT:
            var Subject = state.subjects;
            if (action.payload.condition) {

                Subject.push(action.payload.val);
            }
            else {
                Subject.splice(Subject.indexOf(action.payload.val), 1);

            }
            return { ...state, subjects: Subject }
        case TEACHER_FETCH_SUCCESS:
            console.log("inside teacher fetch success");
            console.log(action.payload.uri);
            console.log(action.payload.email);
            console.log(action.payload.name);
            return { ...state, uri: action.payload.uri, name: action.payload.name, email: action.payload.email,teacher:action.payload }
        case TEACHERS_FETCH_SUCCESS:
            return { ...state, teachers: action.payload, profiles:action.payload };
        case SELECTED_TEACHER_FETCH:
            //console.log("fetched Student: " + action.payload);
            return { ...state, selectedTeacher: action.payload,uri:action.payload.uri }
        case TEACHER_CHANGE_PROFILES:
            return{...state, profiles:action.payload}
        case SIGN_OUT:
            //console.log("signed out!");
            return { ...state, ...INITIAL_STATE }
        case IMAGE_UPLOAD:
            return { ...state, uri: action.payload.uri }
        case CURRENT_TEACHER_FETCH_SUCCESS:
            return{...state,selectedTeacher:action.payload}

        default:
            return state;
    }
};