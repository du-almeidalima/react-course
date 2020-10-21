export const updateStateObject = (oldState, object) => {
  return {
    ...oldState,
    ...object
  }
}

export const checkValidity = (value, rules) => {
  let isValid = true;

  // No Rules
  if (rules === undefined) {
    return isValid
  }

  // Is Required
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  // Exact Length
  if (rules.length) {
    isValid = value.length === rules.length && isValid;
  }

  // Min Length
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  return isValid;
}