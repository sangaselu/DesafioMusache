import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Link, Grid } from '@mui/material';
import API from '../services/api';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    try {
      const response = await API.get('/resources');
      setResources(response.data);
    } catch (error) {
      console.error('Error al obtener los recursos:', error);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>Lista de Recursos</Typography>
      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(0.97)',
                  boxShadow: 6,
                },
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={resource.imageUrl}
                alt={resource.title}
                sx={{
                  height: 200, // Altura fija para todas las imágenes
                  objectFit: 'cover', // Llena el espacio del Card
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
                {resource.youtubeUrl && (
                  <Link href={resource.youtubeUrl} target="_blank" rel="noopener" sx={{ mt: 2, display: 'block' }}>
                    Ver Video
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceList;
