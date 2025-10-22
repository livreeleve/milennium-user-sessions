import { MilenniumService } from '@/services/milennium-service/milennium-session-service'
import { CancelmilenniumSessionUseCase } from '@/use-cases/cancel-session-use-case'

export function makeCancelSession() {
  const milenniumService = new MilenniumService()
  const cancelSessionUseCase = new CancelmilenniumSessionUseCase(
    milenniumService,
  )

  return cancelSessionUseCase
}
