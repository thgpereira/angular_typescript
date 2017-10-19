import * as jwt from 'jsonwebtoken'

import { Request, Response } from 'express'
import { User, users } from './users'

export const handleAuthentication = (req: Request, res: Response) => {
  const user = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    const payload = { sub: dbUser.email, iss: 'meat-api' }
    const token = jwt.sign(payload, 'meat-api-password')
    res.json({ name: dbUser.name, email: dbUser.email, accessToken: token })
  } else {
    res.status(403).json({ message: 'Dados inválidos!' })
  }
}

function isValid(user: User): boolean {
  if (!user) {
    return false
  }
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.matches(user)
}