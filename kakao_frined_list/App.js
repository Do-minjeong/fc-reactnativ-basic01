import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "./src/Header";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx ] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
    console.log('click arrow : '+isOpened);
  }

  const ItemSeparatorComponent = () => <Margin height={13}/>
  const renderItem = ({item}) => (
    <View>
        <Profile 
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
            isMe={false}
        />
        
    </View>
  )

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>       
      <Header />
      <Margin height={10} />
      <Profile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      <Division />

      <Margin height={12} />
      <FriendSection 
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  )

  const ListFooterComponent = () => <Margin height={10} />
  
  return (
    <View style={styles.container}>   
      <FlatList 
        data={isOpened ? friendProfiles : []}             // 친구목록 아이콘 클릭 시 배열유무
        contentContainerStyle={{paddingHorizontal: 15}}   // 내용컨테이너 스타일
        keyExtractor={(_, index) => index}                // key 값 정의 (key=index 이다)
        stickyHeaderIndices={[0]}                         // 고정할 헤더 인덱스
        ItemSeparatorComponent={ItemSeparatorComponent}   // 아이템 구분 컴포넌트
        renderItem={renderItem}                           // 반복해서 렌더링할 컴포넌트
        ListHeaderComponent={ListHeaderComponent}         // 헤더 컴포넌트
        ListFooterComponent={ListFooterComponent}         // 푸터 컴포넌트 (현재에선 스크롤에 포함된 목록이 아닌 fix컴포넌트 이므로 밑에 TabBar로 따로 넣어줌)
        showsVerticalScrollIndicator={false}              // 스크롤 인디케이터 유무
      />
      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
    </View>
  )

  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }} edges={['right', 'left']}>
    //     <Header />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <View style={styles.container}>
      <View style={{ flex : 1, paddingHorizontal: 15,}}>
        <Header />

        <Margin height={10} />

        <Profile 
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        ></Profile>

        <Margin height={15} />
        <Division />

        <Margin height={12} />
        <FriendSection 
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
        />

        <FriendList 
          data={friendProfiles}
          isOpened={isOpened}
        />
      </View>
      <TabBar 
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}/>
    </View>
  );
}
/* 스타일시트 스타일링 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       