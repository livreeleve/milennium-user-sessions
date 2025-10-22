import { MilenniumSessionServices } from '@/services/milennium-session-services'
import { MilenniumSessionResponseType } from '@/types/milennium-session-response'

interface GetMilenniumSessionUseCaseResponse {
  data: MilenniumSessionResponseType | null
}

export class GetMilenniumSessionUseCase {
  constructor(private milenniumService: MilenniumSessionServices) {}

  async execute(): Promise<GetMilenniumSessionUseCaseResponse> {
    const response = await this.milenniumService.getSessions()

    return {
      data: response,
    }
  }
}
