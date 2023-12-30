import { createStore } from 'vuex';
import axios from 'axios';
import type { baseObj, myLine, lineAcc, orderAcc, rootState } from '../types/type'

// export enum MutationTypes {
//   SET_RAW_DATA = "SET_RAW_DATA",
//   SET_LINES_DATA = "SET_LINES_DATA",
//   SET_SORT_BY_ORDER = "SET_SORT_BY_ORDER",
//   SET_SORT_BY_TIME = "SET_SORT_BY_TIME",
//   CLEAR_TIME_DATA = "CLEAR_TIME_DATA",
//   SET_SELECTED_LINE = "SET_SELECTED_LINE",
//   SET_STOPS_DATA = "SET_STOPS_DATA"
// }

export enum ActionTypes {
  FETCH_RAW_DATA = "FETCH_RAW_DATA",
  CLEAR_TIME_DATA = "CLEAR_TIME_DATA",
  CONVERT_TO_ARR_STOPS = "CONVERT_TO_ARR_STOPS",
  CONVERT_TO_OBJ_LINES = "CONVERT_TO_OBJ_LINES",
  CONVERT_TO_SORT_BY_ORDER = "CONVERT_TO_SORT_BY_ORDER",
  SORT_BY_TIME = "SORT_BY_TIME",
  SET_SELECTED_LINE = "SET_SELECTED_LINE"
}

// export enum GetterTypes {
//   GET_RAW_DATA = "GET_RAW_DATA",
//   GET_LINES_DATA = "getLinesData",
//   GET_BY_ORDER_DATA = "getByOrderData",
//   GET_BY_TIME_DATA = "getByTimeData",
//   GET_SELECTED_LINE = "getSelectedLine",
//   GET_STOPS_DATA = "getStopsData"
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
    setRawData(state, payload) {
      state.rawData = payload;
    },
    setLinesData(state, payload) {
      state.linesData = payload
    },
    setSortByOrder(state, payload) {
      state.byOrderData = payload
    },
    setSortByTime(state, payload) {
      state.byTimeData = payload
    },
    clearTimeData(state, payload) {
      state.byTimeData = payload
    },
    setSelectedLine(state, payload) {
      state.selectedLine = payload
    },
    setStopsData(state, payload) {
      state.stopsData = payload
    }
  },
  actions: {
    // async fetchRawData({ commit }) {
    async [ActionTypes.FETCH_RAW_DATA]({ commit }) {
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

    convertToArrStops({ state, commit }) {
      const stopsData = state.rawData.reduce((acc:string[], curr: baseObj) => {

           acc.push(curr.stop);
          return Array.from(new Set(acc));
        }, []
      )
      commit('setStopsData', stopsData)
    },
     convertToObjLines({ state, commit }) {
      const linesData = state.rawData.reduce((acc:lineAcc, curr: baseObj) => {
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
