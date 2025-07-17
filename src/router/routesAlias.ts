/**
 * 路由别名，方便快速找到页面，同时可以用作路由跳转
 */
export enum RoutesAlias {
  // 布局和认证
  Layout = '/index/index', // 布局容器
  Login = '/auth/login', // 登录
  Register = '/auth/register', // 注册
  ForgetPassword = '/auth/forget-password', // 忘记密码

  // 异常页面
  Exception403 = '/exception/403', // 403
  Exception404 = '/exception/404', // 404
  Exception500 = '/exception/500', // 500

  // 结果页面
  Success = '/result/success', // 成功
  Fail = '/result/fail', // 失败

  // 首页
  Dashboard = '/home/welcome', // 工作台

  // 业务管理
  landEntering = '/business/landResource/entering', // 土地资源录入
  landFormEdit = '/business/landResource/components/edit', // 新增土地资源编辑
  landFormAdd = '/business/landResource/components/add', // 土地资源详情
  landRelease = '/business/landResource/release', // 土地资源发布
  industryEntering = '/business/industrySpaceResource/entering', // 产业资源录入
  industryRelease = '/business/industrySpaceResource/release', // 产业资源发布
  businessEntering = '/business/businessBuildingInput/entering', // 商业楼宇录入
  businessRelease = '/business/businessBuildingInput/release', // 商业楼宇录入
  multivariantEntering = '/business/multiSpace/entering', // 多元空间录入
  multivariantRelease = '/business/multiSpace/release', // 多元空间发布
  otherResourceEntering = '/business/otherResource/entering', // 其他资源录入
  otherResourceRelease = '/business/otherResource/release', // 其他资源发布
  infoList = '/info/info-list', // 信息列表

  // 信息管理
  publicity = '/info/publicity', // 宣传视频管理
  policy = '/info/policy', // 政策发布管理
  news = '/info/news', // 新闻资讯管理
  service = '/info/service', // 服务信息管理

  // 系统管理
  User = '/system/user', // 账户
  Role = '/system/role', // 角色
  UserCenter = '/system/user-center', // 用户中心
  Menu = '/system/menu', // 菜单

  // 日志管理
  Log = '/log/log-list' // 日志列表
}
