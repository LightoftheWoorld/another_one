import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Form } from '../Components/ProductAdd'

const UploadEventScreen = () => {
  return (
    <View>
      {/* <Text>UploadEventScreen</Text> */}
      <Form component={"Event"}/>
    </View>
  )
}

export default UploadEventScreen

const styles = StyleSheet.create({})