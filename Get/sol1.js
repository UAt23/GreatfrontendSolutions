/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
   const leafs = pathParam.split('.');
   if (Object.keys(objectParam).length && leafs.length > 0) {
      let result = { ...objectParam };
      let count = 0;
      leafs.forEach((leaf) => {
         if (result[leaf]) {
            count++;
            result = result[leaf];
         }
      })
      if (count < leafs.length) {
         return defaultValue
      }
      return result
   } else {
      return defaultValue;
   }
}

/* 
   3 failed test cases on submission
      - count was not incremented correctly since leaf has 0 value 
      and if statement inside the loop take that as falsy.
      - if input is array it can't split operation gives error.
      - if the selected leaf's value is undefined or null logic crushes.

*/