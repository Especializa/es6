import Message from './model/message.model';

const generator = () => {
  const messages = [];
  for (let x = 0; x < 50; x += 1) {
    messages.push(
      new Message(`Message ${x + 1}`,
                  Date.now() - parseInt(Math.random() * 2000000, 10),
      ),
    );
  }
  return messages;
};

export default generator;
export const stringifyGenerator = () => JSON.stringify(generator());
