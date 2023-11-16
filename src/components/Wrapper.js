import React from 'react';
import {Text, View} from 'react-native';

function Wrapper({children}) {
  return (
    <View style={{flex: 1}}>
      {children}
      <Text
        style={{
          padding: 16,
          backgroundColor: '#d7b38c',
          textAlign: 'center',
          fontWeight: '900',
        }}>
        Footer
      </Text>
    </View>
  );
}

export default Wrapper;
