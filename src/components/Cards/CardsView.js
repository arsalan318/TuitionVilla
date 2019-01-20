import React from 'react'
import {View,StyleSheet} from 'react-native'
export default function CardsView(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
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