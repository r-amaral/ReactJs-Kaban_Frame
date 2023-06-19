import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../Utils/enums';
import { TaskModel } from '../Utils/models';

function useTaskCollection() {
    return useLocalStorage<{
        [key in ColumnType]: TaskModel[];
    }>('tasks', {
        'A fazer': [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Task 1',
                color: 'blue.300',
            },
        ],
        'Em progresso': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Task 2',
                color: 'yellow.300',
            },
        ],
        Bloquados: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Task 3',
                color: 'red.300',
            },
        ],
        Concluídos: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Task 4',
                color: 'green.300',
            },
        ],
    });
}

export default useTaskCollection;
