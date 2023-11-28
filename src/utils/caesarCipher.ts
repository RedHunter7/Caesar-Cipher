const caesarCipher = (
    isEncryption: boolean, text: string, key: number
): string => {
  // Array of alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
  // convert string to array
  const textArray = text.split('')

  let c = 1;
  if (!isEncryption) {
    c = c * -1;
  }

  const result = [];
  for (let i = 0; i < textArray.length; i++) {
    let a: string | number = textArray[i];
    for (let j = 0; j < alphabet.length; j++) {
      if (textArray[i] === alphabet[j]) {
        const x = j + c * key;
        a = x % 26;
        while (a < 0) a = a + 26;
        a = alphabet[a];
        break;
      }
    }
    result.push(a);
  }

  return result.join('')
};

export { caesarCipher };
