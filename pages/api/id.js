import server from '../../lib/server'
import User from '../../models/model'

export default async function handler (req, res) {
  const { method } = req

  await server()

  switch (method) {
    
    case 'GET':
      try {
        const filter = {email: req.query.email};
        console.log(req.query)

        const users = await User.findOne(filter);
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }  
      case 'PUT':
        try {
            const filter = {email: req.query.email};
            console.log(req.body)
    
          const update = {deleted: req.query.deleted, completed: req.query.completed}
          const users = await User.findOneAndUpdate(filter, update, {new: true});
          res.status(200).json({ success: true, data: users })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
    default:
      res.status(400).json({ success: false })
      break
  }
}