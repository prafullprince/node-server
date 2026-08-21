import express from "express";

const app = express();
const port = 4000;

app.get("/health", ()=>{
    console.log("ok");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
