export const updateStateObject = (oldState, object) => {
  return {
    ...oldState,
    ...object
  }
}
