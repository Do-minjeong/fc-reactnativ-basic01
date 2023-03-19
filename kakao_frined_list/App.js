import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyProfile from "./src/MyProfile";
import { myProfile } from "./src/data";
import Margin from "./src/Margin";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }} edges={['right', 'left']}>
    //     <Header />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <MyProfile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      ></MyProfile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       