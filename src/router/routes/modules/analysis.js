const analysisRoutes = {
  path: '/selfAnalysis',
  redirect: '/selfAnalysis/eventAnalysis',
  name: 'selfAnalysis',
  meta: {
    title: '分析工具',
    icon: 'chart'
  },
  children: [
    {
      path: 'eventAnalysis',
      component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
      name: 'eventAnalysis',
      meta: {
        title: '事件分析',
        icon: 'tree'
      }
    },
    {
      path: 'retentionAnalysis',
      component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
      name: 'retentionAnalysis',
      meta: {
        title: '留存分析',
        icon: 'tree'
      }
    },
    {
      path: 'attributeAnalysis',
      component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
      name: 'attributeAnalysis',
      meta: {
        title: '属性分析',
        icon: 'tree'
      }
    },
    {
      path: 'trendAnalysis',
      component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
      name: 'trendAnalysis',
      meta: {
        title: '趋势分析',
        icon: 'tree'
      }
    },
    {
      path: 'distributionAnalysis',
      component: () => import('@/views/selfAnalysis/eventAnalysis.vue'),
      name: 'distributionAnalysis',
      meta: {
        title: '分布分析',
        icon: 'tree'
      }
    }
  ]
}

export default analysisRoutes
