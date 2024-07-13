import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useTodos from "../hooks/useTodos";
import useModal from "../hooks/useModal";
import TodoList from "../components/TodoList";
import TodoModal from "../components/TodoModal";

const TodoScreen = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
    editTodoTitle,
  } = useTodos();

  const {
    modalVisible,
    selectedTodo,
    editedTitle,
    setEditedTitle,
    toggleModal,
  } = useModal();

  const handleSave = () => {
    editTodoTitle(selectedTodo.id, editedTitle);
    toggleTodoCompletion(selectedTodo.id);
    toggleModal();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: "500", textAlign: "center" }}>TodoScreen</Text>

      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add a new todo"
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderColor: "#1e90ff",
          padding: 8,
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}
      />

      <TouchableOpacity
        onPress={addTodo}
        style={{
          marginTop: 10,
          backgroundColor: "#1e90ff",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 20,
          }}
        >
          Add
        </Text>
      </TouchableOpacity>

      <TodoList todos={todos} onEdit={toggleModal} onDelete={deleteTodo} />

      <TodoModal
        modalVisible={modalVisible}
        selectedTodo={selectedTodo}
        editedTitle={editedTitle}
        setEditedTitle={setEditedTitle}
        onSave={handleSave}
        onCancel={toggleModal}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
