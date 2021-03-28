import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  RHeader,
  RColor,
  RButtonLoading,
  RLoader,
  RDetailCard,
  RButton,
} from '@reusable';
const DetailDoing = ({navigation, route}) => {
  const {pId, title, description, sDate, dDate} = route.params;
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Detail Doing"
        onPress={() => navigation.goBack()}
      />

      <RDetailCard
        title={title}
        description={description}
        sDate={sDate}
        dDate={dDate}
        CardStyle={{flex:1}}
        attachments={true}

      />
      <RButton title="MAKE IT TODO" />
      <RButton title="MAKE IT DONE" CStyle={styles.btnColorDone} />
    </View>
  );
};

export default DetailDoing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  btnColorDone: {
    backgroundColor: RColor.green,
    marginBottom:20,
    marginTop:20,
  },
});
