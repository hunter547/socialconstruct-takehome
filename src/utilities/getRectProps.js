export function getRectProps(coordinates) {
  const xyRanges = getRanges(coordinates)
  const startingPoints = {x: Math.min(xyRanges.x1, xyRanges.x2), y: Math.min(xyRanges.y1, xyRanges.y2)};
  const dimensions = {width: Math.abs(xyRanges.x1 - xyRanges.x2), height: Math.abs(xyRanges.y1 - xyRanges.y2)}
  console.log({...startingPoints, ...dimensions});
  return {...startingPoints, ...dimensions};
}

function getRanges(coordinates) {
  console.log(coordinates);
  let rangePoints = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }
  coordinates.forEach((coordinate, index) => {
    if (index === 0) {
      rangePoints.x1 = Math.abs(coordinate[0]);
      rangePoints.y1 = Math.abs(coordinate[1]);
    }
    if (Math.abs(rangePoints.x1 - Math.abs(coordinate[0])) > 0.1) {
      rangePoints.x2 = Math.abs(coordinate[0]);
    }
    if (Math.abs(rangePoints.y1 - Math.abs(coordinate[1])) > 0.1) {
      rangePoints.y2 = Math.abs(coordinate[1]);
    }
  });
  console.log(rangePoints)
  return rangePoints
}