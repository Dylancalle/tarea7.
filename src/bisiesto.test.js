import EsAñoBisiesto from "./Esbisiesto.js";

describe("Año bisiesto", () => {
  it("deberia debolver false si es negativo)", () => {
    expect(EsAñoBisiesto(-100)).toEqual(false);
  });
});
