import React from 'react';
import { Toolbar } from 'react-native-material-ui';
import { StatusBar, SafeAreaView } from 'react-native';

const Navigation = (props) => {
  const { title = 'Todo List' } = props;

  return (
    <SafeAreaView style={{ backgroundColor: '#3f51b5' }}>
      <StatusBar />
      <Toolbar
        style={{container: { backgroundColor: '#3f51b5' }}}
        leftElement="menu"
        centerElement={title}
      />
    </SafeAreaView>
  );
};

export default Navigation;