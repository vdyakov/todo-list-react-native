import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { ListItem, Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
  root: {
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});

const confirmAlert = (value, onSubmit) =>
  Alert.alert(
    'Alert',
    'Are you sure you want to remove this item?',
    [
      { text: 'OK', onPress: () => onSubmit(value) },
      { text: 'Cancel', style: 'cancel' },
    ]
  );

const TodoList = (props) => {
  const { todoList = [], handleRemoveItem, handleCheckItem } = props;

  const getCheckIcon = (check) => check
    ? <Icon name="check-circle" color="#3f51b5" />
    : <Icon name="radio-button-unchecked" color="#3f51b5" />;

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Todo List</Text>
      {!todoList.length
        ? <Text>No Data to display</Text>
        : (<View>
          {todoList.sort((a, b) => a.completed - b.completed).map((item) => (
            <ListItem
              disabled={true}
              leftElement={getCheckIcon(item.completed)}
              rightElement="delete"
              centerElement={item.title}
              onPressValue={item.id}
              onPress={() => {}}
              onLeftElementPress={(value) => handleCheckItem(value)}
              onRightElementPress={(value) => confirmAlert(value, handleRemoveItem)}
            />
          ))}
        </View>)
      }
    </View>
  );
};

export default TodoList;