import { RoutesAlias } from '../routesAlias'
import { AppRouteRecord } from '@/types/router'

/**
 * 菜单列表、异步路由
 *
 * 支持两种模式:
 * 前端静态配置 - 直接使用本文件中定义的路由配置
 * 后端动态配置 - 后端返回菜单数据，前端解析生成路由
 *
 * 菜单标题（title）:
 * 可以是 i18n 的 key，也可以是字符串，比如：'用户列表'
 *
 * RoutesAlias.Layout 指向的是布局组件，后端返回的菜单数据中，component 字段需要指向 /index/index
 * 路由元数据（meta）：异步路由在 asyncRoutes 中配置，静态路由在 staticRoutes 中配置
 */
export const asyncRoutes: AppRouteRecord[] = [
  {
    name: 'Home',
    path: '/home',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.home.title',
      icon: '&#xe81a;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: RoutesAlias.Dashboard,
        meta: {
          title: 'menus.home.welcome',
          keepAlive: false,
          fixedTab: true
        }
      }
    ]
  },
  {
    name: 'Business',
    path: '/business',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.business.title',
      icon: '&#xe740;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'landResource',
        name: 'landResource',
        component: '',
        meta: {
          title: 'menus.business.landResource',
          icon: '&#xe62c;',
          keepAlive: true
        },
        children: [
          {
            path: 'entering',
            name: 'Entering',
            component: RoutesAlias.landEntering,
            meta: {
              title: 'menus.business.landResourceInput',
              icon: '&#xe60c;',
              keepAlive: true
            }
          },
          {
            // 新增
            path: 'entering/add',
            name: 'LandAdd',
            component: RoutesAlias.landForm,
            meta: {
              title: 'menus.business.landResourceAdd',
              icon: '&#xe60c;',
              isHide: true,
              keepAlive: true
            }
          },
          {
            path: 'entering/:id',
            name: 'LandEdit',
            component: RoutesAlias.landForm,
            meta: {
              title: 'menus.business.landResourceEdit',
              icon: '&#xe60c;',
              isHide: true,
              keepAlive: true
            }
          },
          {
            path: 'release',
            name: 'Release',
            component: RoutesAlias.landRelease,
            meta: {
              title: 'menus.business.landResourceEdit',
              icon: '&#xe60c;',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'industrySpaceResource',
        name: 'industrySpaceResource',
        component: '',
        meta: {
          title: 'menus.business.industrySpaceResource',
          icon: '&#xe62c;',
          keepAlive: true
        },
        children: [
          {
            path: 'entering',
            name: 'IndustryEntering',
            component: RoutesAlias.industryEntering,
            meta: {
              title: 'menus.business.industrySpaceResourceInput',
              icon: '&#xe60c;',
              keepAlive: true
            }
          },
          {
            path: 'release',
            name: 'IndustryRelease',
            component: RoutesAlias.industryRelease,
            meta: {
              title: 'menus.business.industrySpaceResourcePublish',
              icon: '&#xe60c;',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'businessBuildingInput',
        name: 'businessBuildingInput',
        component: '',
        meta: {
          title: 'menus.business.businessBuildingInput',
          icon: '&#xe62c;',
          keepAlive: true
        },
        children: [
          {
            path: 'entering',
            name: 'BusinessEntering',
            component: RoutesAlias.businessEntering,
            meta: {
              title: 'menus.business.businessBuildingInput',
              icon: '&#xe60c;',
              keepAlive: true
            }
          },
          {
            path: 'release',
            name: 'BusinessRelease',
            component: RoutesAlias.businessRelease,
            meta: {
              title: 'menus.business.businessBuildingPublish',
              icon: '&#xe60c;',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'multiSpace',
        name: 'multiSpace',
        component: '',
        meta: {
          title: 'menus.business.multiSpace',
          icon: '&#xe62c;',
          keepAlive: true
        },
        children: [
          {
            path: 'entering',
            name: 'MultiSpaceEntering',
            component: RoutesAlias.multivariantEntering,
            meta: {
              title: 'menus.business.multiSpaceInput',
              icon: '&#xe60c;',
              keepAlive: true
            }
          },
          {
            path: 'release',
            name: 'MultiSpaceRelease',
            component: RoutesAlias.multivariantRelease,
            meta: {
              title: 'menus.business.multiSpacePublish',
              icon: '&#xe60c;',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'otherResource',
        name: 'otherResource',
        component: '',
        meta: {
          title: 'menus.business.otherResource',
          icon: '&#xe62c;',
          keepAlive: true
        },
        children: [
          {
            path: 'entering',
            name: 'OtherResourceEntering',
            component: RoutesAlias.otherResourceEntering,
            meta: {
              title: 'menus.business.otherResourceInput',
              icon: '&#xe60c;',
              keepAlive: true
            }
          },
          {
            path: 'release',
            name: 'OtherResourceRelease',
            component: RoutesAlias.otherResourceRelease,
            meta: {
              title: 'menus.business.otherResourcePublish',
              icon: '&#xe60c;',
              keepAlive: true
            }
          }
        ]
      }
    ]
  },
  {
    name: 'Info',
    path: '/info',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.info.title',
      icon: '&#xe705;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'publicity',
        name: 'Publicity',
        component: RoutesAlias.publicity,
        meta: {
          title: 'menus.info.publicity',
          icon: '&#xe62c;',
          keepAlive: true
        }
      },
      {
        path: 'policy',
        name: 'Policy',
        component: RoutesAlias.policy,
        meta: {
          title: 'menus.info.policy',
          icon: '&#xe62c;',
          keepAlive: true
        }
      },
      {
        path: 'news',
        name: 'News',
        component: RoutesAlias.news,
        meta: {
          title: 'menus.info.news',
          icon: '&#xe62c;',
          keepAlive: true
        }
      },
      {
        path: 'service',
        name: 'Service',
        component: RoutesAlias.service,
        meta: {
          title: 'menus.info.service',
          icon: '&#xe62c;',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.system.title',
      icon: '&#xe7b9;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: RoutesAlias.User,
        meta: {
          title: 'menus.system.user',
          keepAlive: true,
          roles: ['R_SUPER', 'R_ADMIN']
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: RoutesAlias.Role,
        meta: {
          title: 'menus.system.role',
          keepAlive: true,
          roles: ['R_SUPER']
        }
      },
      {
        path: 'user-center',
        name: 'UserCenter',
        component: RoutesAlias.UserCenter,
        meta: {
          title: 'menus.system.userCenter',
          isHide: true,
          keepAlive: true,
          isHideTab: true
        }
      },
      {
        path: 'menu',
        name: 'Menus',
        component: RoutesAlias.Menu,
        meta: {
          title: 'menus.system.menu',
          keepAlive: true,
          roles: ['R_SUPER'],
          authList: [
            {
              title: '新增',
              authMark: 'add'
            },
            {
              title: '编辑',
              authMark: 'edit'
            },
            {
              title: '删除',
              authMark: 'delete'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/log',
    name: 'Log',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.log.title',
      icon: '&#xe816;'
    },
    children: [
      {
        path: 'log-list',
        name: 'LogList',
        component: RoutesAlias.Log,
        meta: {
          title: 'menus.log.logList',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/result',
    name: 'Result',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.result.title',
      icon: '&#xe715;'
    },
    children: [
      {
        path: 'success',
        name: 'ResultSuccess',
        component: RoutesAlias.Success,
        meta: {
          title: 'menus.result.success',
          keepAlive: true
        }
      },
      {
        path: 'fail',
        name: 'ResultFail',
        component: RoutesAlias.Fail,
        meta: {
          title: 'menus.result.fail',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'Exception',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.exception.title',
      icon: '&#xe820;'
    },
    children: [
      {
        path: '403',
        name: '403',
        component: RoutesAlias.Exception403,
        meta: {
          title: 'menus.exception.forbidden',
          keepAlive: true
        }
      },
      {
        path: '404',
        name: '404',
        component: RoutesAlias.Exception404,
        meta: {
          title: 'menus.exception.notFound',
          keepAlive: true
        }
      },
      {
        path: '500',
        name: '500',
        component: RoutesAlias.Exception500,
        meta: {
          title: 'menus.exception.serverError',
          keepAlive: true
        }
      }
    ]
  }
]
