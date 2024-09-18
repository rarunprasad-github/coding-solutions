var findMinArrowShots = function(points) {

  if (points.length === 0) return 0

  points.sort(function(a,b) {
    return a[1] - b[1];
  });

  let arrows = 1;
  let nextEnd = points[0][1];

  for ( i = 0 ; i < points.length; i++) {
    const currentStart = points[i][0];
    const currentEnd = points[i][1];

    if (currentStart > nextEnd) {
      arrows++;
      nextEnd = currentEnd;
    }
  }

  return arrows;
};

module.exports = findMinArrowShots