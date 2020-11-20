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
}

export default Parts;