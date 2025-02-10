# Aqua Verifier 
JS Client for external verifier.
* An npm library 
* a cli tool to verify aqaua chain json file 

## Usage
Ensure to use the same semantic version as the Aqua protocol version you are using for example
* use version 1.2.XX with aqua protocol version 1.2.


## Installation
```bash
npm install aqua-verifier
```

## Usage

```typescript
import AquaTree, {FileObject} from 'aqua-verifier';


let aquaTree = new AquaTree();

// using node fs module or browser FILE object
// create an aqua file object 
let fileObject : FileObject = {
  fileName: "sample.txt",
  fileContent: "i am a sampl text",
  path: "/sample.txt" // optional if in browser environment
}
let aquaTreeObjectResult = await aquaTree.createGenesisRevision(fileObject);

if(isErr(aquaTreeObjectResult)){
    console.err(" ---- An error occured  ---- ");
    aquaTreeObjectResult.logData.forEach((e) => console.log(e));
    return
}
let aquaTreeObject = aquaTreeObjectResult.data

// aquaTreeObject can be saved in db or aqua.json

```

##  Requirements
Node.js v20.9.0


## local development
You can use the library without having to instal it from npm
1. run `npm run build`
2. run `npm link`

in you aqua-container or any other project run `npm  link aqua-verifier` .
optional to unlink remove this library `npm unlink aqua-verifier`


