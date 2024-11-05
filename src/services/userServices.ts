import { appinitialized } from '..';

const findAll = async () => {
  let res: any = await appinitialized
    .firestore()
    .collection('users')
    .select('userId', 'email')
    .get();
  res = res.docs.map((doc: any) => doc.data());

  return res;
};
const findAllCount = async () => {
  const res: any = await appinitialized
    .firestore()
    .collection('users')
    .count()
    .get();
  return res;
};
export default { findAll, findAllCount };
