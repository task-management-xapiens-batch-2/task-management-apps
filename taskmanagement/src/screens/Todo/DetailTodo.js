import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RHeader, RButtonLoading, RLoader, RButton, RColor} from '@reusable';
const DetailTodo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Detail Todo"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.txtTitle}>AAA</Text>
          <Text style={styles.txtDate}>20-12-2021</Text>
          <Text style={styles.txtDetail}>test data detai</Text>
        </View>
        <View style={styles.containerBtn}>
          <RButton title="MAKE IT DOING" CStyle={styles.btnColor} />
        </View>
      </View>
    </View>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  btnColor: {
    backgroundColor: RColor.orange,
  },
  containerBody: {
    flex: 1,
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 20,
    backgroundColor: RColor.white,
  },
  containerText: {
    flex: 1,
    borderRadius: 20,
    alignItems:'center',
    paddingTop:20,
    backgroundColor: 'white',
  },
  txtTitle:{
    fontSize:18,
    fontWeight:'bold'
  },
  txtDate:{
    fontWeight:'500',
    fontSize:15,
    color:RColor.gray
  },
  txtDetail:{
    fontWeight:'500',
    fontSize:15,
    color:RColor.gray,
    marginTop:15
  },
  containerBtn: {
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
  },
});
