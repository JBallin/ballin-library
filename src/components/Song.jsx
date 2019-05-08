import React from 'react';
import PropTypes from 'prop-types';

const Song = ({
  song: {
    attributes: {
      name, artistName, albumName, url,
    },
  },
}) => (
  <tr>
    <td><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></td>
    <td>{artistName}</td>
    <td>{albumName}</td>
  </tr>
);

Song.propTypes = {
  song: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default Song;
