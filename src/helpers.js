export const renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
};

const millisecondsToHuman = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);

  const humanized = [pad(minutes.toString(), 2), pad(seconds.toString(), 2)]
    .filter(a => a)
    .join(":");

  return humanized;
};

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
};
