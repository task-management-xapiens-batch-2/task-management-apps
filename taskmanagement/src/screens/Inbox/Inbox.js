import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RHeader, RColor,RCard} from '@reusable';
const Inbox = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor:RColor.lightBlue}}>
      <RHeader
        onPress={() => navigation.goBack()}
        title={'Inbox'}
        iconName={'arrow-left'}
      />
      <Text style={styles.txtTitle}> Task Title 0/2</Text>
      <RCard onPress={()=>navigation.navigate("Inbox Detail")}/>
      <RCard onPress={()=>navigation.navigate("Inbox Detail")}/>
      <RCard onPress={()=>navigation.navigate("Inbox Detail")}/>
      <RCard onPress={()=>navigation.navigate("Inbox Detail")}/>

    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
    txtTitle:{
        marginLeft:'5%',
        marginTop:10,
        marginBottom:10,
        fontWeight:'bold'
    }
});
