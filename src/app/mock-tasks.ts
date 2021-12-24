import { Task } from './Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'RDV chez le docteur',
    day: '5 Mai à 14:30',
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting à l'école",
    day: '6 Mai à 13:30',
    reminder: true,
  },
  {
    id: 3,
    text: 'Faire les courses',
    day: '7 Mai à 12:30',
    reminder: false,
  },
];
