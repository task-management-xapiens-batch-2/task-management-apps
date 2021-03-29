import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RHeader, RColor, RDetailCard} from '@reusable';
const DetailDone = ({navigation, route}) => {
  const {id, title, description, start_date, due_date} = route.params;

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
        sDate={start_date}
        dDate={due_date}
        CardStyle={{flex: 1}}
        attachments
      />
    </View>
  );
};

export default DetailDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },

});
