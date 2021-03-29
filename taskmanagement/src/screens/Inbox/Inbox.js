import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RHeader, RLoader, RColor} from '@reusable';
import {useMutation, useQuery} from '@apollo/client';
import {QUERY_TASKS, SET_ISREAD} from '@config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
const Inbox = ({navigation}) => {
  const {data, loading, error, refetch} = useQuery(QUERY_TASKS);
  const [updateIsRead, {data: dataIsread, error: errorIsRead}] = useMutation(
    SET_ISREAD,
  );
  useEffect(()=>{
    refetch()
  },[])

  const RCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          updateIsRead({
            variables: {
              id: item.id,
            },
          });
          navigation.navigate('Detail Inbox', {
            id: item.id,
            project_id: item.project_id,
            title: item.title,
            description: item.description,
            start_date: item.start_date,
            due_date: item.due_date,
          });
        }}
        style={styles.containerCard}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text
              style={[
                styles.txtTitle,
                {color: item.is_read ? RColor.gray : 'black'},
              ]}>
              Project ID :{item.project_id}
            </Text>
            <Text
              style={[
                styles.txtTitle,
                {color: item.is_read ? RColor.gray : 'black'},
              ]}>
              0/2
            </Text>
          </View>
          <Text
            style={[
              styles.txtTilteCard,
              {
                fontWeight: item.is_read ? 'normal' : 'bold',
                color: item.is_read ? RColor.gray : 'black',
              },
            ]}>
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
  };
  return (
    <View style={{flex: 1, backgroundColor: RColor.lightBlue}}>
      <RHeader
        onPress={() => navigation.goBack()}
        title={'Inbox'}
        iconName={'arrow-left'}
      />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <RLoader size={30} title={'Load All Inbox....'} />
        </View>
      ) : (
        <>
          <FlatList
            // .filter(f => f.status == 'approved')
            data={data.findAllTaskWorker}
            renderItem={RCard}
            keyExtractor={item => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: 'bold',
  },
  containerCard: {
    width: '100%',
    height: 90,
    borderBottomColor: RColor.gray,
    borderBottomWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: RColor.white,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txtTilteCard: {
    fontSize: 16,
  },
  txtDateCard: {
    color: RColor.green,
  },
});
