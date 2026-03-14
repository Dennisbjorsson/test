import { Tarefa } from '@/types/tarefas';

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  return tarefas.length;
}
