const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const webBrowser = {

  'brave':{
    'developer': 'Brave Software Inc.',
    'layoutEngine': 'Blink',
    'license' : 'MPL-2.0',
    'platform' : ['Android', 'iOS', 'GNU\/Linux', 'macOS', 'Windows'],
    'cost' : 'No cost'
  },
  
  'chrome':{
    'developer': 'Google',
    'layoutEngine': 'Blink',
    'license' : 'Proprietary',
    'platform' : ['Android', 'iOS', 'GNU\/Linux', 'macOS', 'Windows'],
    'cost' : 'No cost'
  },
  
  'edge':{
    'developer': 'Microsoft',
    'layoutEngine': 'EdgeHTML \/ Blink',
    'license' : 'Proprietary',
    'platform' : ['Android', 'iOS', 'GNU\/Linux', 'macOS', 'Windows'],
    'cost' : 'No cost'
  },
  
  'firefox':{
    'developer': 'Mozilla Foundation',
    'layoutEngine': 'Gecko',
    'license' : 'MPL-2.0',
    'platform' : ['Android', 'iOS', 'GNU\/Linux', 'macOS', 'Windows'],
    'cost' : 'No cost'
  },
  
  'opera':{
    'developer': 'Opera Software',
    'layoutEngine': 'Presto \/ Blink',
    'license' : 'Proprietary',
    'platform' : ['Android', 'iOS', 'macOS', 'Windows'],
    'cost' : 'No cost'
  },
  
  'safari':{
    'developer': 'Apple Inc.',
    'layoutEngine': 'WebKit',
    'license' : 'Proprietary',
    'platform' : ['iOS', 'macOS'],
    'cost' : 'Bundled'
  },
  
  'unknown':{
    'developer': 'unknown',
    'layoutEngine': 'unknown',
    'license' : 'unknown',
    'platform' : ['unknown'],
    'cost' : 'unknown'
  }
}

app.get('/', (request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
  const browserName = request.params.name.toLowerCase()
  if( webBrowser[browserName] ){
    response.json(webBrowser[browserName]) 
  }else{
    response.json(webBrowser['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}`)
})
