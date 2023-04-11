import { FlatList, StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { useEffect, useRef } from 'react';
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';

import { ITEM_WIDTH, bottomSpace, getCalendarColumns, statusBarHeight } from './src/util';
import { useCalendar } from './src/hook/use-calendar';
import { useTodoList } from './src/hook/use-todo-list';
import Calendar from './src/Calendar';
import Margin from './src/Margin';
import AddTodoInput from './src/AddTodoInput';

export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month
  } = useCalendar(now);

  const {
    todoList,
    filteredTodoList,
    addTodo,
    removeTodo,
    toggleTodo,
    input,
    setInput,
    resetInput,
  } = useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const flatListRef = useRef(null);

  // 이름을 나눠주는 이유 : 컴포넌트 입장에서 onPres 클릭 시, 오른쪽버튼을 클릭 시 실행하는 함수 라고 지어야 직관적 (onPressLeftArrow..)
  // 함수입장에서 어떻게 동작하냐는 다른문제이기 때문.  컴포넌트 입장에서 1개 함수입장에서 어떤함수를 실행할지 1개 (subtract1Month .. )
  const onPressLeftArrow = subtract1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = add1Month;
  const onPressDate = setSelectedDate;

  /*** useEffect 사용방법 ***/
  useEffect(() => {
    //console.log('>> changed selectedDate ' + dayjs(selectedDate).format("YYYY-MM-DD"));
  }, [selectedDate]);

  const ListHeaderComponent = () => (
    <View>
      <Calendar
        todoList={todoList}
        columns={columns}
        selectedDate={selectedDate}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        onPressHeaderDate={onPressHeaderDate}
        onPressDate={onPressDate}
      />
      <Margin height={15} />
      <View 
        style={{
          width: 4,
          height: 4,
          borderRadius: 4 / 2,
          backgroundColor: "#a3a3a3",
          alignSelf: "center",
      }} />
      <Margin height={15} />

    </View>
  );

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () => {
      Alert.alert("삭제하시겠습니까?", "", [
        {
          style: "cancel",    // style을 cancel로 넣어주면 클릭시 자동으로 닫힘
          text: "아니요",
        },
        {
          text: "네",
          onPress: () => removeTodo(todo.id),
        },
    ])
    }
    return (
      <Pressable 
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ 
          flexDirection: "row",
          width: ITEM_WIDTH, 
          //backgroundColor: todo.id % 2 === 0 ? "pink" : "lightblue",
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
      }}>
        <Text style={{ flex: 1, fontSize: 14, color: "#595959"}}>{todo.content}</Text>
        <Ionicons name="ios-checkmark" size={17} color={isSuccess ? "#595959" : "#bfbfbf"} />
      </Pressable>
    );
  }

  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 300);
  }

  const onPressAdd = () => {
    addTodo();
    resetInput();
   // scrollToEnd();
  }

  const onSubmitEditing = () => {
    addTodo();
    resetInput();
    //scrollToEnd();
  }

  const onFocus = () => {
    //scrollToEnd();
  }

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <Image
        source={{
          // 출처: https://kr.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1189772.htm
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c"
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            ref={flatListRef}
            data={filteredTodoList}
            style={{ flex: 1 }}     // FlatList의 flex:1 이 아닐경우 스크롤오류가 날 수 있음.
            contentContainerStyle={{ paddingTop: statusBarHeight + 30 }}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
          />
          <AddTodoInput 
            value={input}
            onChangeText={setInput}
            placeholder={`${dayjs(selectedDate).format('MM.DD')}에 추가할 TODO`}
            onPressAdd={onPressAdd}
            onSubmitEditing={onSubmitEditing}
            onFocus={onFocus}
          />
        </View>
      </KeyboardAvoidingView>
      <Margin height={bottomSpace}/>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
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
