// Adapt our editable content files to the existing page components' query API.
export function recordsCollection(rows, fieldNames, collection) {
  const items = rows.map((row, index) => {
    const data = {};
    for (const [label, value] of Object.entries(row)) {
      const key = fieldNames[label] || label;
      data[key] = value === null ? null : { type: collection.schema[key].type, value };
    }
    return { pointer: String(index), data };
  });
  collection.scanItems = async () => items;
  collection.resolveItems = async pointers => pointers.map(pointer => items[Number(pointer)]);
  collection.compareItems = (left, right) => Number(left.pointer) - Number(right.pointer);
  return collection;
}
