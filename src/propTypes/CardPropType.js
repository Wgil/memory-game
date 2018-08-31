import PropTypes from 'prop-types';

const CardPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  sibling_id: PropTypes.number.isRequired,
  front: PropTypes.string.isRequired
});

export default CardPropType;