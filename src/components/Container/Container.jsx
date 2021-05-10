import { View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Container = (props) => {
  return (
    <View style={styles.container}>
      { props.children }
    </View>
  );
};

export default Container;