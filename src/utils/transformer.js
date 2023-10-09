export function objectToArrayOfArrays(inputObject) {
  const arrayOfArrays = [];

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const objectProperties = Object.values(inputObject[key]);
      arrayOfArrays.push(objectProperties);
    }
  }

  return arrayOfArrays;
}
