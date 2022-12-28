const { convertImage } = require("./panorama-to-cubemap");
console.log(new Date())
const url = "./4096.jpg";

// url should be absolute local or remote path

// Calling this function will generate 6 sides of cubemap in local directory
convertImage(url).then(function (){
    console.log(new Date())
});

// These are the default options
// const options = {
//     rotation: 180,
//     interpolation: "lanczos",
//     outformat: "jpg",
//     outtype: "file",
//     width: Infinity
// };
//
// convertImage(url, options).then(x => {
//     // output will be buffer or file based on input
//     console.log(x);
// });