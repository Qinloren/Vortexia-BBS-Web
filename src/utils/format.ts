/**
 * 格式化数字，如果大于1000则返回k，否则返回原数字
 * @param num 数字
 * @returns 格式化后的数字
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(1);
    return formatted.endsWith('.0') ?
      `${parseInt(formatted)}k` :
      `${formatted}k`;
  }
  return num.toString();
}

/**
 * 格式化时间戳
 * @param timestamp 时间戳
 * @returns 格式化后的时间戳
 */
export const formatTimestamp = (timestamp: number): string => {
  const msTimestamp = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;
  const date = new Date(msTimestamp);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
