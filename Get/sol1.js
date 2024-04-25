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