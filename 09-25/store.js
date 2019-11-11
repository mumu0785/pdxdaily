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
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 测试数据 */
const date = 'Mon Oct 17 2016 00:00:00 GMT+0800 (中国标准时间)'
const ruleForm = {
}
const state = {
    isSession: false,
    dataChange:false,
    chainInfo:{
    	editInfo:"",
    	renewInfo:"",
    	nodesInfo:[],
    	contractInfo:"",
    	appInfo:""
    },
    contractInfo:"",
    //提现参数传递
    txInfo:"",
}

const mutations = {
    setRuleForm(state, payload) {
    }
}

export default  new Vuex.Store({
    state,
    mutations
})
