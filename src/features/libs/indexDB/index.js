import Localbase from "../localbase";

const LOCALBASE_NAME = "pokemon",
  COLLECTIONS_POKEMON = "pokemon-collections";

let db = new Localbase(LOCALBASE_NAME);
db.config.debug = false;
async function addDocument(key, data) {
  await db.collection(COLLECTIONS_POKEMON).add(data, key);
}
async function getDocument(key) {
  try {
    let result = await db.collection(COLLECTIONS_POKEMON).doc(key).get();
    if (!result) return null;
    return result;
  } catch (error) {
    throw Error(error);
  }
}
export { addDocument, getDocument };
