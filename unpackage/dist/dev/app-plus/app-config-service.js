
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/category/category","pages/article/article","pages/question/question","pages/my/my","pages/scanCode/scanCode","pages/search/search"],"window":{"globalStyle":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F9FB","backgroundColorTop":"#FFFFFF"}},"tabBar":{"color":"#b0abb3","selectedColor":"#345dc2","backgroundColor":"#F8F8F8","borderStyle":"white","fontSize":"11px","height":"52px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tab/index.png","selectedIconPath":"static/tab/index-active.png"},{"pagePath":"pages/category/category","text":"分类","iconPath":"static/tab/category.png","selectedIconPath":"static/tab/category-active.png"},{"pagePath":"pages/article/article","text":"阅读","iconPath":"static/tab/article.png","selectedIconPath":"static/tab/article-active.png"},{"pagePath":"pages/question/question","text":"问答","iconPath":"static/tab/question.png","selectedIconPath":"static/tab/question-active.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/tab/my.png","selectedIconPath":"static/tab/my-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-education","compilerVersion":"3.6.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#345DC2","navigationBarTextStyle":"white","titleNView":{"type":"transparent","searchInput":{"align":"center","placeholder":"搜索你想要的内容","borderRadius":"30rpx","backgroundColor":"#F0F1F2","placeholderColor":"#979C9D","disabled":true},"buttons":[{"float":"right","background":"rgba(0,0,0,0)","fontSize":"23","fontSrc":"/static/icon/iconfont.ttf","text":""}]}}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#345DC2","navigationBarTextStyle":"white","bounce":"none","titleNView":{"buttons":[{"color":"#ffffff","fontSize":"18","fontSrc":"/static/icon/iconfont.ttf","text":"","float":"right"}]}}},{"path":"/pages/article/article","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/question/question","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/scanCode/scanCode","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","placeholder":"搜索你想要的内容","borderRadius":"30rpx","backgroundColor":"#f0f1f2"},"buttons":[{"float":"right","text":"取消","fontSize":"16","color":"#2A333B"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
