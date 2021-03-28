import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Button,
} from 'react-native';
import CustomIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconTabs from 'react-native-vector-icons/FontAwesome';
const RColor = {
  orange: '#F3AE46',
  lightBlue: '#D4F3FD',
  blue: '#65AAEA',
  white: '#FFFFFF',
  green: '#61AF62',
  gray: '#BDBDBD',
};

const ACTIVE_TAB_COLOR = RColor.blue;
const INACTIVE_TAB_COLOR = RColor.white;
const Icon = ({name, focused, size, title}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: focused ? RColor.white : null,
      borderRadius: 25,
      height: '100%',
      paddingLeft: 10,
      paddingRight: 10,
    }}>
    <IconTabs
      name={name}
      size={size}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
    />
    <Text
      style={{
        fontWeight: 'bold',
        marginLeft: focused ? 5 : 0,
        color: RColor.blue,
      }}>
      {focused ? title : ''}
    </Text>
  </View>
);

const RHeaderMain = props => {
  return (
    <View style={styles.containerHeaderMain}>
      <Text style={{color: RColor.white}}>Hello</Text>
      <Text style={styles.headerTitleMain}>{props.title}</Text>
      <TouchableOpacity
        onPress={props.onPress}
        style={{position: 'absolute', right: '20%'}}>
        <CustomIcon
          style={{color: RColor.white}}
          name={props.iconName}
          size={props.iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{position: 'absolute', right: '8%'}}>
        <IconTabs
          style={{color: RColor.white}}
          onPress={props.onPressRight}
          name={props.iconNameRight}
          size={props.iconSizeRight}
        />
      </TouchableOpacity>
    </View>
  );
};

const RDetailCard = props => {
  return (
    <View style={[styles.containerDetailCard, props.CardStyle]}>
      {props.loading ? (
        <View style={styles.loadingContainer}>
          <View style={styles.loading}>
            <Text style={styles.loadingText}>{(4 / 5) * 100} %</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styles.txtDate}>Start : from {props.sDate}</Text>
        <Text style={styles.txtDate}>Until : {props.dDate}</Text>
        <Text style={styles.txtDetail}>{props.description}</Text>
        {props.attachments ? (
          <View>
            <Text style={styles.attachments}>Attachments</Text>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};
const RHeader = props => {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{position: 'absolute', left: '8%'}}>
        <CustomIcon
          onPress={props.onPress}
          name={props.iconName}
          size={25}
          style={{color: RColor.white}}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};
const RLoader = props => {
  return (
    <View style={[{alignSelf: 'center'}, props.styleLoader]}>
      <ActivityIndicator size={props.size} color={RColor.blue} />
      <Text style={{color: RColor.blue, fontWeight: 'bold'}}>
        {props.title}
      </Text>
    </View>
  );
};
const RButton = props => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, props.CStyle]}
      onPress={props.onPress}>
      <Text style={styles.txtTilte}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const RButtonLoading = props => {
  return (
    <View style={[styles.btnContainer, props.CStyle]}>
      <ActivityIndicator size={30} color={RColor.white} />
    </View>
  );
};

const RTextInput = props => {
  return (
    <View>
      <Text style={{marginLeft: '10%', color: RColor.gray}}>{props.title}</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
      />
      {
        <Text
          style={[
            {color: 'red', marginLeft: '12%', marginBottom: 5},
            props.CStyle,
          ]}>
          {props.error}
        </Text>
      }
    </View>
  );
};

const RIcon = props => {
  return (
    <CustomIcon
      name={props.name}
      size={props.size}
      style={{color: RColor.gray}}
    />
  );
};

export {
  RHeaderMain,
  RHeader,
  RButtonLoading,
  RLoader,
  RIcon,
  Icon,
  RTextInput,
  RColor,
  RButton,
  RDetailCard,
};

const styles = StyleSheet.create({
  // LOADING
  loadingContainer: {
    width: '90%',
    height: 15,
    borderWidth: 4,
    borderRadius: 15 / 2,
    marginBottom: 15,
    borderColor: RColor.blue,
    backgroundColor: RColor.lightBlue,
    justifyContent: 'center',
  },
  loading: {
    width: `${(4 / 5) * 100}%`,
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
  // ATTACHMENTS
  attachments: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  // CARD DETAIL
  containerDetailCard: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    backgroundColor: RColor.white,
  },
  txtTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtDate: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 15,
    color: RColor.green,
  },
  txtDetail: {
    fontWeight: '500',
    fontSize: 15,
    color: RColor.gray,
    marginTop: 15,
  },
  // HEADER
  containerHeader: {
    justifyContent: 'center',
    height: 76,
    backgroundColor: RColor.blue,
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  headerTitle: {
    fontSize: 25,
    color: RColor.white,
  },
  containerHeaderMain: {
    justifyContent: 'center',
    height: 76,
    backgroundColor: RColor.blue,
    paddingLeft: '8%',
  },
  headerTitleMain: {
    fontSize: 22,
    color: RColor.white,
    fontWeight: 'bold',
  },

  // TXT INPUT
  txtInput: {
    alignSelf: 'center',
    width: '80%',
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderRadius: 15,
    color: RColor.blue,
    borderColor: RColor.blue,
    backgroundColor: RColor.lightBlue,
  },
  // BUTTON
  btnContainer: {
    width: '80%',
    height: 55,
    borderRadius: 15,
    backgroundColor: RColor.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtTilte: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RColor.white,
  },
});
