module.exports.square = async (event) => {
  const input = parseFloat(event.body);
  const result = input * input;

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
};
