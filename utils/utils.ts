export const shortenString = (str: string, maxLength: number, maxWords: number) => {
  const words = str.split(" ");
  const shortenedWords = words.slice(0, maxWords);
  const shortenedString = shortenedWords.join(" ");
  if (str.length > maxLength) {
    return shortenedString + "...";
  }
  return shortenedString;
};
