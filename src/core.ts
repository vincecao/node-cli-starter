import { getDatabase } from "firebase-admin/database";
import { Cat } from "./type";

export async function getCat(): Promise<Cat[]> {
  const result = await getDatabase()
    .ref("cats")
    .once("value")
    .then((snapshot) => {
      const val = snapshot.val();
      const cats: Cat[] = Object.keys(val).map((key) => val[key]);
      return cats;
    });
  return result;
}

export async function createCat(cat: Cat): Promise<void> {
  await getDatabase().ref("cats").push(cat);
}

export async function updateCat(cat: Cat): Promise<void> {
  await getDatabase()
    .ref("cats")
    .orderByChild("name")
    .equalTo(cat.name)
    .once("value")
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.ref.set(cat);
      });
    });
}

export async function removeCat(name: string): Promise<void> {
  await getDatabase()
    .ref("cats")
    .orderByChild("name")
    .equalTo(name)
    .once("value")
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.ref.remove();
      });
    });
}
