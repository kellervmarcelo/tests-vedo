const { sum } = require("./calculator");

//tu pode passar a flag watchAll pra ele ficar observando todas as modificações
//nos testes

//it ou test
it("should sum 2 and 2 and the result must be 4", () => {
  //tu precisa fazer uma assertion - a chamada do teu método fornece o que tais esperando

  //pra testar se não é um falso positivo tu pode usar o .not. pra garantir que ele tá funcionando
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one of them is a string and must be 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should throw an error if what is provided to the method is not summable", () => {
  expect(() => {
    sum("", "2");
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({})
  }).toThrowError()

  expect(() => {
    sum()
  }).toThrowError()
});
