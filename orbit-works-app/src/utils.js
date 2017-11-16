let count = 1;
const months = ['jan'];
export const getUUID = () => count++;

export const getDate = () => +(new Date());

export const formatDateForTasks = (date) => {
  // const d = new Date(date);
  // return `${d.getDate()} ${d.getMonth()}`;
  let monthArray = (new Date(date)).toString().split(' ');
  let month = monthArray[1];
  let date = monthArray[2];
  let st = ['1', '21', '31'];
  let nd = ['2', '22'];
  let rd = ['3', '23'];
  let sup;
  if (st.includes(date)) {
    sup = 'st';
  }
  else if (nd.includes(date)) {
    sup = 'nd';
  }
  else if (rd.includes(date)) {
    sup = 'rd';
  }
  else {
    sup = 'th';
  }
  let currentDate = { 'month': month, 'date': date, 'sup': sup };
  return currentDate;
};