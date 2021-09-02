import { ValidateFields } from "./validateFields";

describe("ValidateField", () => {
  it("should validate string has something", () => {
    const result = ValidateFields("string", "");

    expect(result).toBeFalsy();
  });

  it("should validate string is string", () => {
    const result = ValidateFields("string", "Hello123");

    expect(result).toBeFalsy();
  });

  it("should validate true if it is a string", () => {
    const result = ValidateFields("string", "Hello there");

    expect(result).toBeTruthy();
  });

  it("should validate email has something", () => {
    const result = ValidateFields("email", "");

    expect(result).toBeFalsy();
  });

  it("should validate email is email flase", () => {
    const result = ValidateFields("email", "oscar@oscar");

    expect(result).toBeFalsy();
  });

  it("should validate email is email true", () => {
    const result = ValidateFields("email", "oscar@oscar.com");

    expect(result).toBeTruthy();
  });

  it("should validate number is number true", () => {
    const result = ValidateFields("number", 123.45);

    expect(result).toBeTruthy();
  });

  it("should validate number is number false", () => {
    const result = ValidateFields("number", "123.45");

    expect(result).toBeFalsy();
  });
});
