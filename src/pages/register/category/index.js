import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  // criar array de valores que serão add (instância)
  function setValue(key, value) {
    // chave: nome, descrição etc
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handler(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([...categories, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          label="Nome: "
          name="name"
          onChange={handler}
          type="text"
          value={values.name}
        />

        <FormField
          as="textarea"
          label="Descrição: "
          name="description"
          onChange={handler}
          type="textarea"
          value={values.description}
        />

        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handler}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default RegisterCategory;
