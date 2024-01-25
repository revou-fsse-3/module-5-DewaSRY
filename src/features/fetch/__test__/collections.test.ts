import { describe, it, expect, vi, beforeAll } from "vitest";
const mocks = vi.hoisted(() => {
  return {
    getCookiesMock: vi.fn(),
  };
});
vi.mock("@libs/cookies", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@libs/cookies")>();
  return {
    ...mod,
    getCookies: mocks.getCookiesMock,
  };
});

import createCollections from "@fetch/collections/collection-create";
import delCollections from "@fetch/collections/collection-del";
import getCollections from "@fetch/collections/collection-get-one";
import getALlCollections from "@fetch/collections/collection-get-all";
import updateCollections from "@fetch/collections/collection-update";

import useLogIn from "@fetch/user/user-login";
describe.skip("fetch collection api end pint", () => {
  let CATEGORY_ID: string;
  beforeAll(async () => {
    const { data } = await useLogIn({
      email: "hallo@email.com",
      password: "123456789",
    });
    mocks.getCookiesMock.mockReturnValue(data.token);
  });
  const CATEGORY_FIRST_STATUS = true,
    CATEGORY_FIRST_NAME = "testing create",
    CATEGORY_SECOND_STATUS = false,
    CATEGORY_SECOND_NAME = "testing update";

  it("testing crete Collections", async () => {
    const actual = await createCollections({
      name: CATEGORY_FIRST_NAME,
    });
    CATEGORY_ID = actual.data.id;
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(actual.data.name).toEqual(CATEGORY_FIRST_NAME);
    expect(actual.data.is_active).toEqual(CATEGORY_FIRST_STATUS);
    // expect(actual).toMatchInlineSnapshot(`
    //   {
    //     "data": {
    //       "created_at": "2024-01-25T05:54:25.172Z",
    //       "id": "e01c57f7-a0b3-4704-9ce4-57aa14a9d401",
    //       "is_active": true,
    //       "name": "testing create",
    //       "updated_at": "2024-01-25T05:54:25.172Z",
    //     },
    //   }
    // `);
  });

  it("testing get category by the id", async () => {
    const actual = await getCollections(CATEGORY_ID);
    expect(mocks.getCookiesMock).toHaveBeenCalled();

    expect(actual.data.name).toEqual(CATEGORY_FIRST_NAME);
    expect(actual.data.is_active).toEqual(CATEGORY_FIRST_STATUS);
  });
  it("testing get all category with new category there", async () => {
    const actual = await getALlCollections();

    const findNewCategory = actual.data.find((d) => d.id === CATEGORY_ID);
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(findNewCategory).toBeTruthy();
    expect(findNewCategory?.name).toEqual(CATEGORY_FIRST_NAME);
    expect(findNewCategory?.is_active).toEqual(CATEGORY_FIRST_STATUS);
  });

  it("testing update category with new name and new status", async () => {
    const actual = await updateCollections({
      id: CATEGORY_ID,
      is_active: CATEGORY_SECOND_STATUS,
      name: CATEGORY_SECOND_NAME,
    });
    expect(mocks.getCookiesMock).toHaveBeenCalled();

    expect(actual).toBeTruthy();
  });
  it("testing get category by the id  after get update ", async () => {
    const actual = await getCollections(CATEGORY_ID);
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(actual.data.name).toEqual(CATEGORY_SECOND_NAME);
    expect(actual.data.is_active).toEqual(CATEGORY_SECOND_STATUS);
  });
  it("testing delete category by the id ", async () => {
    const actual = await delCollections(CATEGORY_ID);
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(actual).toBeTruthy();
  });
});
