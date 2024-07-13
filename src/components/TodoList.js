import React from "react";
import { FlatList, View } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onEdit={() => onEdit(item)}
          onDelete={() => onDelete(item.id)}
        />
      )}
    />
  );
};

export default TodoList;
