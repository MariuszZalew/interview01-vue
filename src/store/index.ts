import { createStore } from 'vuex';
import axios from 'axios';
import type { baseObj, myLine, lineAcc, orderAcc, rootState } from '../types/type'

// enum MutationTypes {
//   INC_ME = "INC_MEEEE",
//   INC_MEA = "INC_MEEEEEEEE",
//   SET_RAW_DATA = "setRawData"
// }

// type MutationOne<S = state> = {
//   [MutationTypes.SET_RAW_DATA](state: S, payload: baseObj[]): void
// }

// type state = {
//   rawData: baseObj[]
//   linesData: lineAcc
//   byOrderData: orderAcc<number>
//   byTimeData: baseObj[]
//   stopsData: string[]
// }

export default createStore<rootState>({
  state: {
    rawData: [],
    linesData:{},
    byOrderData: {},
    byTimeData: [],
    stopsData: []
  },
  mutations: {
    setRawData(state, rawData) {
      state.rawData = rawData;
    },
    setLinesData(state, linesData) {
      state.linesData = linesData
    },
    setSortByOrder(state, byOrderData) {
      state.byOrderData = byOrderData
    },
    setSortByTime(state, byTimeData) {
      state.byTimeData = byTimeData
    },
    clearTimeData(state, clearObj) {
      state.byTimeData = clearObj
    },
    setSelectedLine(state, line) {
      state.selectedLine = line
    },
    setStopsData(state, stops) {
      state.stopsData = stops
    }
  },
  actions: {
    async fetchRawData({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/stops');
        
        commit('setRawData', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    clearTimeData({commit}) {
      commit('clearTimeData')
    },

    async convertToArrStops({ state, commit }) {
      const stopsData = await state.rawData.reduce((acc:string[], curr: baseObj) => {

           acc.push(curr.stop);
          return Array.from(new Set(acc));
        }, []
      )
      commit('setStopsData', stopsData)
    },
    async convertToObjLines({ state, commit }) {
      const linesData = await state.rawData.reduce((acc:lineAcc, curr: baseObj) => {
          const nameValue: myLine = curr.line;

          if (!acc[nameValue]) {
              acc[nameValue] = [];
          }
          (acc[nameValue] as baseObj[]).push(curr)

          return acc;
        }, {}
      )
      commit('setLinesData', linesData)
    },

    convertToSortByOrder({state, commit}, payload: myLine) {
      if (state.linesData[payload]) {
        const sol: lineAcc = (state.linesData[payload] as baseObj[]).reduce((acc: orderAcc<number> , curr: baseObj) => {
          const nameValue = curr.order

          if (!acc[nameValue]) {
              acc[nameValue] = [];
          } 
            (acc[nameValue] as baseObj[]).push(curr);
          return acc;

        },{})
      commit('setSortByOrder', sol)
      }
    },
    sortByTime({commit}, payload) {

      commit('setSortByTime', payload)
    },

    setSelectedLine({commit}, payload) {
      commit('setSelectedLine', payload)
    }
  },
  getters: {
    getRawData: (state) => state.rawData,
    getLinesData: (state) => state.linesData,
    getByOrderData: (state) => state.byOrderData,
    getByTimeData: (state) => state.byTimeData,
    getSelectedLine: (state) => state.selectedLine,
    getStopsData: (state) => state.stopsData
  },
});
