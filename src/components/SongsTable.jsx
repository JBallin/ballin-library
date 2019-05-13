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

  handleMouseUp = (e, key) => {
    const { sortBy } = this.props;
    e.currentTarget.className = '';
    sortBy(key);
  }

  render = () => {
    const { songs, tableFields, sort: { field, isAsc } } = this.props;
    return (
      <Table className="table-striped table-bordered">
        <thead>
          <tr>
            {
              tableFields.map(({
                title, key, id, width,
              }) => (
                <th
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={e => this.handleMouseUp(e, key)}
                  style={{ cursor: 'pointer', userSelect: 'none', width: `${width}%` }}
                  key={id}
                >
                  {title}
                  <FontAwesomeIcon hidden={field !== key} icon={`caret-${isAsc ? 'down' : 'up'}`} className="float-right mt-1" />
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
    isAsc: PropTypes.bool,
  }).isRequired,
  tableFields: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    href: PropTypes.string,
  })).isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default SongsTable;
