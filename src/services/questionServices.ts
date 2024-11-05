import { appinitialized } from '..';

const findAll = async () => {
  const count = 5;
  const collectionRef = appinitialized
    .firestore()
    .collection('frequently_ask_questions');
  const snapshot = await collectionRef.get();

  const documentIds = snapshot.docs.map((doc) => doc.id);

  const randomIds = [];
  while (randomIds.length < count && documentIds.length > 0) {
    const randomIndex = Math.floor(Math.random() * documentIds.length);
    randomIds.push(documentIds[randomIndex]);
    documentIds.splice(randomIndex, 1);
  }

  const randomDocuments = await Promise.all(
    randomIds.map((id) => collectionRef.doc(id).get())
  );

  const res = randomDocuments.map((doc) => ({ id: doc.id, ...doc.data() }));
  return res;
};
const findAllCount = async () => {
  const res: any = await appinitialized
    .firestore()
    .collection('frequently_ask_question')
    .count()
    .get();
  return res;
};
export default { findAll, findAllCount };
