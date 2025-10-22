import { env } from '@/env'
import axios from 'axios'

export const milenniumAPI = axios.create({
  baseURL: env.MILENNIUM_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'WTS-licencetype': 'api',
    Authorization: `Basic ${Buffer.from(`${env.MILLENIUM_USER}:${env.MILLENIUM_AUTH}`).toString('base64')}`,
  },
  params: { $format: 'json' },
})
