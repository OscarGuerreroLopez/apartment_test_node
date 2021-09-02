export type FieldType =
  | "string"
  | "number"
  | "alphanumeric"
  | "object"
  | "email";
export type InputType = string | number | IObjectLiteral;

export const ValidateFields = (
  typeOfField: FieldType,
  input: InputType,
  length = 100
): boolean => {
  if (typeOfField === "string") {
    const convertedInput = input as string;

    if (convertedInput.length > length) {
      return false;
    }

    const re = /^[a-zA-Z]+$/;

    if (!re.test(convertedInput.replace(/\s/g, ""))) {
      return false;
    }
  }

  if (typeOfField === "email") {
    const convertedInput = input as string;

    if (convertedInput.length > length) {
      return false;
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(convertedInput)) {
      return false;
    }
  }

  if (typeOfField === "number" && typeof input !== "number") {
    return false;
  }

  return true;
};
