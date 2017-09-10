// Calculate velocity using change in distance and time
const calculateVelocity = changeInDist => changeInTime => changeInDist/changeInTime;

const transformLines = (linesObj, line, i, original) => {

  if (i === 0) return linesObj; // Don't add headers to resulting object

  const headers = original[0].split(' '); // Get array of header strings

  const lineArray = line.split(' '); // Convert line from string to array

  // Convert array to object. Returns for example: return { ...accumulatorObj, Distance(cm): 15 }
  const lineObj = lineArray.reduce((obj, cur, i) => ({...obj, [headers[i]]: Number(cur)}), {});

  // If data has time in seconds and distance in meters. Otherwise calculate from ms and cm.
  const timeInS = lineObj['Time(s)'] || lineObj['Time(ms)']/1000;
  const distInM = lineObj['Distance(m)'] || lineObj['Distance(cm)']/100;

  const prev = linesObj[i-1]; // Get previous line for calculating change in time and distance
  // Calculates velocity if there are previous values to calculate changes in time and distance. Otherwise returns 0.
  const velocity = i === 1  ? 0 : calculateVelocity(distInM-prev['Distance(m)'])(timeInS-prev['Time(s)']);

  const values = { // Compose line object for return
    '#': i,
    ...lineObj,
    'Time(s)': timeInS,
    'Distance(m)': distInM,
    'Velocity(m/s)': velocity
  }
  // Adds composed line object to accumulator
  // For example: return { ...lines before current, 15: { Time(ms): 78, Dis..... }}
  return {...linesObj, [i]: values }
}

export const processFile = (file) => {
  // Get rid of invisible characters and create array of lines
  const lines = file.replace(/\r/g, "").split('\n');
  // Return array transformed to object with calculations
  return lines.reduce(transformLines, {});
}
