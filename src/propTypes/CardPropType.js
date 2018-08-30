const CardPropType = (props, propName, componentName) => {
  const { id, sibling_id, front } = props[propName];
  const validId = id && Number.isInteger(id);
  const validSiblingId = sibling_id && Number.isInteger(sibling_id);
  if (!validId || !validSiblingId || !front) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

export default CardPropType;