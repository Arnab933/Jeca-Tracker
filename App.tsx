import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerBg}>
        <Text style={styles.header}>JECA Syllabus Tracker</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: "dodgerblue",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
})