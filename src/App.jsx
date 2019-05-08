import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import songs from './db/songs';
import NavBar from './components/NavBar';
import SongsTable from './components/SongsTable';

const App = () => (
  <div>
    <NavBar />
    <Container className="mt-5">
      <SongsTable songs={songs} />
    </Container>
  </div>
);

export default App;
