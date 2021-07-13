// import * as d3 from "d3";

const URL = "http://158.247.205.129:80";
let height = 500;
let margin = {
    top: 30,
    left: 15,
    right: 15,
    bottom: 15,
}

let title = d3.select("body").insert("h1").text("Sample chart")
let svg = d3.select("body")
.append("svg")
.attr("width", "100%")
.attr("height", "500px")
.style("border", "1px solid black")

let yScaler = d3.scaleBand().domain(d3.range(20)).range([0+margin.top, height-margin.bottom])


function init(){
    fetch(URL+"/api/data")
    .then((res)=>(res.json()))
    .then((data)=>{
        let texts = svg.selectAll("text").data(data['data'])
        texts
        .join("text")
        .attr("x", margin.left)
        .attr("y", (d,i)=>yScaler(i))
        .text(d=>d)

    })
    .catch((err)=>{

    })
}
init()

setInterval(getData, 1000)
function getData(){
    fetch(URL+"/api/data")
    .then((res)=>(res.json()))
    .then((data)=>{
        svg.selectAll("text")
        .data(data['data'])
        .join("text")
        .attr("y", (d,i)=>yScaler(i))
        .text(d=>d)
    })
}
