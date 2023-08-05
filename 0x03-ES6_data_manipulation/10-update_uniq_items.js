export default function updateUniqueItems(items) {
  if (typeof items !== typeof new Map()) {
    throw new Error('Cannot process');
  }
  const mapiter = items.keys();
  for (let i = 0; i < items.size; i += 1) {
    const keyi = mapiter.next().value;
    if (items.get(keyi) === 1) {
      items.set(keyi, 100);
    }
  }

  return items;
}
