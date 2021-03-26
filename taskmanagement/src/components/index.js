import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import CustomIcon from 'react-native-vector-icons/FontAwesome';
import CIcon from 'react-native-vector-icons/SimpleLineIcons';

const RColor = {
  orange: '#DC7733',
  lightOrange: '#F9E79F',
  blue: '#65AAEA',
  white: '#FFFF',
  green: '#5BA092',
  grey: '#BEBAB3',
  darkGrey: '#78746D',
  lightGray: '#F8F2EE',
};

const ACTIVE_TAB_COLOR = RColor.orange;
const INACTIVE_TAB_COLOR = RColor.grey;
const Icon = ({name, focused, size, title}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: focused ? RColor.lightOrange : null,
      borderRadius: 25,
      height: 35,
      paddingLeft: 10,
      paddingRight: 10,
    }}>
    <CustomIcon
      name={name}
      size={size}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
    />
    <Text
      style={{
        fontWeight: 'bold',
        marginLeft: focused ? 5 : 0,
        color: RColor.orange,
      }}>
      {focused ? title : ''}
    </Text>
  </View>
);
const RHeader = props => {
  return (
    <View style={styles.containerHeader}>
      <View style={{position: 'absolute'}}>
        <RIcon onPress={props.onPress} name="arrow-left" size={20} />
      </View>
      <View style={styles.containerHeaderTitle}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>{props.title}</Text>
      </View>
    </View>
  );
};
const RLoader = props => {
  return (
    <View style={[{alignSelf: 'center'}, props.styleLoader]}>
      <ActivityIndicator size={props.size} color={RColor.orange} />
      <Text style={{color: RColor.orange, fontWeight: 'bold'}}>
        {props.title}
      </Text>
    </View>
  );
};
const RSvg = props => {
  return <SvgXml xml={props.xml} style={props.CStyle} />;
};

const RSkipRight = props => {
  return (
    <TouchableOpacity style={styles.txtSkipContainer} onPress={props.onPress}>
      <Text style={styles.txtSkip}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const RTitleSlider = props => {
  return (
    <View style={[styles.titleSliderContainer, props.CStyleContainer]}>
      <Text style={[styles.txtSlideTitle, props.CStyle]}>{props.title}</Text>
      <Text style={styles.txtSlideSubTitle}>{props.subTitle}</Text>
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

const RDotFilled = props => {
  const title = props.title;
  return (
    <View style={props.CStyle}>
      {title == 'left' ? (
        <View style={styles.dotContainer}>
          <View style={styles.dotFilled} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      ) : title == 'mid' ? (
        <View style={styles.dotContainer}>
          <View />
          <View style={styles.dot} />
          <View style={styles.dotFilled} />
          <View style={styles.dot} />
        </View>
      ) : (
        <View style={styles.dotContainer}>
          <View />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotFilled} />
        </View>
      )}
    </View>
  );
};
const RTextInput = props => {
  return (
    <View>
      <TextInput
        style={[styles.txtInput, props.CStyle]}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      />
      {props.error && <Text>{props.error}</Text>}
    </View>
  );
};

const RQuestion = props => {
  return (
    <TouchableOpacity style={styles.txtQContainer} onPress={props.onPress}>
      <Text style={styles.txtQ}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const RIcon = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.iconContainer}>
      <CIcon name={props.name} size={props.size} style={{color: RColor.grey}} />
    </TouchableOpacity>
  );
};

const RCategory = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: RColor.blue,
        width: 54,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
      }}>
      <Text style={{color: RColor.white, fontSize: 12, fontStyle: 'normal'}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export {
  RHeader,
  RCategory,
  RButtonLoading,
  RLoader,
  RSvg,
  RIcon,
  Icon,
  RQuestion,
  RTextInput,
  RColor,
  RButton,
  RTitleSlider,
  RDotFilled,
  RSkipRight,
};

const styles = StyleSheet.create({
  // HEADER
  containerHeader: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  containerHeaderTitle: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  // ICON
  iconContainer: {
    borderColor: RColor.grey,
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // TXT QUESTION
  txtQContainer: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  txtQ: {
    color: RColor.darkGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // TXT INPUT
  txtInput: {
    alignSelf: 'center',
    width: '90%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    borderColor: RColor.grey,
  },
  // TXT INPUT SEARCH
  txtInputSearch: {
    alignSelf: 'center',
    width: '90%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    borderColor: RColor.grey,
  },
  // SKIP
  txtSkipContainer: {
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  txtSkip: {
    color: RColor.grey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // BUTTON
  btnContainer: {
    width: '90%',
    height: 55,
    borderRadius: 15,
    backgroundColor: RColor.orange,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtTilte: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RColor.white,
  },
  // SLIDER TEXT
  titleSliderContainer: {
    alignItems: 'center',
  },
  txtSlideTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    width: '90%',
  },
  txtSlideSubTitle: {
    textAlign: 'center',
    width: '90%',
  },
  // SLIDER DOT
  dotContainer: {flexDirection: 'row', alignSelf: 'center'},
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: RColor.grey,
    marginLeft: 3,
  },
  dotFilled: {
    width: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: RColor.blue,
    marginLeft: 3,
  },
});
