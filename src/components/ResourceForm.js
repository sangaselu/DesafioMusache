import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import API from '../services/api';

const ResourceForm = ({ onResourceAdded }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    youtubeUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/resources', form);
      setForm({ title: '', description: '', imageUrl: '', youtubeUrl: '' });
      onResourceAdded();
    } catch (error) {
      console.error('Error al agregar recurso:', error);
    }
  };

  return (
    <>
      {/* Título sin fondo */}
      <Box sx={{ textAlign: 'center', py: 2, mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Fullstack Developer - Web Development and LMS Project
        </Typography>
      </Box>

      {/* Formulario */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Agregar Recurso</Typography>
        <TextField
          fullWidth
          label="Título"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Descripción"
          name="description"
          value={form.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="URL de la Imagen"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Enlace de YouTube (opcional)"
          name="youtubeUrl"
          value={form.youtubeUrl}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Agregar Recurso
        </Button>
      </Box>
    </>
  );
};

export default ResourceForm;
