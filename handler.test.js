const { square } = require("./handler");

test("Calculates the square correctly", async () => {
  const event = { body: "3" };
  const expectedResponse = { statusCode: 200, body: JSON.stringify({ result: 9 }) };

  const response = await square(event);

  expect(response).toEqual(expectedResponse);
});
