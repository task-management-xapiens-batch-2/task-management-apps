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
import {useMutation, useQuery} from '@apollo/client';
import {SET_STATUS} from '@config';
const DetailDoing = ({navigation, route}) => {
  const {id, title, description, start_date, due_date} = route.params;
  const [updateStatusTask, {data, loading, error}] = useMutation(SET_STATUS);
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
        sDate={start_date}
        dDate={due_date}
        CardStyle={{flex: 1}}
        attachments={true}
      />
      {loading ? (
        <RButtonLoading CStyle={styles.btnStyle} />
      ) : (
        <RButton
          title="MAKE IT TODO"
          CStyle={styles.btnStyle}
          onPress={() => {
            updateStatusTask({
              variables: {
                id: id,
                status: 'todo',
              },
            });
            if (data) {
              if (data.status == 'todo') {
                navigation.navigate('Todo');
              }
            }
          }}
        />
      )}

      {loading ? (
        <RButtonLoading CStyle={styles.btnColorDone} />
      ) : (
        <RButton
          title="MAKE IT DONE"
          CStyle={styles.btnColorDone}
          onPress={() => {
            updateStatusTask({
              variables: {
                id: id,
                status: 'done',
              },
            });
            if (data) {
              if (data.status == 'done') {
                navigation.navigate('Done');
              }
            }
          }}
        />
      )}
    </View>
  );
};

export default DetailDoing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  btnStyle: {
    position: 'absolute',
    bottom: 80,
  },
  btnColorDone: {
    backgroundColor: RColor.green,
    bottom: 20,
    position: 'absolute',
  },
});
