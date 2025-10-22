export interface MilenniumSessionResponseType {
  'odata.count': number
  value: Array<{
    sessionkey: string
    wsid: string
    userName: string
    creation_time: string
    active: boolean
    source: unknown
    licenceinfo: string
  }>
}
