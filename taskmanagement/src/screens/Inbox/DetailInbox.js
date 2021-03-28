import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  RHeader,
  RButtonLoading,
  RLoader,
  RDetailCard,
  RButton,
  RColor,
} from '@reusable';
const DetailInbox = ({navigation, route}) => {
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
  const [loading, setLoading] = useState(false);

  const takeTask = () => {
    setLoading(true);
  };
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Inbox Detail"
        onPress={() => navigation.goBack()}
      />
      <RDetailCard
        loading
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
          title="TAKE THIS TASK"
          onPress={() =>
            updateStatusTask({
              variables: {},
            })
          }
          CStyle={{marginBottom:20}}
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
});
