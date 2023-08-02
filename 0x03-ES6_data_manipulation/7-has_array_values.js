export default function hasValuesFromArray(Aset, array) {
  const NewArray = array.filter((x) => Aset.has(x));
  return NewArray.length === array.length;
}
