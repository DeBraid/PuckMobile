//  sort the array, 
//  return the top or bottom 10
// {
//      arr -> the data
//      metric -> which stat
//      dir -> desc if truthy
// }
import _ from 'lodash';

const topTen = (arr, metric, dir) => {
    let res = _.sortBy(arr, metric);
    let bottom = res.splice(0,10);
    let top = res.reverse().splice(0,10);
    if (!dir) { return top }
    return bottom;
}

export default topTen;