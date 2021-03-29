import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import {RColor, RHeaderMain, RLoader, RIcon} from '@reusable';
import AsyncStorage from '@react-native-community/async-storage';
import {useLazyQuery, useQuery} from '@apollo/client';
import {QUERY_TASKS} from '@config';

const Todo = ({navigation}) => {
  // const [taskList, {data, loading, error}] = useLazyQuery(QUERY_TASKS);
  const {data: dataGql, error: errorGql, refetch} = useQuery(QUERY_TASKS);
  const [time, setTime] = useState(false);
  const [id, setId] = useState('');
  const [dataUser, setDataUser] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(async () => {
    const rawDataUser = await AsyncStorage.getItem('data');
    const dataUser = JSON.parse(rawDataUser);
    if (dataUser !== null) {
      setId(dataUser.id);
      setDataUser(dataUser.Login);
    } else {
      console.log({error});
    }
  }, []);

  const fetchTask = () => {
    refetch();
    console.log({dataGql, errorGql});
  };

  const onPressOpenModal = () => {
    setModalVisible(true);
  };
  const onPressLogout = () => {
    if (AsyncStorage.removeItem('isLogin') && AsyncStorage.removeItem('data')) {
      navigation.navigate('Splash');
    }
  };
  const onPressCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    refetch();
  }, [navigation]);
  const RCard = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail Todo', {
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
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Are you sure want to Logout from your current account ?</Text>
            <View style={styles.containerModalBtn}>
              <TouchableOpacity
                style={styles.btnCancelModal}
                onPress={() => onPressCancel()}>
                <Text style={styles.txtModal}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnLogoutModal}
                onPress={() => onPressLogout()}>
                <Text style={styles.txtModal}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <RHeaderMain
        title={
          dataUser.fullname ? (
            dataUser.fullname
          ) : (
            <DotIndicator size={8} color={RColor.white} />
          )
        }
        onPressLogout={() => onPressOpenModal()}
        onPressRight={() => navigation.navigate('Inbox')}
        onPress={() => fetchTask()}
        iconName={'refresh'}
        iconNameRight={'envelope'}
        iconSize={30}
        iconSizeRight={30}
      />
      <Text style={styles.txtTitle}>TASK LIST</Text>
      {!dataGql && !time ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <RLoader size={30} title={'Load All Todo List....'} />
        </View>
      ) : dataGql.findAllTaskWorker.filter(f => f.status == 'todo').length ==
        0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Image
            source={require('../../img/box.png')}
            style={{width: 90, height: 90, alignSelf: 'center'}}
          />
          <Text style={{color: RColor.blue, fontWeight: 'bold'}}>
            OOPS !, your task list is Empty
          </Text>
        </View>
      ) : !dataGql ? (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Image
            source={require('../../img/box.png')}
            style={{width: 90, height: 90, alignSelf: 'center'}}
          />
          <Text style={{color: RColor.blue, fontWeight: 'bold'}}>
            OOPS !, your task list is Empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={dataGql.findAllTaskWorker.filter(f => f.status == 'todo')}
          renderItem={RCard}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Todo;

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
    borderColor: RColor.white,
  },
  txtTilteCard: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtDateCard: {
    color: RColor.green,
  }, // MODAL
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    height: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerModalBtn: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  btnCancelModal: {
    flex: 1,
    height: 30,
    right: 2,
    backgroundColor: RColor.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogoutModal: {
    flex: 1,
    height: 30,
    left: 2,
    backgroundColor: RColor.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtModal: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    color: RColor.white,
  },
});
