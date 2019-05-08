import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

import Song from './Song';

const SongsTable = ({ songs }) => (
  <Table>
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Album</th>
      </tr>
    </thead>
    <tbody>
      { songs.map(song => <Song song={song} key={song.id} />) }
    </tbody>
  </Table>
);

SongsTable.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SongsTable;
