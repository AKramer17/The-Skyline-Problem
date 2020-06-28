/*
  @param {number[][]} buildings
  @return {number[][]}
 */

 // You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.




 // DEF: Set ~= an array with no repeated elements
var getSkyline = function(buildings) {
    if (buildings.length == 0) return [];


let lrhList = []; // Array for the left and right vertices of each building and the building height

for (let building of buildings) {
    let [left, right, height] = building;  // 3 necessary values we need to know
    lrhList.push([left, 0 - height]);
    lrhList.push([right, height]);
}
// DEF: sort == method that sorts an array alphabetically
// If result is negative, a is sorted before b. If positive, b is sorted before a. If result is 0, no change to order.

lrhList.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

let result = [];
let currentHeights = [0];
let previousMaxHeight = 0;

for (let i = 0; i < lrhList.length; i++) {
    let [xpos, height] = lrhList[i];
    if (height < 0) {
        currentHeights.push(0 - height);
    } else {
        let removeIndex = currentHeights.indexOf(height);
        currentHeights.splice(removeIndex, 1);
    }
    let currentMaxHeight = Math.max(...currentHeights);
    if (currentMaxHeight != previousMaxHeight) result.push([xpos, currentMaxHeight])
    previousMaxHeight = currentMaxHeight;
}
return result;
};