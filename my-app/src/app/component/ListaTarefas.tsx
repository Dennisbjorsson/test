import { Tarefa } from '@/types/tarefas';

type Props = {
  tarefas: Tarefa[];
};

export default function ListaTarefa({ tarefas }: Props) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>{tarefa.titulo}</li>
      ))}
    </ul>
  );
}
