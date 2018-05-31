// Import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

  const styles = {
      viewStyle: {
          backgroundColor: '#595959',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          height: 60,
          width: 350,
          shadowColor: '#585858',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          elevation: 2,
          position: 'relative'
      },
      textStyle: {
          fontSize: 20,
          color: '#fff',
      }
  };

// Make a componenet available for other parts of the app
export default Header;
