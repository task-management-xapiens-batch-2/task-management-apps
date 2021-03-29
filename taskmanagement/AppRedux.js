import React from 'react';
import {View} from 'react-native';
import {Icon, RColor} from '@reusable';
import {
  Splash,
  Login,
  Todo,
  Doing,
  Done,
  DetailTodo,
  DetailDoing,
  DetailDone,
  Inbox,
  DetailInbox,
  SplashBeforeLogin
} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {persistor, store} from './src/redux';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  headerShown: false,
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          paddingTop: 10,
          backgroundColor: RColor.blue,
        },
      }}>
      <Tabs.Screen
        name="Todo"
        component={Todo}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="tasks"
              title="TODO"
              size={focused ? 20 : 28}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Doing"
        component={Doing}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="play"
              title="DOING"
              size={focused ? 20 : 28}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Done"
        component={Done}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="check"
              title="DONE"
              size={focused ? 20 : 28}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const StackList = () => {
  const {isLogin} = useSelector(state => {
    return {
      isLogin: state.auth.isLogin,
    };
  });
  console.log({isLogin});
  return (
    <NavigationContainer>
      {isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Inbox"
            component={Inbox}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Detail Todo"
            component={DetailTodo}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Detail Doing"
            component={DetailDoing}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Detail Done"
            component={DetailDone}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Detail Inbox"
            component={DetailInbox}
            options={horizontalAnimation}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashBeforeLogin}
            options={horizontalAnimation}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={horizontalAnimation}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <GraphProvider> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StackList />
          {/* </GraphProvider> */}
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
