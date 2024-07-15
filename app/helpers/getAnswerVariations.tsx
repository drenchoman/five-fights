export function getAnswerVariations(fighter: string) {
  let split = fighter.split(' ');
  split.push(fighter);
  let acceptableAnswers = split.map((answer) => answer.toLowerCase());
  return acceptableAnswers;
}
