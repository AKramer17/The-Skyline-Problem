/*
  @param {number[][]} buildings
  @return {number[][]}
 */

 // You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.




 // DEF: Set ~= an array with no repeated elements
var getSkyline = function(buildings) {
    if (buildings.length == 0) return [];
};

let lrHeightList = []; // Array for the left and right vertices of each building and the building height

for (let building of buildings) {  // DEF: of 
    let [left, right, height] = building;  // 3 necessary values we need to know
    lrHeightList.push([left, 0 - height]);
    lrHeightList.push([right, height]);
}
// sort method sorts an array alphabetically
lrHeightList.sort