#!/usr/bin/env node
const express = require('express');
const app = express();

people = new Map();
const person = (name, email, friends, id) => {
  const fnln = name.split(' ');
  if (fnln.length != 2) {
    console.log('Accepts only first and last name');
    process.exit(-1);
  }
  let frnds = [];
  for (let friend of friends) {
    frnds.push(`/person/${friend}`);
  }
  return {first_name: fnln[0], last_name: fnln[1], email: email, friends: frnds, id: id}
}

let i=0;
people[i] = person('Carlton Joseph','carltonjoseph@gmail.com',[1,2,3,4], i);
people[++i] = person('Cheryl Joseph','cheryljoseph@gmail.com',[0,2,3,4], i);
people[++i] = person('Jeff Joseph','jeffreyjoseph@gmail.com',[0,1,3,4], i);
people[++i] = person('Joyce Joseph','joycejoseph@gmail.com',[0,1,2,4], i);
people[++i] = person('Cyril Joseph','cyriljoseph@gmail.com',[0,1,2,3], i);

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/person/:id', function (req, res) {
  console.log(`Received request for person ${req.params.id}`);
  res.setHeader('Content-Type', 'application/json');
  if (req.params.id in people) {
    const r = JSON.stringify(people[req.params.id]);
    const p = `{"data": {"person": ${r}}}`;
    //console.log(`${p}`);
    res.send(`${r}`);
  }
  else
    res.send(`{error: "Person not found"}`);
})

const port_req = 8765;
const server = app.listen(port_req, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
