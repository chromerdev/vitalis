import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/Whatsapp';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const handleEnviar = () => {
    if (nome === '' || email === '' || mensagem === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Por favor, preencha todos os campos.',
      });
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'E-mail inválido',
        text: 'Por favor, digite um e-mail válido.',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Enviado!',
      text: 'Mensagem enviada com sucesso!',
      confirmButtonColor: '#d32f2f',
    });

    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Contato
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: '#666', textAlign: 'center', maxWidth: '600px' }}>
        Entre em contato conosco. Preencha o formulário abaixo ou use nossos canais de atendimento.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          width: '100%',
          maxWidth: '1050px',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Outros canais de atendimento
          </Typography>

          <Box
            component="a"
            href="https://wa.me/5569993739439"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: '#d32f2f' },
            }}
          >
            <WhatsAppIcon sx={{ color: '#d32f2f' }} />
            <Typography>(69) 99373-9439</Typography>
          </Box>

          <Box 
            component="a"
            href="mailto:contato@movifit.com"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: '#d32f2f' },
            }}>
            <EmailIcon sx={{ color: '#d32f2f' }} />
            <Typography>contato@movifit.com</Typography>
          </Box>

          <Box 
            component="a"
            href="https://www.instagram.com/movifit.oficial/"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: '#d32f2f' },
            }}>
            <InstagramIcon sx={{ color: '#d32f2f' }} />
            <Typography>@movifit.oficial</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <LocationOnIcon sx={{ color: '#d32f2f' }} />
            <Typography>Av. Sete de Setembro, 1200 — Porto Velho/RO</Typography>
          </Box>
        </Paper>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: 3 }}>
      <TextField
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
      />
      <TextField
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
      />
      <TextField
        label="Mensagem"
        variant="outlined"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        multiline
        rows={4}
        sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
      />
      <Button
          variant="contained"
          onClick={handleEnviar}
          sx={{
            width: '100%',
            py: 1.5,
            backgroundColor: '#d32f2f',
            '&:hover': { backgroundColor: '#b01919' },
          }}
        >
          Enviar
        </Button>

      </Paper>
      
        </Box>
    </Box>
  );
}

export default Contato;