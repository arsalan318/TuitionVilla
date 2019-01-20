import React from 'react';
import { Scene, Router, Stack,Actions} from 'react-native-router-flux';

import CreateStudent1 from './authGames/SignUp/Student/PersonalInfo'
import CreateStudent2 from './authGames/SignUp/Student/AdditionalInfo'
import CreateStudent3 from './authGames/SignUp/Student/LoginDetails'
import Timeline from './Timeline/Timeline';
import ProfileSelected from './Timeline/Profile/Profile'

const Routes = () => {
  return (
    <Router >
    <Stack key="root">

    <Scene key="timeline" component={Timeline} title="Timeline" initial/>
    <Scene key="profileSelected" component={ProfileSelected} title="Username"/>

    <Scene key="createStudent1" component={CreateStudent1} title="Personal Details " 
    rightTitle="Next"
    onRight={()=>{Actions.createStudent2()}}
     />
    <Scene key="createStudent2" component={CreateStudent2} title="Additional Info" 
    rightTitle="Next"
    onRight={()=>{Actions.createStudent3()}}
    />
    <Scene key="createStudent3" component={CreateStudent3} title="Login Details" /> 
    
    {/* <Scene key="login" component={LoginForm} title="Please Login" /> */}
        
      </Stack>
    </Router>
  );
};

export default Routes;