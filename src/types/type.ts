
export type baseObj = {
  line: myLine
  stop: string
  order: number
  time: string
}
export type myLine = "100" | "101" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" 


export type lineAcc = {
  [T in myLine]?: baseObj | [];
};

export type orderAcc<T extends number> = {
  [key in T]?: baseObj | []
};

export type rootState = {
  rawData: baseObj[]
  linesData: lineAcc
  byOrderData: orderAcc<number>
  byTimeData: baseObj[]
  selectedLine?: myLine
  stopsData: string[]
}