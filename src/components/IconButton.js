import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';

export default function IconButton({iconName, action, style = {}}) {
  return (
    <TouchableOpacity onPress={() => action()}>
      <Ionicons
        style={{
          fontSize: 24,
          color: Colors.white,
          ...style,
          textAlign: 'center',
        }}
        name={iconName}
      />
    </TouchableOpacity>
  );
}
