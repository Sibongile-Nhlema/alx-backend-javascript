const createInt8TypedArray = (length, position, value) => {
  // returns a new ArrayBuffer with an Int8 value at a specific position.
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);

  return view;
};

export default createInt8TypedArray;
