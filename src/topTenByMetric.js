//  topTenByMetric
//  returns an OBJECT with 3 arrays: 
  // { all, top, bottom }
// 
import topTen from './topTen.js';

const topTenByMetric = (arr, metric)=>{
  return {
    top: topTen(arr, metric),
    bottom: topTen(arr, metric, 1),
    all: arr
  }
}

export default topTenByMetric;