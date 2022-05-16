// Sync
console.log("Start")

// Async -> assign Async task to different thread
setTimeout(() => {
    console.log("Timer")
}, 0);


// Sync
console.log("End")

// OUTPUT -> Start -> End -> Timer