export const getAnswerFor = async (riddleId: string) => {
    const response = await fetch(`http://localhost:3000/riddles/${riddleId}`);
    const data = await response.json();
    return data;
};
