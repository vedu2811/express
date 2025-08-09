import multer from "multer"

export const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})