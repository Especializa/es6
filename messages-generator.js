console.log('[');
for (let x = 0; x < 50; x += 1) {
  console.log(
  `  {
    "text": "Message ${x + 1}",
    "created": ${Date.now() - parseInt(Math.random() * 20000, 10)}` +
  '\n  },');
}
console.log(']');
