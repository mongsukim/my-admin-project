import dayjs from 'dayjs'

export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format)
}

export const formatNumber = (num: number) => {
  return num.toLocaleString('ko-KR')
}

export const formatCurrency = (num: number) => {
  return `${num.toLocaleString('ko-KR')}원`
}
