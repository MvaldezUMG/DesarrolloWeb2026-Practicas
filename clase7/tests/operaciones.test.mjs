import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {sumar, dividir} from '../operaciones.mjs'

describe("función sumar", () => {
  it("suma dos números positivos", () => {
    assert.strictEqual(function sumar(a, b){
    return a + b;
}
(2, 3), 5);
  });

  it("suma negativos", () => {
    assert.strictEqual(sumar(-1, -1), -2);
  });

  it("suma con cero", () => {
    assert.strictEqual(sumar(0, 5), 5);
  });
});

describe("función dividir", () => {
  it("dividir 2 numeros", () => {
    assert.strictEqual(dividir(10,5), 2)
  });
  it("dividir entre 0", () => {
    assert.throws(()=>{
      dividir(40, 0)  
    });
  });
});