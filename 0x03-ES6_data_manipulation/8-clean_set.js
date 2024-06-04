export default function cleanSet(set, startString) {
  // check if startstring is empty or not a string
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  let answer = '';

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      answer += `${value.slice(startString.length)}-`;
    }
  });

  // Remove the trailing hyphen only if it exists
  if (answer.endsWith('-')) {
    answer = answer.slice(0, -1);
  }

  return answer;
}
