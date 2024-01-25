/**
 *
 * @param str
 * @returns
 */
function getStringCamelCaseHaveSpaces(str: string) {
  const getUpperChase = str.match(/[A-Z]/g);
  if (getUpperChase === null) return str;
  const newString = str.replace(
    /[A-Z]/,
    " " + getUpperChase[0].toLocaleLowerCase()
  );
  return getStringCamelCaseHaveSpaces(newString);
}
function getUpperChaseStringAfterSpace(str: string): string {
  return str
    .split(" ")
    .map((s) => s[0].toLocaleUpperCase() + s.slice(1))
    .join(" ");
}
function getCleanForward(str: string): string {
  if (str.match(/\//)) {
    return getCleanForward(str.replace("/", "-"));
  }
  return str;
}

function getStringCamelChaseToLabel(str: string) {
  return getUpperChaseStringAfterSpace(getStringCamelCaseHaveSpaces(str));
}

function stringComparator(stringOne: string, stringTwo: string) {
  return (
    stringOne.toLocaleLowerCase().trim() ===
    stringTwo.toLocaleLowerCase().trim()
  );
}

export {
  getStringCamelCaseHaveSpaces,
  getStringCamelChaseToLabel,
  getUpperChaseStringAfterSpace,
  getCleanForward,
  stringComparator,
};
