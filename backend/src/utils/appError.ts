export class AppError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;
    
    constructor(message: string, stausCode:number) {
        super(message)

        this.statusCode=stausCode
        this.status=`${stausCode}`.startsWith("4") ? "fail":"error"
        this.isOperational=true
        
        Error.captureStackTrace(this,this.constructor)
    }
}