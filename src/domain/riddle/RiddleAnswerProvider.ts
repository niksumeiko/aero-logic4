import { createGenericContext } from '../../common/context';
import { RiddleAnswer } from './RiddleService';

type Adapter = (riddleId: string) => Promise<RiddleAnswer>;

export const { useContext, createContextProvider: provideRiddleAnswer } =
    createGenericContext<Adapter>();

export function useRiddleAnswer() {
    return useContext().value;
}
