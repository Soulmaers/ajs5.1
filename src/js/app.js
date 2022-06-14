export default function orderByProps(obj, array) {
  const arrayOne = [];
  const arrayTwo = [];

  for (const key in obj) {
    if (array.includes(key)) {
      arrayOne.push({ key, value: obj[key] });
    } else {
      arrayTwo.push({ key, value: obj[key] });
    }
  }

  arrayOne.sort((a, b) => array.indexOf(a.key) - array.indexOf(b.key));

  arrayTwo.sort((a, b) => (a.key > b.key ? 1 : -1));

  const arr = [...arrayOne, ...arrayTwo];
  return arr;
}
