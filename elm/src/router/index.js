import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import chooseCity from '@/components/jiangong/city/chooseCity'
import qiecity from '../components/jiangong/city/qiecity'
import soudizhi from '../components/jiangong/city/soudizhi'
import loginzhuce from '../components/jiangong/login/loginzhuce'
import findmima from '../components/jiangong/login/findmima'
//底部四项
import footers from '../components/footer/footers'
import my from '../components/04my/my1ji'
import sousuo from '../components/02sousuo/sousuo1ji'
import waimai from '../components/01waimai/waimai1ji'
import dingdan from '../components/03dingdan/dingdan1ji'
//外卖2级进店
import wm2shop from '../components/01waimai/wm2shop'
import menus from '../components/01waimai/menus'
import pingjia from '../components/01waimai/pingjia'
import shopxq from '../components/01waimai/shopxq'
import qyxq from '../components/01waimai/qyxq'
// 个人
import xqone from '../components/senlaoshi/xqone'
import config1 from '../components/senlaoshi/zujian/config1'
import config2 from '../components/senlaoshi/zujian/config2'
import config3 from '../components/senlaoshi/zujian/config3'
import ddxq from '../components/senlaoshi/zujian/ddxq'

import MEobj from '../components/mimitouyongfeng/ME'
import Mydd from "../components/mimitouyongfeng/mydd"
import Myjfsc from "../components/mimitouyongfeng/myjfsc"
import Myhyk from "../components/mimitouyongfeng/myhyk"
import Myfuwu from "../components/mimitouyongfeng/myfuwu"
import ElmeAPP from "../components/mimitouyongfeng/elmeAPP"
import Zhxx from "../components/mimitouyongfeng/ZHXX"
import XGYHm from "../components/mimitouyongfeng/XGYHM"
import Xzdz from "../components/mimitouyongfeng/XZDZ"
import BJdz from "../components/mimitouyongfeng/BJDZ"
import YUe from "../components/mimitouyongfeng/YUE"
import Hongbao from "../components/mimitouyongfeng/hongbao"
import Dhhb from "../components/mimitouyongfeng/DHHB"
import Hbsm from "../components/mimitouyongfeng/Hbsm"
import Ntext from "../components/mimitouyongfeng/Ntext"
import Five from "../components/mimitouyongfeng/fivemonny"
import Djj from "../components/mimitouyongfeng/DJJ"
import SJSM from "../components/mimitouyongfeng/shangjiashuoming"
import LSHB from "../components/mimitouyongfeng/LsHb"
import MYJF from "../components/mimitouyongfeng/MYjf"
export default new Router({
	routes: [{
			path: '/',
			name: 'chooseCity',
			component: chooseCity
		}, {
			path: '/qiecity',
			name: 'qiecity',
			component: qiecity,
			children: [{
				path: 'soudizhi',
				name: 'soudizhi',
				component: soudizhi
			}]
		},
		{
			path: '/loginzhuce',
			name: 'loginzhuce',
			component: loginzhuce
		},
		{
			path: '/findmima',
			name: 'findmima',
			component: findmima
		},
		{
			path: '/footers',
			name: 'footers',
			component: footers,
			redirect: '/footers/waimai',
			children: [{
					path: 'my',
					name: 'my',
					component: my
				},
				{
					path: 'sousuo',
					name: 'sousuo',
					component: sousuo
				},
				{
					path: 'waimai',
					name: 'waimai',
					component: waimai
				},
				{
					path: 'dingdan',
					name: 'dingdan',
					component: dingdan
				}
			]
		},
		{
			path: '/wm2shop',
			name: 'wm2shop',
			component: wm2shop,
			redirect: '/wm2shop/menus',
			children: [{
				path: 'menus',
				name: 'menus',
				component: menus
			}, {
				path: 'pingjia',
				name: 'pingjia',
				component: pingjia
			}]
		},
		{
			path: '/shopxq',
			name: 'shopxq',
			component: shopxq
		},
		{
			path: '/qyxq',
			name: 'qyxq',
			component: qyxq
		},
		{
			path: '/xqone',
			name: 'xqone',
			component: xqone,
			children: [{
					path: '/config1',
					name: 'config1',
					component: config1,
				},
				{
					path: '/config2',
					name: 'config2',
					component: config2
				},
				{
					path: '/config3',
					name: 'config3',
					component: config3
				},
			]
		},
		{
			path: '/ddxq',
			name: 'ddxq',
			component: ddxq
		},
		{
			path: "/mydd",
			name: "mydd",
			component: Mydd
		},
		{
			path: "/myjfsc",
			name: "myjfsc",
			component: Myjfsc
		},
		{
			path: "/myhyk",
			name: "myhyk",
			component: Myhyk
		},
		{
			path: "/myfuwu",
			name: "mywufu",
			component: Myfuwu
		},
		{
			path: "/elmeAPP",
			name: "elmeAPP",
			component: ElmeAPP
		},
		{
			path: "/ZHXX",
			name: "ZHXX",
			component: Zhxx
		},
		{
			path: "/XGYHM",
			name: "XGYHM",
			component: XGYHm
		},
		{
			path: "/XZDZ",
			name: "Xzdz",
			component: Xzdz
		},
		{
			path: "/BJDZ",
			name: "Bjdz",
			component: BJdz
		},
		{
			path: "/YUE",
			name: "YUe",
			component: YUe
		},
		{
			path: "/hongbao",
			name: "hongbao",
			component: Hongbao
		},
		{
			path: "/DHHB",
			name: "DHhB",
			component: Dhhb
		},
		{
			path: "/Hbsm",
			name: "Hbsm",
			component: Hbsm
		},
		{
			path: "/Ntext",
			name: "NTExt",
			component: Ntext
		},
		{
			path: "/fivemonny",
			name: "fivemonny",
			component: Five
		},
		{
			path: "/Djj",
			name: "djj",
			component: Djj
		},
		{
			path: "/shangjiashuoming",
			name: "shangjiashuoming",
			component: SJSM
		},
		{
			path: "/LsHb",
			name: "LSHB",
			component: LSHB
		},
		{
			path: "/MYjf",
			name: "MYJF",
			component: MYJF
		}
	]
})