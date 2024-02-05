

export const CreateDate = (date) => {

   const t = date ? date : new Date()
  const addLoadingZero = (d) => { return ((d < 10) ? `0${d}` : `${d}`) }
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  //const addMonthText = (d) => {return ((d <10) ? `0${d}` : `${d}`)} 
  const monthText = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
 
    let Y = t.getFullYear()
    //let M = addLoadingZero(t.getMonth() + 1)
    let mt = monthText[t.getMonth()]
    let D = addLoadingZero(t.getDate())
    let d = days[t.getDay()]
    let h = addLoadingZero(t.getHours())
    let m = addLoadingZero(t.getMinutes())

    return (
        {
            D,
            Y, 
            mt,
            h,
            m, 
            d
        }
    )
}

