export default function cleanSet(set, startString) {
  let answer = '';
  if (startString === '') {
    return answer;
  }
  // search set for the startString and only add the characters after that
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      answer += `${value.slice(startString.length)}-`;
    }
  });

  // Remove the trailing hyphen only if it exists
  answer = answer.slice(0, -1);

  return answer;
}
