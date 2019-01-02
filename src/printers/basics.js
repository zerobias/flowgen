/* @flow */
const types = {
  VoidKeyword: "void",
  StringKeyword: "string",
  AnyKeyword: "any",
  NumberKeyword: "number",
  BooleanKeyword: "boolean",
  FalseKeyword: "false",
  TrueKeyword: "true",
  NullKeyword: "null",
  UndefinedKeyword: "void",
};

export const print = (kind: string): string => {
  return types[kind];
};
