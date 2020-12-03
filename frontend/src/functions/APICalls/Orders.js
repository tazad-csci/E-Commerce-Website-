class Orders{
    api = {};
    constructor(api){
        this.api = api;
    }
    getOrders(cb, incShipped = false){
        this.api.get('/order/orders')
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: listing orders failed, error: ${err}`, err);
        })
    }
}

export default Orders