export type Riddle = {
    id: string;
    contents: string;
    answers: RiddleAnswer[];
};

export type RiddleAnswer = {
    id: string;
    text: string;
};

export function getFirstAnswer(riddle: Riddle): { id: string; text: string } {
    return riddle.answers[0];
}
