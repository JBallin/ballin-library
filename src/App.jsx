import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import songsDb from './db/songs';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SongsTable from './components/SongsTable';

library.add(faCaretDown, faCaretUp);

const tableFields = [
  {
    id: 0, title: 'Song', name: 'name', href: 'url', width: 30,
  },
  {
    id: 1, title: 'Artist', name: 'artistName', width: 28,
  },
  {
    id: 2, title: 'Album', name: 'albumName', width: 42,
  },
];

class App extends React.Component {
  state = {
    songs: [],
    filtered: null,
    sort: { field: null, asc: null },
  };

  componentDidMount() {
    this.setState({ songs: songsDb });
    this.sortBy('name');
  }

  sortBy = (field) => {
    this.setState(({ songs: prevSongs, sort: { field: prevField, asc: prevAsc } }) => {
      const asc = field !== prevField || !prevAsc;
      const getFieldVal = song => song.attributes[field].toLowerCase();
      function compare(a, b) {
        const fieldA = getFieldVal(a).toLowerCase();
        const fieldB = getFieldVal(b).toLowerCase();
        if (fieldA < fieldB) {
          return asc ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return asc ? 1 : -1;
        }
        return 0;
      }
      return {
        songs: prevSongs.sort(compare),
        sort: { field, asc },
      };
    });
  }

  filter = (query) => {
    this.setState(({ songs }) => {
      if (!query) {
        return { filtered: null };
      }
      return {
        filtered: songs.filter(({ attributes }) => (
          query.toLowerCase().split(' ').every(word => (
            tableFields.some(({ name }) => (
              (attributes[name].toLowerCase().includes(word))
            ))
          )))),
      };
    });
  }

  render = () => {
    const { songs, filtered, sort } = this.state;

    return (
      <div>
        <NavBar />
        <Container className="mt-5">
          <Container className="w-50 mb-5">
            <SearchBar
              placeholder="Search"
              onChange={this.filter}
            />
          </Container>
          <SongsTable
            songs={filtered || songs}
            tableFields={tableFields}
            sortBy={this.sortBy}
            sort={sort}
          />
        </Container>
      </div>
    );
  }
}

export default App;
