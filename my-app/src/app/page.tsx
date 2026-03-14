'use client';

import { useEffect, useState } from 'react';
import { buscarTarefas } from '@/services/tarefas';
import ListaTarefas from './component/ListaTarefas';
import NovaTarefa from './component/NovaTarefa';
import { Tarefa } from '@/types/tarefas';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

export default function Page() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    buscarTarefas().then(setTarefas);
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const total = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Lista de tarefas</h1>

      <p>Total de tarefas: {total}</p>

      <NovaTarefa adicionar={adicionarTarefa} />

      <ListaTarefas tarefas={tarefas} />
    </main>
  );
}
