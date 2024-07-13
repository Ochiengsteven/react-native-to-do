import { useState } from "react";

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const toggleModal = (todo) => {
    setSelectedTodo(todo);
    setEditedTitle(todo ? todo.title : "");
    setModalVisible(!modalVisible);
  };

  return {
    modalVisible,
    selectedTodo,
    editedTitle,
    setEditedTitle,
    toggleModal,
  };
};

export default useModal;
