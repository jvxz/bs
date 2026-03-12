export default defineEventHandler(async () => {
  const number = Math.random()

  if (number < 0.5) {
    throw createError({
      message: 'Number is less than 0.5',
      status: 422,
    })
  }

  return `Your number was ${number.toFixed(2)}`
})
