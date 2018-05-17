import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  size:1024,

  //指定储存在内存中  否则重启失效
  storageBackend: AsyncStorage,

  // 一天时间 （1000 * 3600 * 24 毫秒）
  defaultExpires:(1000 * 3600 * 24)*10,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true

});

global.storage = storage;
