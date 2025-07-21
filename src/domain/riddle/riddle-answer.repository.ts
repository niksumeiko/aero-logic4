import { useQuery } from '@tanstack/react-query';
import { getAnswerFor } from './riddle-answer.adapter';

export const useRiddleAnswerRepository = (riddleId: string | undefined) => {
    return useQuery({
        queryKey: ['riddle-answer', riddleId],
        queryFn: () => getAnswerFor(riddleId!),
        enabled: !!riddleId,
    });
};
