import Message from './model/message.model';

export default () => {
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
