export default function cleanSet(Aset, startString) {
  const toJoin = Array.from(Aset).filter((x) => x.startsWith(startString));
  const trim = toJoin.map((y) => y.slice(startString.length, y.length));
  return trim.join('-');
}
