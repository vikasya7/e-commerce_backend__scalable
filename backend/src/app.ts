import express, { type Request, type Response } from "express"
import cors from "cors"
import { FRONTEND_URL } from "./config/env.config.js"
import cookieParser from "cookie-parser"
import { success } from "zod"
import { golbalErrorHandler } from "./middlewares/error.middleware.js"
export const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:FRONTEND_URL,
    credentials:true
}),
)
app.use(cookieParser())


app.get("/health-check",(req:Request,res:Response)=>{
     res.status(200).json({
        success:true,
        message:"api is working fine"
     })
})

app.use(golbalErrorHandler)

