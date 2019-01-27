import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signOut, teacherFetch, currentTeacherFetch } from '../actions';
import { currentStudentFetch } from '../actions/StudentActions';
import { Icon } from 'react-native-elements';
class drawer extends Component {

    SignOutPressed() {

        this.props.signOut();
    }

    onHomePress() {
        if (this.props.teacher) {
            Actions.teacher_timeline();
        }
        if (this.props.student) {
            Actions.student_timeline();
        }

    }

    onProfilePress() {
        if (this.props.teacher) {
            this.props.currentTeacherFetch();
            Actions.teacher_profileSelected();
        }
        if (this.props.student) {
            this.props.currentStudentFetch();
            Actions.student_profileSelected();
        }


    }


    render() {
        return (
            <View style={{ backgroundColor: '#2e2ed3', height: "100%" }}>
                <View style={styles.containerStyle}>
                    <View style={{ flexDirection: 'row', marginBottom: 40, backgroundColor: '#1515c4', height: 130 }}>
                        <View style={styles.imageContainer}>
                            <Avatar
                                rounded
                                avatarStyle={{ height: 100, width: 100, borderRadius: 50 }}
                                source={{ uri: this.props.uri  }}

                            />

                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>

                            <Text style={styles.NameTextStyle}>{this.props.name}</Text>

                            <Text style={styles.EmailTextStyle}>{this.props.email}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => { this.onHomePress() }}>
                        <Icon name="home" type="ionicons" style={styles.iconStyle} color="#ff8533" />
                        <Text style={styles.element}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => { this.onProfilePress() }}>
                        <Icon name="link" style={styles.iconStyle} color="#ff8533" />
                        <Text style={styles.element}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => { Actions.additionalInfo() }}>
                        <Icon name="message-text" type="material-community" iconStyle={styles.iconStyle} />
                        <Text style={styles.element}>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LogButtonStyle} onPress={this.SignOutPressed.bind(this)}>
                        <Icon name="log-out" type="feather" style={styles.iconStyle} color="#ff8533" />
                        <Text style={styles.element}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
const styles = {
    imageStyle: {


    },
    imageContainer: {
        marginLeft: 40,
        marginTop: 50,



    },
    element: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#fff',
        alignSelf: 'flex-end'
    },

    ButtonStyle: {
        marginLeft: 15,
        paddingTop: 20,
        flexDirection: 'row'

    },
    LogButtonStyle: {
        marginLeft: 15,
        paddingTop: 20,
        flexDirection: 'row',
        marginTop: 30

    },
    containerStyle: {

    },
    iconStyle: {
        alignSelf: 'flex-start',
        color: '#ff8533'
    },
    NameTextStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 40
    },
    EmailTextStyle: {
        fontSize: 16,
        color: '#c2c2d6',
        marginLeft: 40
    }
};


const mapStateToProps = (state) => {
    const { signOut, student, teacher } = state.auth;
    const { name, email, uri } = state.teacher
    //const{uri} = state.student;
    // if(uri===null)
    // let{uri} = state.teacher;
    return { signOut, uri, name, email, student, teacher };
};

export default connect(mapStateToProps, {
    signOut, teacherFetch, currentStudentFetch, currentTeacherFetch
})(drawer);