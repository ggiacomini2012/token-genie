const randomCharacter = () => {
  const letterLower = Math.trunc(Math.random() * 20).toString(36);
  const letterUpper = Math.trunc(Math.random() * 20).toString(36).toUpperCase();
  const number = Math.floor(Math.random() * 10);
  const letter = number > 4 ? letterLower : letterUpper;
  return letter;
};

const tokenGenerator = (param) => [...Array(param).keys()].reduce((acc, elements) => {
  acc[elements] = randomCharacter();
  return acc;
}, []).join``.toString();

module.exports = tokenGenerator;