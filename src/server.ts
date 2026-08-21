import express, { type Request, type Response } from "express";

const app = express();
const port = 4000;

app.get("/health", (req: Request, res: Response)=>{
    console.log("health");
    return res.send("ok");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
