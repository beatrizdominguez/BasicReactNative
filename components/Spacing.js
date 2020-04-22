import React from 'react'
import { View } from 'react-native'

export default function Spacing ({ size }) {
  const styles = {height: size || 24}
  return (
    <View
      style={styles}
    />
  )
}
