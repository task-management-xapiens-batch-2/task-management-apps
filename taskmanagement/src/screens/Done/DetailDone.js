import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RHeader, RColor, RDetailCard} from '@reusable';
const DetailDone = ({navigation, route}) => {
  const {pId, title, description, sDate, dDate} = route.params;
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Detail Done"
        onPress={() => navigation.goBack()}
      />

      <RDetailCard
        title={title}
        description={description}
        sDate={sDate}
        dDate={dDate}
        CardStyle={{flex:1}}
        attachments
      />
    </View>
  );
};

export default DetailDone;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: RColor.lightBlue,
  },
});
