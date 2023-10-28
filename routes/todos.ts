import {Router} from 'express'
const router = Router()
import * as controller from '../controllers/todocontroller'

router
.route('/')
.get(controller.fetchAllTodos)

router
.route('/todo')
.get(controller.fetchAllTodos)
.post(controller.addTodo)
.patch(controller.updateTodo)
.delete(controller.deleteTodo)

export default router