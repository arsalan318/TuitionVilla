import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { connect } from 'react-redux'
import { studentFetch, onSelectedStudent } from '../actions/StudentActions'
import Card1 from '../components/Cards/Card1'
import Loader from '../components/common/Spinner'
import { List } from "react-native-elements"

export class Timeline extends Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };

  componentDidMount() {
    this.props.studentFetch();
    console.log("Profile")
    if (this.props.students) {
      this.setState({ data: this.props.students })
    }
  }

  renderRow({ item }) {
    return (
      <Card1

        student={item}
      // title={item.name}
      // subtitle={item.email}
      // onPress={() => {
      //   this.props.onSelectedStudent(item.uid)
      //   Actions.profileSelected()
      // }}

      />
    )
  }

  searchFilterFunction = text => {
    const newData = this.props.students.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData });
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
    if (this.props.students.length > 0) {
      fetchStatus = "Students Fetched"
      console.log(this.props.students)
      comp = (
        <List>
          <FlatList
            data={this.state.data}
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
  const { students } = state.student
  return { students }
}

export default connect(mapStateToProps, { studentFetch, onSelectedStudent })(Timeline)
