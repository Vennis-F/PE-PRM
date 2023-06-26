import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const ModalDeleteAll = ({ visible, onCancel, onDeleteAll }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>Delete All</Text>
          <Text style={styles.description}>
            Are you sure want to delete all?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onDeleteAll}>
              <Text style={styles.buttonText}>Delete all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  cancelButton: {
    marginRight: 8,
    padding: 8,
    backgroundColor: "gray",
    borderRadius: 4,
  },
  deleteButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ModalDeleteAll;
