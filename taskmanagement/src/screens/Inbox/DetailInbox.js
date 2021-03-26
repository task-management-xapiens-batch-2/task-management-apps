import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RHeader, RButtonLoading, RLoader, RButton, RColor} from '@reusable';
const DetailInbox = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RHeader
        iconName={'arrow-left'}
        title="Inbox Detail"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <View style={styles.loadingContainer}>
            <View style={styles.loading}>
              <Text style={styles.loadingText}>{(5 / 5) * 100} %</Text>
            </View>
          </View>

          <Text style={styles.txtTitle}>AAA</Text>
          <Text style={styles.txtDate}>20-12-2021</Text>
          <Text style={styles.txtDetail}>test data detai</Text>
        </View>
        <View style={styles.containerBtn}>
          <RButton title="TAKE THIS TASK" />
        </View>
      </View>
    </View>
  );
};

export default DetailInbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.lightBlue,
  },
  containerBody: {
    flex: 1,
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 20,
    backgroundColor: RColor.white,
  },
  containerText: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
  },
  loadingContainer: {
    width: '80%',
    height: 15,
    borderWidth: 4,
    borderRadius: 15 / 2,
    marginBottom: 15,
    borderColor: RColor.blue,
    backgroundColor: RColor.lightBlue,
    justifyContent: 'center',
  },
  loading: {
    width: `${(5 / 5) * 100}%`,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: RColor.blue,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  loadingText: {
    color: RColor.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtDate: {
    fontWeight: '500',
    fontSize: 15,
    color: RColor.gray,
  },
  txtDetail: {
    fontWeight: '500',
    fontSize: 15,
    color: RColor.gray,
    marginTop: 15,
  },
  containerBtn: {
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
  },
});
