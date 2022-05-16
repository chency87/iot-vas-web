import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/fingerprint',
    component: Layout,
    name: 'Fingerprint',
    redirect: '/fingerprint/index',
    meta: {
      title: '指纹管理',
      icon: 'device2'
    },
    children: [
      {
        path: 'index',
        hidden: true,
        name: 'fingerprint',
        component: () => import('@/views/fingerprint/index'),
        meta: { title: '', icon: 'form' }
      },
      {
        path: 'firmware/risk',
        hidden: true,
        component: () => import('@/views/fingerprint/risk/index'),
        name: 'Risk',
        meta: { title: '风险分析', noCache: true }
      }
    ]
  },
  {
    path: '/device',
    component: Layout,
    children: [{
      path: 'index',
      name: 'IoT 资产监控',
      component: () => import('@/views/device/index'),
      meta: { title: 'IoT 资产监控', icon: 'el-icon-video-camera' }
    }]
  },
  {
    path: '/plugin',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'plugin',
        component: () => import('@/views/plugin/index'),
        meta: { title: '组件管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    name: 'Task',
    redirect: '/task/index',
    meta: {
      title: '任务管理',
      icon: 'el-icon-notebook-2'
    },
    children: [
      {
        path: 'index',
        hidden: true,
        name: 'task',
        component: () => import('@/views/task/index'),
        meta: { title: '', icon: 'form' }
      },
      {
        path: 'create',
        hidden: true,
        component: () => import('@/views/task/create/index'),
        name: 'Profile',
        meta: { title: '添加任务', noCache: true }
      },
      {
        path: 'report',
        hidden: true,
        component: () => import('@/views/task/report/index'),
        name: 'Report',
        meta: { title: '查看报告', noCache: true }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/dict',
    name: 'system',
    meta: {
      title: '系统设置',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'dict',
        component: () => import('@/views/system/dict/index'),
        name: 'Menu1',
        meta: { title: '字典管理', icon: 'form' }
      },
      {
        path: 'log',
        component: () => import('@/views/system/log/index'),
        name: 'Menu2',
        meta: { title: '日志管理', icon: 'clipboard' }
      },
      {
        path: 'user',
        component: () => import('@/views/system/usermanage/index'),
        name: 'Menu3',
        meta: { title: '用户管理', icon: 'user' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', noCache: true }
      }
    ]
  }
]
// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRoutes = [
  // {
  //   path: '/about',
  //   component: Layout,
  //   meta: {
  //     roles: ['admin']
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'about',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form', roles: ['admin'] }
  //     }
  //   ]
  // },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
