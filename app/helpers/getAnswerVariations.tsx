export function getAnswerVariations(fighter) {
  let split = fighter.split(' ');
  split.push(fighter);
  let acceptableAnswers = split.map((answer) => answer.toLowerCase());
  return acceptableAnswers;
}
