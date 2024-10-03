/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  FlatList,
  RefreshControl,
  Dimensions,
} from 'react-native';




  // let  loremData = [
  //   {
  //   "item": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eum mollitia consequuntur repellat delectus a. Quasi dicta architecto cum esse repellendus inventore, sint alias voluptatibus ipsa quisquam mollitia nemo eveniet aperiam quam velit nostrum culpa expedita? Omnis temporibus itaque exercitationem, eos recusandae laudantium delectus minus, maiores laborum distinctio illo repellendus incidunt dolorum cum! Ut, perspiciatis, voluptatem repudiandae veritatis tempore similique ex temporibus reprehenderit deleniti explicabo saepe dignissimos natus mollitia error sequi, dolore nemo ullam eaque suscipit? Rem, esse delectus sed incidunt accusamus maiores, officia repellat reprehenderit ullam commodi magni repellendus atque at explicabo laboriosam distinctio assumenda laborum voluptas ad dolores dolore inventore! Iusto repudiandae accusamus voluptatibus nam numquam doloremque! Atque eveniet dignissimos totam! Laudantium ea doloribus officiis autem! Non recusandae eaque cupiditate maiores, nihil nam magni perferendis magnam necessitatibus quas dignissimos sunt dolorum nisi accusantium eligendi numquam amet dolore veritatis sit ducimus nemo dolores facere qui unde! Commodi eligendi architecto qui eveniet sint. Adipisci ab commodi corporis voluptas, rerum aliquam. Nam esse quia deserunt sit, quisquam cupiditate architecto totam nesciunt. Expedita, sed! Ea laborum, exercitationem incidunt, nihil dolorem facere nostrum natus delectus obcaecati nulla corrupti. Eius distinctio atque blanditiis enim doloremque quibusdam itaque accusantium consequuntur, fuga aspernatur, quasi obcaecati exercitationem sapiente ea temporibus omnis! Odit, sed sit quos ea deleniti rerum unde. Et ut molestiae, maiores inventore reiciendis ipsam nostrum alias. Voluptatibus laboriosam aut deserunt? Voluptatum eius laborum ea nisi? Iste, dicta iusto eveniet temporibus explicabo blanditiis. Eos ex alias eveniet porro, itaque error nihil fuga explicabo, libero minima est?"
  // }
  // ]

const App = () => {
  const [text, setText] = useState('');

  // const [refreshing, setRefreshing] = useState(false)

  // const _onRefresh = ()=>{
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false)
  //   }, 2000);
  // }
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.background}>
      <Text>device dimensions= height: {Dimensions.get("screen").height}px, width: {Dimensions.get("screen").width}px </Text>

      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Lorem ipsum dolor sit
      </Text>
      <TextInput
        style={{width: 200, height: 50, borderWidth: 1, marginTop: 20}}
        placeholder="Name"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        style={{width: 200, height: 50, borderWidth: 1, marginTop: 20}}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Text>your name: {text}</Text>

      <Button
        title="Success"
        onPress={() =>
          Alert.alert('Hello ' + text, 'How do you think my First Application was?', [
            {text: 'Nice', onPress: () => console.log('Guzel dedi')},
            {
              text: 'Very NICE!!',
              onPress: () => console.log('Cok Guzel dedi.'),
            },
          ])
        }
      />

        {/* <FlatList
        data={loremData}
        renderItem={({item})=><Text 
        style={{fontSize:30, fontWeight:'bold',}}>
          {item.item}
        </Text>}
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />} 
      /> */}

      <TouchableOpacity>
        <Image
          source={require('./img/gif/Adsztasarm4-ezgif.com-gif-maker.gif')}
          style={{width: 270, height: 250,}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
