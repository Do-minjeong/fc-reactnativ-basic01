import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/*
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
*/

const Header = (props) => {
  return <Text>{props.title}</Text>;
};

const MyProfile = () => {
  return <Profile 
            name="민정" 
            uri="https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfNzgg/MDAxNjAyODIyNDU0MDc2.Ieqo9pDop5yeAv07mcC5f7be8Xc8EiVezU5TULgbMvcg.UM137VxzBOMOHqNOLDJiWMC6nEwblCcUeAd81TYiLgEg.JPEG.0110925/IMG_9347.JPG?type=w800"
            profileSize={40}
            />;
};

const Division = () => {
  return <Text>Division</Text>;
};

const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

const FriendList = () => {
  return (
    <View>
      <Profile 
        name="철이" 
        uri="https://blog.kakaocdn.net/dn/m1pfX/btrGAKB3aJN/snh6y4AABqfxWAjqeyuX5K/img.jpg"
        profileSize={30}
        />
      <Profile 
        name="지연" 
        uri="https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfOTQg/MDAxNjAyODIyNDU1OTYz.YFW5N1N2fuaYIfQYq_QVADyQ6ouZYi2hqyuaqt6zEoAg.A22gGcG9J5IlA8jIkX6TwmCZnHWRUX-M8wrbusJ_mUIg.JPEG.0110925/IMG_9349.JPG?type=w800"
        profileSize={30}
        />
      <Profile 
        name="세연" 
        uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMCRI6FNPx0rUdsyZTKoPC0-R6cM-w02V4EwtY2ymlQCnyk4L8iu2L4U1C4sNG6VfN40&usqp=CAU"
        profileSize={30}
        />
      <Profile 
        name="지은" 
        uri="https://blog.kakaocdn.net/dn/bGx5wc/btrGzDQX8QC/t4DQuZHcrk4IgVCkhZW1v0/img.jpg"
        profileSize={30}
        />
      <Profile 
        name="세인" 
        uri="https://blog.kakaocdn.net/dn/rfsSB/btrGC8bsIv3/4EQBX9vUwVZESHkktgPtZ1/img.jpg"
        profileSize={30}
        />
    </View>
  )
};
/* 함수형 컴포넌트 */
// const Profile = (props) => {
//   return (
//     <View style={{flexDirection: "row"}}>
//       <Image source={{
//               uri: props.uri
//             }}
//              style={{
//               width: props.profileSize,
//               height: props.profileSize,
//             }}
//       />
//       <Text>{props.name}</Text>
//     </View>
//   )
// }

/* 클래스형 컴포넌트 */
class Profile extends React.Component {
  render() {
      return (
    <View style={{flexDirection: "row"}}>
      <Image source={{
              uri: this.props.uri
            }}
             style={{
              width: this.props.profileSize,
              height: this.props.profileSize,
            }}
      />
      <Text>{this.props.name}</Text>
    </View>
  )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
