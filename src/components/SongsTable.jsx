import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Song from './Song';

class SongsTable extends React.Component {
  handleMouseEnter = (e) => {
    if (e.target.nodeName === 'TH') {
      e.target.className = 'bg-light';
    }
  }

  handleMouseLeave = (e) => {
    if (e.target.nodeName === 'TH') {
      e.target.className = '';
    }
  }

  handleMouseDown = (e) => {
    e.currentTarget.className = 'bg-secondary';
  }

  handleMouseUp = (e, name) => {
    const { sortBy } = this.props;
    e.currentTarget.className = '';
    sortBy(name);
  }

  render = () => {
    const { songs, tableFields, sort: { field, asc } } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            {
              tableFields.map(({
                title, name, id, width,
              }) => (
                <th
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={e => this.handleMouseUp(e, name)}
                  style={
                    { cursor: 'pointer', userSelect: 'none', width: `${width}%` }
                  }
                  key={id}
                >
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
  }
}

SongsTable.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string,
    asc: PropTypes.bool,
  }).isRequired,
  tableFields: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    href: PropTypes.string,
  })).isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default SongsTable;
