import server from '../../lib/server'
import User from '../../models/model'

export default async function handler(req, res) {
  const { method } = req

  await server()

  switch (method) {

    case 'POST':
      try {
        console.log(req.body.email)
        const filter = { email: req.body.email };

        const update = { todos: req.body.todos, deleted: req.body.deleted, completed: req.body.completed }
        const users = await User.findOneAndUpdate(filter, update, { new: true });
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