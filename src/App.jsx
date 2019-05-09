import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import songsDb from './db/songs';
import NavBar from './components/NavBar';
import SongsTable from './components/SongsTable';

const tableFields = [
  {
    title: 'Song', name: 'name', href: 'url', id: 0,
  },
  {
    title: 'Artist', name: 'artistName', id: 1,
  },
  {
    title: 'Album', name: 'albumName', id: 2,
  },
];

class App extends React.Component {
  state = {
    songs: [],
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

  render = () => {
    const { songs, sort } = this.state;

    return (
      <div>
        <NavBar />
        <Container className="mt-5">
          <SongsTable songs={songs} tableFields={tableFields} sortBy={this.sortBy} sort={sort} />
        </Container>
      </div>
    );
  }
}

export default App;
