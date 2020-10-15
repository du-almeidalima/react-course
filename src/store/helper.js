/**
 * Update the state in a reducer.
 * @param oldState {Object}
 * @param updatedObject {Object}
 */
export const updateStateObject = (oldState, updatedObject) => {
  return {
    ...oldState,
    ...updatedObject
  }
};
