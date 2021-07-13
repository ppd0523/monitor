import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

let data = []
function enque(array, element){
    if(array.length >= 20) array.shift();
    array.push(element);
}

const app = express();

app.use(cors());
app.use(bodyParser.text({type:"*/*"}));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/data", (req, res)=>{
    const obj = {"data": data}
    // console.log(obj);
    res.send(obj);
})

app.post("/api/data", (req, res)=>{
    const text = req.body || "";
    enque(data, text);
    res.status(200).send();
});

app.listen(52222, ()=>{
    console.log(`[${new Date()}] server running`);
})
