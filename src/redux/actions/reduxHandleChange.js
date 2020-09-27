export const type = 'TEXT';

const reduxHandleChange = payload => {
  return {
    type,
    payload
  };
}

export default reduxHandleChange;
