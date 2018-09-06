import PropTypes from "prop-types";

const CardPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  pair_id: PropTypes.number.isRequired,
  front: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  played: PropTypes.bool.isRequired
});

export default CardPropType;
