class Parts{
    api = {};
    constructor(api){ 
        this.api = api;
    }
    list(cb){
        this.api.get('/parts')
        .then(data=>{
            cb(data.data);
        })
        .catch(err=>{
            console.log(`ERROR: listing parts failed, error: ${err}`, err);
        })
    }

    setQTY(partNumber, onHand, cb){
        this.api.post('/parts/setQTY', {partNumber, onHand})
        .then(data=>{
            cb(data.data);
        })
        .catch(err=>{
            console.log(`ERROR: setQTY of part failed, error: ${err}`, err);
        })
    }
}

export default Parts;