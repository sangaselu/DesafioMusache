import React, { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import ResourceForm from './components/ResourceForm';
import ResourceList from './components/ResourceList';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleResourceAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <ResourceForm onResourceAdded={handleResourceAdded} />
        <ResourceList key={refresh} />
      </Container>
    </>
  );
};

export default App;
