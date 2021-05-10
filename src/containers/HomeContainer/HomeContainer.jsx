import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { generateId } from '../../helpers/index';
import { StyleSheet } from 'react-native';
import Container from '../../components/Container/Container';
import AddForm from '../../components/AddForm/AddForm';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    paddingTop: 32,
    paddingBottom: 32,
  },
});

const generateRow = (title) => ({
  id: generateId(),
  title: title,
  completed: false,
});

export default function HomeContainer() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((json) => setRows(json));
  }, [])

  const addToDo = (value) => {
    if (value) {
      setRows([...rows, generateRow(value)]);
    }
  };

  const handleRemoveItem = (value) => {
    if (value) {
      setRows(rows.filter((item) => String(item.id) !== String(value)));
    }
  };

  const handleCheckItem = (value) => {
    if (value) {
      setRows(rows.map((item) => {
        if (String(item.id) === String(value)) {
          item.completed = true;
        }

        return item;
      }));
    }
  };

  return (
    <Container>
      <Navigation title="Todo List React Native" />
      <Container style={styles.container}>
        <AddForm addToDo={addToDo} />
      </Container>
    </Container>
  );
}
