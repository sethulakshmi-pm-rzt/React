// sourceFolder = '/Users/rzt/Documents/'
// destFolder = '/Users/rzt/Movies';
// move files under "sourceFolder" it will automatically moves to "destFolder".

let watch = require('node-watch');

let sourceFolder = '/Users/rzt/Documents/';

let recursive = require("recursive-readdir");

recursive(sourceFolder, function (err, files) {
  let existingFiles = files.filter((item) => {
    let fileExtension = item.split('.').pop();
    return (fileExtension === 'pdf' || fileExtension === 'tiff' ||
      fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'jpeg') ? item : ''
  });
  console.log("FILES : ", existingFiles)
});

function moveFiles(name, fileName, destFileName) {
  const moveFile = require('move-file');
  (async () => {
    await moveFile(name, destFileName );
    console.log(fileName, 'File moved to ', destFileName);
  })();
}

watch(sourceFolder,
  { recursive: true },
  function(evt, name) {
    if(evt === 'update') {
      let fileExten = name.split('.').pop();
      if((fileExten === 'pdf') || (fileExten === 'tiff') || (fileExten === 'jpg') || (fileExten === 'png') || (fileExten === 'jpeg')) {
        console.log('%s changed.', name, evt, fileExten);
        let destFolder = '/Users/rzt/Movies';
        let fileName = name.split('/').pop();
        let destFileName = `${destFolder}/${fileName}`

        moveFiles(name, fileName, destFileName);
      }
    }
  }
);
