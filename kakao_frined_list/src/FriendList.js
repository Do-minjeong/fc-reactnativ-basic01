import { ScrollView, View } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import Margin from "./Margin";
import Profile from "./Profile"

const bottomSpace = getBottomSpace();
export default (props) => {
    /*
     * Case 1.  삼항연산자
    */
    // return props.isOpened ? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
    //         {/* 반복되는 컴포넌트 렌더링
    //             -> item = {
    //                 uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
    //                 name: "김민호",
    //                 introduction: "Minho Kim",
    //             }
    //         */}

    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //                 <Profile 
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                 />
    //                 <Margin height={13}/>
    //             </View>
    //         ))}
    //     </ScrollView>
    // ) : null;

    /*
     * Case 2.  if문으로 예외처리
    */
    // if(!props.isOpened)     return null;
    // return (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
    //         {/* 반복되는 컴포넌트 렌더링
    //             -> item = {
    //                 uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
    //                 name: "김민호",
    //                 introduction: "Minho Kim",
    //             }
    //         */}

    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //                 <Profile 
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                 />
    //                 <Margin height={13}/>
    //             </View>
    //         ))}
    //     </ScrollView>
    // )

    /*
     * Case 3.  && 이용
    */
    return props.isOpened && (
        <ScrollView showsVerticalScrollIndicator={false} >
            {/* 반복되는 컴포넌트 렌더링
                -> item = {
                    uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
                    name: "김민호",
                    introduction: "Minho Kim",
                }
            */}

            {props.data.map((item, index) => (
                <View key={index}>
                    <Profile 
                        uri={item.uri}
                        name={item.name}
                        introduction={item.introduction}
                    />
                    <Margin height={13}/>
                </View>
            ))}
        </ScrollView>
    )
}