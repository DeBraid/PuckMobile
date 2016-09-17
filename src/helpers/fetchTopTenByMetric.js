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
      return {
        top: topTen(resp.data, metric),
        bottom: topTen(resp.data, metric, 1),
        all: resp.data
      }
    })
    .catch(function (err) {
        console.log('fetch failed...', err);
    });
}

export default fetchTopTenByMetric;