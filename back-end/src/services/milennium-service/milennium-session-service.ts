import { MilenniumSessionResponseType } from '@/types/milennium-session-response'
import { MilenniumSessionServices } from '../milennium-session-services'
import { milenniumAPI } from '@/lib/axios'

export class MilenniumService implements MilenniumSessionServices {
  async getSessions(): Promise<MilenniumSessionResponseType | null> {
    try {
      const { data } = await milenniumAPI.get<MilenniumSessionResponseType>(
        '/api/wtssystem/sessions/list',
      )

      return data
    } catch (err) {
      console.log(err)
      throw new Error('Error to get user session')
    }
  }

  async cancelSession(sessionkey: string): Promise<void> {
    try {
      await milenniumAPI.post(`/api/wtssystem/sessions/cancel`, undefined, {
        params: { sessionkey },
      })
    } catch (err) {
      console.log(err)

      throw new Error('Error to cancel session')
    }
  }
}
