import React, { useState } from 'react';

function Formulario1(props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    props.onChange('nombre', event.target.value);
  }

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
    props.onChange('apellido', event.target.value);
  }

  return (
    <form>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={handleApellidoChange} />
      </label>
    </form>
  );
}

function Formulario2(props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  }

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  }

  return (
    <form>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={handleApellidoChange} />
      </label>
      <br />
      <label>
        Nombre completo:
        <input type="text" value={`${nombre} ${apellido}`} readOnly/>
      </label>
    </form>
  );
}

function Lamar() {
  const [datos, setDatos] = useState({});

  const handleDatosChange = (campo, valor) => {
    setDatos({ ...datos, [campo]: valor });
  }

  return (
    <div>
      <h1>Formulario 1</h1>
      <Formulario1 onChange={handleDatosChange} />
      <h1>Formulario 2</h1>
      <Formulario2 nombre={datos.nombre} apellido={datos.apellido} />
    </div>
  );
}

export default Lamar