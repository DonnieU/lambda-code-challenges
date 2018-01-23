// Write a function findOverlap to find the rectangular intersection of two given rectangles.
// All values are positive and non-zero. They are defined as objects like this:  

// const rectangle1 = {
//   leftX: 1,
//   bottomY: 5,
//   width: 10,
//   height: 4,
// };

// Your function should return an object in this format as well. In the case they don't overlap,
// all values in the object returned should be null.  
function overlap(p1, l1, p2, l2) {
  const highPoint = Math.max(p1, p2);
  const lowPoint = Math.min(p1 + l1, p2 + l2);

  if (highPoint >= lowPoint) return { startPoint: null, overlapLength: null };

  const overlapLength = lowPoint - highPoint;
  return { startPoint: highPoint, overlapLength: overlapLength };
}

function findOverlap(rect1, rect2) {
  res = {
    leftX: null,
    bottomY: null,
    width: null,
    height: null,
  };

  // if ((rect1.leftX + rect1.width) < rect2.leftX) return res;

  // res.leftX = rect2.leftX;
  // if (rect1.bottomY > rect2.bottomY) res.bottomY = rect1.bottomY;
  // else res.bottomY = rect2.bottomY;

  // if ((rect1.leftX + rect1.width) > (rect2.leftX + rect2.width)) res.width = rect2.leftX + rect2.width;
  // else res.width = rect1.leftX + rect1.width;
  const xOverlap = overlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = overlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
  if (xOverlap.overlapLength === null || yOverlap.overlapLength === null) return res;
  res.leftX = xOverlap.startPoint;
  res.bottomY = yOverlap.startPoint;
  res.width = xOverlap.overlapLength;
  res.height = yOverlap.overlapLength;

  return res;
}

const rectangle1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
};

const rectangle2 = {
  leftX: 6,
  bottomY: 4,
  width: 5,
  height: 8,
};

console.log(findOverlap(rectangle1, rectangle2));