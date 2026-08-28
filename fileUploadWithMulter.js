import express from 'express';
const app = express();

app.get("/", (req, resp) => {
    resp.send(`
        <form action="/upload" method="post" enctype="multipart/info-data/">
            <input type="file" name="myFile" />
            <button> Upload file </button>
        </form>
    `)
})

app.post("/upload", (req,resp) => {
    resp.send({
        message: "File Uploaded",
        info: null
    })
})

app.listen(3200)