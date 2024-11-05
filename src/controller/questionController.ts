import questionServices from '../services/questionServices';

export const getFrequentlyAskedQuestions = async (req: any, res: any) => {
  try {
    const countSnapshot = await questionServices.findAllCount();

    const userCount = countSnapshot.data().count;
    const data = await questionServices.findAll();
    const response = {
      status: 'success',
      count: userCount,
      data: data,
      statusCode: 200,
    };

    res.status(200).send(response);
  } catch (error: any) {
    console.error('Error getting user data: ', error);
    res.status(500).send({
      status: 'error',
      message: error.message,
      statusCode: 500,
    });
  }
};
