const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
  0: 'Unknow'
}

export default function monthTransform (date) {
  const dateSeparate = date.split('-')
  const month = Number(dateSeparate[1])
  const newMonth = months[month].substring(0, 3) ?? months[0]

  return `${newMonth} ${dateSeparate[2]}`
}
