import {Response} from 'express';

// try catch error response
export const catchError = async (
    message: string,
    data: null,
    error: string,
    res: Response
) => {
  res.status(400).send({
    message: message,
    status: 400,
    data: data,
    error: error,
  });
};

export const success = async (
    message: string,
    data: any,
    res: Response,
    rest?: any
) => {
  res.status(200).send({
    message: message,
    status: 200,
    data: data,
    ...rest,
  });
};
