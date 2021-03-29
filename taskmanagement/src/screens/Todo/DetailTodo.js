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

const DetailTodo = ({navigation, route}) => {
  const {id, title, description, start_date, due_date} = route.params;

  const [updateStatusTask, {data, loading, error}] = useMutation(SET_STATUS);

  console.log({data, loading, error});
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Detail Todo"
        onPress={() => navigation.goBack()}
      />
      <RDetailCard
        title={title}
        description={description}
        sDate={start_date}
        dDate={due_date}
        CardStyle={{flex: 1}}
      />

      {loading ? (
        <RButtonLoading CStyle={styles.btnStyle} />
      ) : (
        <RButton
          title="MAKE IT DOING"
          CStyle={styles.btnStyle}
          onPress={() => {
            updateStatusTask({
              variables: {
                id: id,
                status: 'doing',
              },
            });
            if (data) {
              if (data.status == 'doing') {
                navigation.navigate('Doing');
              }
            }
          }}
        />
      )}
    </View>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  btnStyle: {
    marginBottom: 20,
    position: 'absolute',
    bottom: 20,
    backgroundColor: RColor.orange,
  },
});
