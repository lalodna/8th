//installing service worker
self.addEventListener("install",evt=>{
    console.log("service worker installed",evt);
});
//activate service worker  
self.addEventListener('activate',evt=>{
    console.log("activated service worker");
});
//fetch service worker
self.addEventListener("fetch",evt=>{
    console.log("fetch service worker");
});

// //fetch github
// self.addEventListener('fetch', event => {
//     fetch("https://github.com/Call-for-Code/Project-Sample.git",{mode: 'no-cors'})
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// });
