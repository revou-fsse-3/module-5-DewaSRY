import { describe, expect, it } from "vitest";

import {
  getCleanForward,
  getStringCamelCaseHaveSpaces,
  getStringCamelChaseToLabel,
  getUpperChaseStringAfterSpace,
  stringComparator,
} from "@utils/StringOperations";

describe("testing String Operations ", () => {
  it.each([
    {
      stringOne: "abc",
      stringTwo: "abc",
      output: true,
    },
    {
      stringOne: "abc",
      stringTwo: "ABC",
      output: true,
    },
    {
      stringOne: "abc",
      stringTwo: "ABCD",
      output: false,
    },
  ])(
    "testing Comparator $stringOne with $stringTwo expect $output ",
    ({ output, stringOne, stringTwo }) => {
      expect(stringComparator(stringOne, stringTwo)).toBe(output);
    }
  );
  it.each([
    {
      stringOne: "abc abc",
      stringTwo: "Abc Abc",
    },
  ])(
    "testing make  $stringOne to be capitalize $stringTwo  ",
    ({ stringOne, stringTwo }) => {
      expect(getUpperChaseStringAfterSpace(stringOne)).toBe(stringTwo);
    }
  );
  it.each([
    {
      stringOne: "abcAbc",
      stringTwo: "Abc Abc",
    },
  ])(
    "testing make  $stringOne to be capitalize $stringTwo  ",
    ({ stringOne, stringTwo }) => {
      expect(getStringCamelChaseToLabel(stringOne)).toBe(stringTwo);
    }
  );
  it.each([
    {
      stringOne: "abcAbc",
      stringTwo: "abc abc",
    },
  ])(
    "testing make  $stringOne to be have space expected $stringTwo  ",
    ({ stringOne, stringTwo }) => {
      expect(getStringCamelCaseHaveSpaces(stringOne)).toBe(stringTwo);
    }
  );
  it.each([
    {
      stringOne: "abc/Abc",
      stringTwo: "abc-Abc",
    },
  ])(
    "testing make forward to be dash  $stringOne expected $stringTwo  ",
    ({ stringOne, stringTwo }) => {
      expect(getCleanForward(stringOne)).toBe(stringTwo);
    }
  );
});
