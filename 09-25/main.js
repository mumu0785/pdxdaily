/*************************************************************************
 * Copyright (C) 2016-2019 The PDX Blockchain Hypercloud Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *************************************************************************/
import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './routes/index';
import store from './store.js';
import './store/filter';
import VueI18n from 'vue-i18n';
import langdata from "./assets/data/langdata";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import base from './store/base.js';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import "./assets/css/eleStyle.css";
Vue.use(VueI18n)
Vue.use(VueResource)
Vue.use(base)
Vue.use(vuescroll)
Vue.prototype.$walleatUser = {};
Vue.http.options.emulateJSON = true;
var messages = langdata;
var i18n = new VueI18n({
  locale: 'zh',
  messages:messages
})
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
new Vue({
	i18n,
	router,
	store,
	el: "#app",
	render: h => h(App)
})
