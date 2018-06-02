import React from 'react';
import PropTypes from 'prop-types';

const Childs = props => <div>{props.data.name}</div>;

Childs.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Childs;
