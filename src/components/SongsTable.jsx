import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Song from './Song';

const SongsTable = ({ songs, tableFields }) => (
  <Table>
    <thead>
      <tr>
        {
          tableFields.map(({ title, name, id }) => (
            <th>
              {title}
              {field === name ? <FontAwesomeIcon icon={`caret-${asc ? 'down' : 'up'}`} className="float-right mt-1" /> : null}
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        songs.map(song => (
          <Song song={song} key={song.id} tableFields={tableFields} />
        ))
      }
    </tbody>
  </Table>
);

SongsTable.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  tableFields: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
  })).isRequired,
};

export default SongsTable;
