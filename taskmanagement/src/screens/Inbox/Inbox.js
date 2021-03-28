import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RHeader, RLoader, RColor, RIcon} from '@reusable';
import {useLazyQuery, useQuery} from '@apollo/client';
import {QUERY_TASKS} from '@config';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Inbox = ({navigation}) => {
  const {data, error} = useQuery(QUERY_TASKS);
  // const [taskList, {data, error}] = useLazyQuery(QUERY_TASKS);
  // useEffect(async () => {
  //   const rawDataUser = await AsyncStorage.getItem('data');
  //   const dataUser = JSON.parse(rawDataUser);
  //   if (dataUser !== null) {
  //     taskList({
  //       variables: {
  //         assignee: dataUser.data.id,
  //       },
  //     });
  //   } else {
  //     console.log({error});
  //   }
  // }, []);

  const RCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail Inbox', {
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
          });
        }}
        style={styles.containerCard}>
        <View>
          <Text
            style={[
              styles.txtTilteCard,
              {
                fontWeight: isRead ? 'normal' : 'bold',
                color: isRead ? RColor.gray : 'black',
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
      {data ? (
        <>
          <Text style={styles.txtTitle}> Task Title 0/2</Text>
          <FlatList
            // .filter(f => f.status == 'approved')
            data={data.findAllTask}
            renderItem={RCard}
            keyExtractor={item => item.id.toString()}
          />
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <RLoader size={30} title={'Load All Inbox....'} />
        </View>
      )}
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  txtTitle: {
    marginLeft: '5%',
    marginTop: 10,
    marginBottom: 10,
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
  },
  txtTilteCard: {
    fontSize: 16,
  },
  txtDateCard: {
    color: RColor.green,
  },
});
