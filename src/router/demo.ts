import { h } from 'vue';
import {
  RouterView,
  // RouteComponent,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const demo: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'demo',
    component: {
      render () {
        return h(RouterView);
      }
    },
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        component: () => import('../views/demo/demo1（数据类型）.vue'),
      },
      {
        path: 'demo2',
        name: 'demo2',
        component: () => import('../views/demo/demo2（类class）.vue'),
      },
      {
        path: 'demo3',
        name: 'demo3',
        component: () => import('../views/demo/demo3（类型断言）.vue'),
      },
      {
        path: 'demo4',
        name: 'demo4',
        component: () => import('../views/demo/demo4（接口interface）.vue'),
      },
      {
        path: 'demo5',
        name: 'demo5',
        component: () => import('../views/demo/demo5（泛型）.vue'),
      },
      {
        path: 'demo6',
        name: 'demo6',
        component: () => import('../views/demo/demo6（常用技巧）.vue'),
      }
    ]
  },
];
export default demo;
