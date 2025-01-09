import EventAnalysis from '@/views/selfAnalysis/eventAnalysis.vue'
const dataManageRoutes = {
  path: '/dataManage',
  redirect: '/dataManage/orginData',
  name: 'dataManage',
  meta: {
    title: '数据管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'orginData',
      name: 'orginData',
      redirect: '/dataManage/orginData/metaEvent',
      meta: {
        title: '元数据管理',
        icon: 'tree'
      },
      children: [
        {
          path: 'metaEvent',
          component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
          name: 'metaEvent',
          meta: {
            title: '元事件',
            icon: 'tree'
          }
        },
        {
          path: 'virtualEvent',
          component: EventAnalysis,
          name: 'virtualEvent',
          meta: {
            title: '虚拟事件',
            icon: 'tree'
          }
        },
        {
          path: 'eventAttribute',
          component: EventAnalysis,
          name: 'eventAttribute',
          meta: {
            title: '事件属性',
            icon: 'tree'
          }
        },
        {
          path: 'userAttribute',
          component: EventAnalysis,
          name: 'userAttribute',
          meta: {
            title: '用户属性',
            icon: 'tree'
          }
        },
        {
          path: 'deviceAttribute',
          component: EventAnalysis,
          name: 'deviceAttribute',
          meta: {
            title: '设备属性',
            icon: 'tree'
          }
        },
        {
          path: 'intermediateTable',
          component: EventAnalysis,
          name: 'intermediateTable',
          meta: {
            title: '中间表',
            icon: 'tree'
          }
        },
        {
          path: 'roleAttribute',
          component: EventAnalysis,
          name: 'roleAttribute',
          meta: {
            title: '角色属性',
            icon: 'tree'
          }
        },
        {
          path: 'deviceIndexAttribute',
          component: EventAnalysis,
          name: 'deviceIndexAttribute',
          meta: {
            title: '设备指标属性',
            icon: 'tree'
          }
        },
        {
          path: 'layoutAttribute',
          component: EventAnalysis,
          name: 'layoutAttribute',
          meta: {
            title: '布局属性',
            icon: 'tree'
          }
        }
      ]
    },
    {
      path: 'trackData',
      name: 'trackData',
      redirect: '/dataManage/trackData/trackConfig',
      meta: {
        title: '埋点管理',
        icon: 'tree'
      },
      children: [
        {
          path: 'trackConfig',
          component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
          name: 'trackConfig',
          meta: {
            title: '埋点配置',
            icon: 'tree'
          }
        },
        {
          path: 'dataCheck',
          component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
          name: 'dataCheck',
          meta: {
            title: '数据验收',
            icon: 'tree'
          }
        }
      ]
    }
  ]
}

export default dataManageRoutes
