export default function asyncWrapper(fn) {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } 
      catch (error) {
        res.send({ message: 'An error occurred' })
      }
    }
  }