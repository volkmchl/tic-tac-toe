import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';

import Board from "./Board"
import make2DArray from './make2DArray';

function reducer(state, action) {
  return state;
}

function makeInitialState() {
  return {
    board: make2DArray(3, 3, 'O'),
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  return (
    <View style={styles.container}>
      <Board board={state.board}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
