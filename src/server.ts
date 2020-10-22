import axios from 'axios';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
app.use(cors);
app.use(express.json());

app.get('/auth', async (request, response) => {
  const url = 'https://api.instagram.com/oauth/authorize';
  const appId = process.env.INSTAGRAM_APP_ID;
  const redirectURI = process.env.INSTAGRAM_APP_REDIRECT_URI;

  const fastToken = await axios.get(`${url}?client_id=${appId}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=code`);

  console.log(fastToken);
  return response.json({ message: 'Default' });
});

app.get('/auth', async (request, response) => {
  console.log(request);
  return response.json({ message: 'Auth' });
});

app.listen(process.env.PORT || 3333);
