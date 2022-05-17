module.exports = {
    count : { 
        subscribe(parent, args, {db, pubsub}, info){
            let counter = 0;
            setInterval(()=>{
                counter++;
                pubsub.publish("COUNTER", {
                    count : counter
                })
            }, 1000)
            return pubsub.asyncIterator("COUNTER")
        }
    }
}