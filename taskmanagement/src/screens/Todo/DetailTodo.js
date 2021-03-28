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
import {useMutation} from '@apollo/client';
import {UPDATE_STATUS_TASK} from '@config';

const DetailTodo = ({navigation, route}) => {
  const {
    id,
    project_id,
    assignee,
    title,
    description,
    start_date,
    due_date,
    attachment,
    status,
    is_read,
  } = route.params;

  const [updateStatusTask, {data, loading, error}] = useMutation(
    UPDATE_STATUS_TASK,
  );
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
        <RButtonLoading CStyle={styles.btnColorDoing} />
      ) : (
        <RButton
          title="MAKE IT DOING"
          onPress={()=>updateStatusTask({
            variables: {
              id: id,
              project_id: project_id,
              assignee: assignee,
              title: title,
              description: description,
              start_date: start_date,
              due_date: due_date,
              attachment: attachment,
              status: 'doing',
              is_read: is_read,
            },
          })}
          CStyle={styles.btnColorDoing}
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
  btnColorDoing: {
    backgroundColor: RColor.orange,
    marginBottom: 20,
  },
});
