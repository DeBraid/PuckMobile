//  sort the array, 
//  return the top or bottom 10
// {
//      arr -> the data
//      metric -> which stat
//      dir -> desc if truthy
// }
import _ from 'lodash';

const topTen = (arr, metric, dir) => {
    // console.log('arr for topTen',arr);
    let res = _.sortBy(arr, metric);
    let bottom = res.splice(0,10);
    let top = res.reverse().splice(0,10);
    // console.log('topTen top', top);
    if (!dir) { return top }
    // console.log('topTen bottom', bottom);
    return bottom;
}

export default topTen;