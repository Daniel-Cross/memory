import React from 'react';
import '../styles/tile.css';
import PropTypes from 'prop-types';

const Tile = (props) => {
	let style = {};
	if (props.showing) {
		style.backgroundColor = props.backgroundColor;
	}

	return <div className="Tile" style={style} onClick={props.onClick} />;
};

Tile.propTypes = {
	showing: PropTypes.bool.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Tile;
