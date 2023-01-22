// Speed limit 70km
// for each 5km over speed limit you get 1 point
// if you get 12 points your lisence get suspended

function checkSpeed(speed) {
  const SPEED_LIMIT = 70;
  const KM_PER_POINT = 5;
  if (speed < SPEED_LIMIT + KM_PER_POINT) return "Ok";

  let overLimitSpeed = speed - SPEED_LIMIT;
  let numberOfPoints = Math.floor(overLimitSpeed / KM_PER_POINT);

  return numberOfPoints >= 12
    ? "Your License Suspended!"
    : `${numberOfPoints} points`;
}

console.log(checkSpeed(130));

