import { useQuery } from '@tanstack/react-query';
import { useRiddleAnswer } from './RiddleAnswerProvider';

export const useRiddleAnswerRepository = (riddleId: string | undefined) => {
    const getAnswerFor = useRiddleAnswer();

    return useQuery({
        queryKey: ['riddle-answer', riddleId],
        queryFn: () => getAnswerFor(riddleId!),
        enabled: !!riddleId,
    });
};
