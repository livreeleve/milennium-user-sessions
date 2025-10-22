import { MilenniumSessionServices } from '@/services/milennium-session-services'

interface CancelMilenniumSessionUseCaseRequest {
  sessionkey: string
}

export class CancelmilenniumSessionUseCase {
  constructor(private milenniumService: MilenniumSessionServices) {}

  async execute({ sessionkey }: CancelMilenniumSessionUseCaseRequest) {
    await this.milenniumService.cancelSession(sessionkey)
  }
}
