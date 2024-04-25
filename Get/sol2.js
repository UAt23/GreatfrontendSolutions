/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
   let leafs
   if (pathParam.length > 1 && typeof pathParam === "string") leafs = pathParam.split('.');
   else leafs = pathParam;
   if (Object.keys(objectParam).length && leafs.length > 0) {
      let result = { ...objectParam };
      let count = 0;
      leafs.length > 1
         ? leafs.forEach((leaf) => {
            if (result && Object.keys(result).includes(leaf)) {
               [count, result] = find(count, result, leaf);
            }
         })
         : [count, result] = find(count, result, leafs);
      if (count < leafs.length || result === undefined) {
         return defaultValue
      }
      return result
   } else {
      return defaultValue;
   }

   function find(count, result, leaf) {
      count++;
      result = result[leaf];
      return [count, result]
   }
}