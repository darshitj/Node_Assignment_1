const http = require('http');
let fet = import('node-fetch')
const port = 8000;

//For  Console
async function fetchData()
{
    try
    {
        const res = await fetch('http://google.com/');
        const data = await res.text();
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

fetchData();

// For  Browser
const server = http.createServer(async (req,res) => {
    const res1 = await fetch('https://www.google.com/');
    const data = await res1.text();
    res.end(data);
})

server.listen(port,() => {
    console.log(`Port is running on ${port}`);
})
