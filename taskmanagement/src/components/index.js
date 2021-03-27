import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
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

const RCard = (props, {item}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.containerCard, props.CStyle]}>
      <View>
        <Text style={styles.txtTilteCard}>Judul</Text>
        <Text style={styles.txtDateCard}>20-12-2021</Text>
      </View>
      <TouchableOpacity>
        <RIcon name={props.iconName} size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const RHeaderMain = props => {
  return (
    <View style={styles.containerHeaderMain}>
      <Text style={{color: RColor.white}}>Hello</Text>
      <Text style={styles.headerTitleMain}>{props.title}</Text>
      <TouchableOpacity style={{position: 'absolute', right: '8%'}}>
        <CustomIcon
          style={{color: RColor.white}}
          onPress={props.onPress}
          name={props.iconName}
          size={props.iconSize}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={{position: 'absolute', right: '8%'}}>
        <IconTabs
          style={{color: RColor.white}}
          onPress={props.onPressRight}
          name={props.iconNameRight}
          size={props.iconSizeRight}
        />
      </TouchableOpacity> */}
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
      <Text style={{marginLeft:'10%', color:RColor.gray}}>{props.title}</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
      />
    {<Text style={[{color:'red', marginLeft:'12%', marginBottom:5},props.CStyle]}>{props.error}</Text>}
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
  RCard,
  RHeaderMain,
  RHeader,
  RButtonLoading,
  RLoader,
  RIcon,
  Icon,
  RTextInput,
  RColor,
  RButton,
};

const styles = StyleSheet.create({
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
    fontSize: 30,
    color: RColor.white,
  },

  // TXT INPUT
  txtInput: {
    alignSelf: 'center',
    width: '80%',
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderRadius: 15,
    color:RColor.blue,
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
  // CARD
  containerCard: {
    width: '90%',
    height: 70,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtDateCard: {
    color: RColor.green,
  },
});
