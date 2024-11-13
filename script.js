// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // TODO: Create a variable for the character set based on selected options

  let characterPool = "";
  if (options.includeUppercase) characterPool += uppercase;
  if (options.includeLowercase) characterPool += lowercase;
  if (options.includeNumbers) characterPool += numbers;
  if (options.includeSpecialChars) characterPool += specialChars;

  if (characterPool === "") {
    throw new Error("At least one character type must be selected.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characterPool.charAt(
      Math.floor(Math.random() * characterPool.length)
    );
  }

  return password;
};