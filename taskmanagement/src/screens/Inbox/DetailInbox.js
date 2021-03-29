import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  RHeader,
  RButtonLoading,
  RLoader,
  RDetailCard,
  RButton,
  RColor,
} from '@reusable';
import {QUERY_TASKS, SET_STATUS} from '@config';
import {useMutation, useQuery} from '@apollo/client';

const DetailInbox = ({navigation, route}) => {
  const {
    id,
    project_id,
    title,
    description,
    start_date,
    due_date,
  } = route.params;
  const [loading, setLoading] = useState(false);
  const {data, error} = useQuery(QUERY_TASKS);
  const [
    updateStatusTask,
    {loading: loadingStatus, data: dataStatus, error: dataError},
  ] = useMutation(SET_STATUS);
  const [dataAll, setDataAll] = useState(0);
  const [dataDone, setDataDone] = useState(0);

  useEffect(() => {
    if (data) {
      setLoading(true);
      const dataAll = data.findAllTaskWorker.filter(
        f => f.status == 'approved',
      ).length;
      const dataDone = data.findAllTaskWorker.filter(
        f => f.status == 'done',
      ).length;
      console.log({dataAll, dataDone});
      setDataAll(dataAll);
      setDataDone(dataDone);
      setLoading(false);
    }
  }, []);

  const takeTask = () => {
    updateStatusTask({
      variables: {
        id: id,
        status: 'todo',
      },
    });
  };
  console.log({dataStatus});
  let percent = (dataDone  * 100)/dataAll;

  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Inbox Detail"
        onPress={() => navigation.goBack()}
      />
      <RDetailCard
        loading
        loadingText={`${percent}`}
        CStyle={{width: `${percent}%`}}
        title={title}
        description={description}
        sDate={start_date}
        dDate={due_date}
        CardStyle={{flex: 1}}
      />

      {loadingStatus ? (
        <RButtonLoading CStyle={styles.btnStyle} />
      ) : (
        <RButton
          title="TAKE THIS TASK"
          onPress={() => takeTask()}
          CStyle={styles.btnStyle}
        />
      )}
    </View>
  );
};

export default DetailInbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  btnStyle: {
    position: 'absolute',
    bottom: 30,
  },
});
