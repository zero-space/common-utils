import JPushModule from 'jpush-react-native';
import {Platform} from 'react-native'
import JPushAndroid from './android/JPushAndroid'
import JPushIOS from './ios/JPushIOS';
const phoneDevice = Platform.OS;
export default phoneDevice=='ios'?JPushIOS:JPushAndroid

