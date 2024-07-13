import React from "react";
import {
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TodoModal = ({
  modalVisible,
  selectedTodo,
  editedTitle,
  setEditedTitle,
  onSave,
  onCancel,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Edit "{selectedTodo?.title}"</Text>
          <TextInput
            value={editedTitle}
            onChangeText={setEditedTitle}
            style={{
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#1e90ff",
              padding: 8,
              borderRadius: 6,
              paddingVertical: 8,
              paddingHorizontal: 10,
              width: "100%",
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity style={styles.modalButton} onPress={onSave}>
              <Text style={{ color: "white" }}>
                {selectedTodo?.completed
                  ? "Mark as Incomplete"
                  : "Mark as Complete"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "red" }]}
              onPress={onCancel}
            >
              <Text style={{ color: "white" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});

export default TodoModal;
