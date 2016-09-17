//  converts strings to integers
//  returns new formatted array
// {
//      resp -> Object with data arr, and meta data
// }

const convertStrToInt = (resp) => {
    let {data} = resp;
    let formattedArr = [];
    data.map((item)=>{
      let keys = Object.keys(item);
      keys.map((key)=>{
        if (key == 'Player_Name' || key == 'name') {return}
        item[key] = Number(item[key]);
      })
      formattedArr.push(item);
    });
    // console.log('formattedArr',formattedArr);
    return formattedArr;
}

export default convertStrToInt;