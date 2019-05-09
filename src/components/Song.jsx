import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ song: { attributes }, tableFields }) => (
  <tr>
    {
      tableFields.map(({ name, href, id }) => {
        const data = attributes[name];
        return (
          <td key={id}>
            { href
              ? <a href={attributes[href]} target="_blank" rel="noopener noreferrer">{data}</a>
              : data
            }
          </td>
        );
      })
    }
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
  tableFields: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};


export default Song;
