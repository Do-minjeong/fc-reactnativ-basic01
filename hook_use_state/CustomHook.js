import React, {useState} from 'react';
import { TextInput, View, Button } from 'react-native';


const InputBox = (props) => {
    return (
        <View style={{ flexDirection: "row"}}>
            <TextInput 
                value={props.name}
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200}}
                placeholder={props.placeHolder} />
            <Button title="초기화" onPress={props.onReset} />
        </View>
    )
}

// 커스텀 함수 생성 시 함수명은 use로 시작해야함
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const resetValue = () => setValue(initialValue);

    return {
        value,
        setValue,
        resetValue,
    }
}

const CustomHook = () => {
    // textInput에 값이 들어가야하고 변화하는 값까지 알아야하기 때문에 useState를 사용
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [city, setCity] = useState("");
    
    // 커스텀함수 useInput 사용하기
    // const output = useInput("");
    // const name = output.value;
    // const setName = output.setValue;
    // const resetName = output.resetValue;

    const {value: name, setValue: setName, resetValue: resetName} = useInput("");
    const {value: age, setValue: setAge, resetValue: resetAge} = useInput("");
    const {value: city, setValue: setCity, resetValue: resetCity} = useInput("");

    return (
        <View>
            <InputBox
                value={name}
                onChangeText={setName}
                placeHolder="이름을 입력해주세요"
                onReset={resetName}
            />
            <InputBox
                value={age}
                onChangeText={setAge}
                placeHolder="나이를 입력해주세요"
                onReset={resetAge}
            />
            <InputBox
                value={city}
                onChangeText={setCity}
                placeHolder="사는 곳을 입력해주세요"
                onReset={resetCity}
            />
        </View>
    )
}

export default CustomHook;