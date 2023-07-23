import express from "express"

const userRouter = express.Router()
// middleware роута "/users"
userRouter.use((request, response, next) => {
  console.log(" - User handler  ", Date.now())
  next()
})

userRouter.post("/login", (request, response) => {
  response.send("login")
})

userRouter.post("/register", (request, response) => {
  response.send("register")
})

export default userRouter
