import { getAnswerFor as getAnswer } from 'riddle-exam';
import { RiddleAnswer } from './RiddleService';

export const getAnswerFor = async (riddleId: string): Promise<RiddleAnswer> => {
    const response = await getAnswer(riddleId);

    return response;
};
