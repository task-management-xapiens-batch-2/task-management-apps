import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RColor, RHeaderMain, RIcon, RCard} from '../../components';

const Doing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RHeaderMain title={'Alfian'} iconName={'envelope'} iconSize={30} />
      <Text style={styles.txtTitle}>TASK LIST</Text>
      <RCard CStyle={styles.cardColor} onPress={()=>navigation.navigate('Detail Doing')}/>
      <RCard CStyle={styles.cardColor} onPress={()=>navigation.navigate('Detail Doing')}/>
      <RCard CStyle={styles.cardColor} onPress={()=>navigation.navigate('Detail Doing')}/>
      <RCard CStyle={styles.cardColor} onPress={()=>navigation.navigate('Detail Doing')}/>

    </View>
  );
};

export default Doing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  txtTitle: {
    marginLeft: '5%',
    color: RColor.gray,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardColor: {borderWidth: 3, borderColor: RColor.orange},
});
