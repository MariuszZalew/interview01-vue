import { createStore } from 'vuex';
import axios from 'axios';
type baseObj = {
  line: myLine
  stop: string
  order: number
  time: string
}
type myLine = "100" | "101" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" 


type lineAcc = {
  [K in myLine]?: baseObj | [];
};

type orderAcc<T extends number> = {
  [key in T]?: baseObj | []
};

type RootState = {
  rawData: baseObj[]
  linesData: lineAcc
  byOrderData: orderAcc<number>
  byTimeData: baseObj[]
  selectedLine?: myLine
}
export default createStore<RootState>({
  state: {
    rawData: [],
    linesData:{},
    byOrderData: {},
    byTimeData: [],
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
    getSelectedLine: (state) => state.selectedLine
  },
});
