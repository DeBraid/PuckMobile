//  fetchTopTenByMetric
//  returns a PROMISE that must be resolved with: 
  // PROMISE.then((resp)=>{
  //   this.setState({
  //     dataForRendering: resp
  //   })
  // })
// 
import fetch from 'isomorphic-fetch';
import errorHandler from './throwOrJSON.js';
import topTen from './topTen.js';
require('es6-promise').polyfill();

const fetchTopTenByMetric = (uri, metric)=>{
  return fetch(uri)
    .then(errorHandler)
    .then((resp)=>{
      return topTen(resp.data, metric)
    })
    .catch(function (err) {
        console.log('fetch failed...', err);
    });
}

export default fetchTopTenByMetric;