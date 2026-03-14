'use client';

import { useState, ChangeEvent } from 'react';

type Props = {
  adicionar: (titulo: string) => void;
};

export default function NovaTarefa({ adicionar }: Props) {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titulo) return;

    adicionar(titulo);
    setTitulo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titulo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitulo(e.target.value)
        }
        placeholder="Digite a tarefa"
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
