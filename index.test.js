function begin() {
  return "begin";
  crearPatron();
}
const crearPatron = () => true;
describe("Given a function crearPatron", () => {
  describe("When it receives 'true'", () => {
    test("Then it should return 'true'", () => {
      // const text = "begin";
      const expectedText = true;
      const resultText = crearPatron();
      expect(resultText).toBe(expectedText);
    });
  });
});

console.log(begin());