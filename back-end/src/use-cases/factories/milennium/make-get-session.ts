import { MilenniumService } from '@/services/milennium-service/milennium-session-service'
import { GetMilenniumSessionUseCase } from '@/use-cases/get-session-use-case'

export function makeGetSession() {
  const milenniumService = new MilenniumService()
  const getMilenniumSessionUseCase = new GetMilenniumSessionUseCase(
    milenniumService,
  )

  return getMilenniumSessionUseCase
}
