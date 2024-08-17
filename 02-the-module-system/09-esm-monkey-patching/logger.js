export const logger = {
  info(message) {
    console.log(`[INFO]\t${message}`)
  },
  error(message) {
    console.log(`[ERROR]\t${message}`)
  },
  warn(message) {
    console.log(`[WARN]\t${message}`)
  },
  debug(message) {
    console.log(`[DEBUG]\t${message}`)
  },
}
