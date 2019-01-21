import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { connect } from 'react-redux'
import { studentFetch, onSelectedStudent,changeProfiles } from '../actions/StudentActions'
import Card1 from '../components/Cards/Card1'
import Loader from '../components/common/Spinner'
import { List } from "react-native-elements"

export class Timeline extends Component {
  

  componentDidMount() {
    this.props.studentFetch();
    console.log("fetching Profiles")
    // if (this.props.students) {
    //   console.log("con true",this.props.students);
    //   this.setState({ data: this.props.students })
    // }
  }

  renderRow({ item }) {
    return (
      <Card1

        student={item}
      />
    )
  }

  searchFilterFunction = text => {
    const newData = this.props.students.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.props.changeProfiles(newData)
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };



  render() {
    let comp = <Loader />
    let fetchStatus = "Student not fetched yet"
    if (this.props.profiles.length > 0) {
      fetchStatus = "Students Fetched"
      console.log("from Students",this.props.students)
      console.log("from profile",this.props.profiles)
      comp = (
        <List>
          <FlatList
            data={this.props.profiles}
            renderItem={this.renderRow}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            //keyExtractor={item => item.email}
          />
        </List>

      )
    }
    return (
      <View>
        {comp}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 10
  }
})

const mapStateToProps = (state) => {
  const { students,profiles } = state.student
  return { students,profiles }
}

export default connect(mapStateToProps, { studentFetch, onSelectedStudent,changeProfiles })(Timeline)