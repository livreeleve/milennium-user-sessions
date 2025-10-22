import { MilenniumSessionResponseType } from '@/types/milennium-session-response'

export interface MilenniumSessionServices {
  getSessions(): Promise<MilenniumSessionResponseType | null>
  cancelSession(sessionkey: string): Promise<void>
}
