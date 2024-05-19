import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, TextField, Typography } from '@mui/material';
import "./Formulario.css";

const Formulario = () => {
  const { handleSubmit, handleChange, values, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().email("Email no valido").required("El email es obligatorio"),
      password: Yup.string().required("La contrasena es obligatoria")
    }),
    onSubmit: (data) => {
      console.log(data);
    }
  });

  return (
    <div>
      <Typography color="primary" variant="h3" align='center'>Formulario de Registro</Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid 
          container 
          alignContent="center" 
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField 
              autoComplete="off" 
              type="text" 
              label="Nombre" 
              variant="outlined"
              name="nombre"
              onChange={handleChange} 
              value={values.nombre}
              error={touched.nombre && Boolean(errors.nombre)}
              helperText={errors.nombre}
              fullWidth 
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField 
              autoComplete="off" 
              type="email" 
              label="Email" 
              variant="outlined"
              name="email"
              onChange={handleChange} 
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}
              fullWidth 
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField 
              autoComplete="off" 
              label="Password" 
              variant="outlined"
              name="password"
              onChange={(e) => setFieldValue("password", e.target.value)} // para los checkbox
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password}
              fullWidth 
            />
          </Grid>
        </Grid>
        <Button type="submit" variant='contained'>
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Formulario;
