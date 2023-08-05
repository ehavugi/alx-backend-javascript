export default function cleanSet(Aset, startString) {
  if (typeof startString !== typeof 'abc') {
    return '';
  }
  if (startString === ' ') {
    return '';
  }
  const stringsOnly = Array.from(Aset).filter((x) => typeof x === typeof '');
  const toJoin = Array.from(stringsOnly).filter((x) => (x.indexOf(startString) === 0));
  const trim = toJoin.map((y) => y.slice(startString.length, y.length));
  return trim.join('-');
}
