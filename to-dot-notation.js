function toDotNotation(obj) {
  if (typeof obj !== 'object') return obj;

  const stack = Object.entries(obj).map(([key, value]) => ({ key, value, path: [] }));
  const objectWithDotNotation = {};

  while (stack.length) {
    const { key, value, path } = stack.pop();
    const currentPath = [...path, key];

    if (typeof value !== 'object') {
      objectWithDotNotation[currentPath.join('.')] = value;
      continue;
    }

    stack.push(...Object.entries(value).map(([key, value]) => ({ key, value, path: currentPath })));
  }

  return objectWithDotNotation;
}

module.exports = {
  toDotNotation
}