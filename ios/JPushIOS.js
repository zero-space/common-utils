import JPushModule from 'jpush-react-native';

//初始化
const JPushInit = (callback)=>{
  JPushModule.setupPush();
  callback && callback;
};


//接收推送事件
const receivePush = (callback)=>{
  JPushModule.addReceiveNotificationListener((map) => {
    console.log("alertContent: " + map.alertContent);
    console.log("extras: " + map.extras);
    callback && callback();
  });
};

//点击推送事件
const tapNotice = (callback)=>{
  JPushModule.addReceiveOpenNotificationListener((map) => {
    console.log("Opening notification!");
    console.log("map.extra: " + map.extras);
    console.log(JSON.stringify(map));
    callback && callback();
  });
};

//接收自定义消息事件
const customMsg = (callback)=>{
  JPushModule.addReceiveCustomMsgListener((map)=>{
    console.log('用户自定义事件');
    console.log(map.extras);
    callback && callback()
  });
};

//点击推送启动应用事件
const launchApp = (callback)=>{
  JPushModule.addOpenNotificationLaunchAppListener((map)=>{
    console.log('启动事件');
    console.log(map.extras);
    callback && callback()  ;
  })
};

export default {
  JPushInit,
  receivePush,
  tapNotice,
  customMsg,
  launchApp
}