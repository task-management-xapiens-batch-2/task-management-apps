import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RColor, RHeaderMain, RLoader, RIcon} from '@reusable';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';
import {useLazyQuery} from '@apollo/client';
import {QUERY_TASKS} from '@config';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const Doing = ({navigation}) => {
  const [taskList, {data, error}] = useLazyQuery(QUERY_TASKS);
  const [time, setTime] = useState(false);
  const [id, setId] = useState('');
  const [dataUser, setDataUser] = useState('');

  useEffect(async () => {
    const rawDataUser = await AsyncStorage.getItem('data');
    const dataUser = JSON.parse(rawDataUser);
    console.log(dataUser.Login);
    if (dataUser !== null) {
      setId(dataUser.id);
      setDataUser(dataUser.Login);
      taskList({
        variables: {
          assignee: dataUser.data.id,
        },
      });
    } else {
      console.log({error});
    }
  }, []);

  // setInterval(() => {
  //   taskList({
  //     variables: {
  //       assignee: id,
  //     },
  //   });
  // }, 300000);

  setTimeout(() => {
    setTime(true);
  }, 4000);

  const fetchTask = () => {
    taskList({
      variables: {
        assignee: id,
      },
    });
  };

  const RCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail Doing', {
            id: item.id,
            project_id: item.project_id,
            assignee: item.assignee,
            title: item.title,
            description: item.description,
            start_date: item.start_date,
            due_date: item.due_date,
            attachment: item.attachment,
            status: item.status,
            is_read: item.is_read,
          })
        }
        style={styles.containerCard}>
        <View>
          <Text style={styles.txtTilteCard}>
            {item.title.length > 25
              ? item.title.substring(0, 25) + ' .......'
              : item.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtDateCard}>{item.start_date} - </Text>
            <Text style={styles.txtDateCard}>{item.due_date}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => attachments()}>
          <RIcon name={'paper-clip'} size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const attachments = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  // BallIndicator,
  // BarIndicator,
  // DotIndicator,
  // MaterialIndicator,
  // PacmanIndicator,
  // PulseIndicator,
  // SkypeIndicator,
  // UIActivityIndicator,
  // WaveIndicator,
  return (
    <View style={styles.container}>
      <RHeaderMain
        title={
          !dataUser.fullname ? (
            dataUser.fullname
          ) : (
            <BallIndicator size={8} color={RColor.white} />
          )
        }
        onPressRight={() => navigation.navigate('Inbox')}
        onPress={() => fetchTask()}
        iconName={'refresh'}
        iconNameRight={'envelope'}
        iconSize={30}
        iconSizeRight={30}
      />
      <Text style={styles.txtTitle}>TASK LIST</Text>
      {!data && !time ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <RLoader size={30} title={'Load All Todo List....'} />
        </View>
      ) : time ? (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Image
            source={require('../../img/box.png')}
            style={{width: 90, height: 90, alignSelf: 'center'}}
          />
          <Text style={{color: RColor.blue, fontWeight: 'bold'}}>
            OOPS !, your list task is Empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={data.listTaskWorker}
          renderItem={RCard}
          keyExtractor={item => item.id.toString()}
        />
      )}
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
  containerCard: {
    width: '90%',
    height: 90,
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    backgroundColor: RColor.white,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: RColor.orange,
  },
  txtTilteCard: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtDateCard: {
    color: RColor.green,
  },
});
