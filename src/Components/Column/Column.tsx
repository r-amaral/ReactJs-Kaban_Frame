import useColumnDrop from "../../Hooks/useColumnDrop";
import useColumnTasks from "../../Hooks/useColumnTasks";
import { ColumnType } from "../../Utils/enums";
import { BoardCard } from "../BoardCard";
import { Box, Heading } from "@chakra-ui/react";
import * as S from "./styles";

export const Column: React.FC<{ column: ColumnType }> = ({ column }) => {
    const { tasks, deleteTask, dropTaskFrom, swapTasks, updateTask } =
        useColumnTasks(column);

    const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

    const ColumnTasks = tasks.map((task, index) => (
        <BoardCard
            key={task.id}
            task={task}
            index={index}
            onDropHover={swapTasks}
            onUpdate={updateTask}
            onDelete={deleteTask}
        />
    ));

    return (
        <Box>
            <Heading fontSize="md" mb={4} letterSpacing="wide">
                <Box px={2} py={1} color={"#FFFFFF"}>
                    {column}
                </Box>
            </Heading>
            <S.StyledStack
                ref={dropRef}
                direction={{ base: "row", md: "column" }}
                h={{ base: 300, md: 600 }}
                p={4}
                mt={2}
                spacing={4}
                rounded="lg"
                boxShadow="md"
                overflow="auto"
                opacity={isOver ? 0.85 : 1}
            >
                {ColumnTasks}
            </S.StyledStack>
        </Box>
    );
};

export default Column;
