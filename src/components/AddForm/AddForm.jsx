import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Formik } from 'formik';
import { TextField } from 'rn-material-ui-textfield';

const styles = StyleSheet.create({
  root: {
    padding: 20,
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    width: '80%',
  },
  appButtonContainer: {
    width: '15%',
    backgroundColor: '#3f51b5',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

const AddForm = (props) => {
  const { addToDo } = props;

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ todo: '' }}
        onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
          addToDo(values.todo);
          resetForm({});
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <TextField
              label="What do you want to do?"
              onChangeText={handleChange('todo')}
              onBlur={handleBlur('todo')}
              value={values.todo}
              tintColor="#3f51b5"
              containerStyle={styles.textField}
            />
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={handleSubmit}
              title="Add"
            ><Text style={styles.appButtonText}>Add</Text></TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddForm;