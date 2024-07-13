import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 6,
      }}
    >
      <Text
        style={todo.completed ? { textDecorationLine: "line-through" } : {}}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1e90ff",
            padding: 10,
            borderRadius: 6,
            marginRight: 10,
          }}
          onPress={onEdit}
        >
          <Text style={{ color: "white" }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 6,
          }}
          onPress={onDelete}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
