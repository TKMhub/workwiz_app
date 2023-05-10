// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'http://your-django-api-url-here/upload/';

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(API_URL, req.body, config);
      res.status(200).send(response.data);
    } catch (error) {
      res.status(500).send({ message: 'エラーが発生しました' });
    }
  } else {
    res.status(405).send({ message: '許可されていないメソッドです' });
  }
};
