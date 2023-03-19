import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react"; 
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFunctionalComponent from './StateWithFunctionalComponent';
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";
import CustomHook from './CustomHook';

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFuctionalComponent /> */}
      {/* {isTrue ? <UseEffectWithClassComponent /> : null} */}
      {/* <UseEffectWithFunctionalComponent /> */}

      <CustomHook />

      <Button title="toggle" opPress={() => setIsTrue(!isTrue)} />
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
