// thousands separator for population number
export const numberFormat = (number = 0) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// extract name of language and add comma after each except last one
export const extractLanguagesNames = (data = []) => {
  const array = [];
  for (const element of data) {
    array.push(element.name);
  }
  const value = array.join(', ');
  return value;
};
