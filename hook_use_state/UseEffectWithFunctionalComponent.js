import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, Switch, ActivityIndicator } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  // 초기 렌더링 시에만 실행 (의존성배열[]에 값이 없기때문)
  useEffect(()=> {
    console.log('didMount');
  }, []);

  // 카운트가 변경될 때 마다 실행
  useEffect(()=> {
    console.log('didUpdate - count', count); 
  }, [count]);

  // 스위치 값 변경 시에 실행
  useEffect(()=> {
    console.log('didUpdate - isOn', isOn); 
  }, [isOn]);

  useEffect(()=> {
    console.log('didUpdate - input', input); 
  }, [input]);

  useEffect(()=> {
    if(isRefresh){
      setTimeout(()=>{
        setIsRefresh(false);
      }, 2000)
    }
  },[isRefresh]);
  
  return (
    <View style={{ alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, borderColor: "grey" }}
      />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Button title="새로고침!" onPress={() => setIsRefresh(true)} />
      {isRefresh && <ActivityIndicator /> }
    </View>
  );
};

export default Component;