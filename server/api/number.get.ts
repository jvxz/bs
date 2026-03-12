export default defineEventHandler(async (event) => {
  const logger = useLogger(event)

  const number = Math.random()

  logger.set({
    number,
  })

  if (number < 0.5) {
    throw createError({
      message: 'You got unlucky...',
      status: 422,
    })
  }

  return `You got lucky!`
})
