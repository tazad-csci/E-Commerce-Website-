class Orders{
    api = {};
    constructor(api){
        this.api = api;
    }
    getOrders(cb, incShipped = false){
        this.api.get(`/order/orders/${incShipped ? 1 : 0}`)
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: listing orders failed, error: ${err}`, err);
        })
    }
    setShipped(order_id, cb){
        this.api.post(`/order/setShipped/`, {order_id})
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: listing orders failed, error: ${err}`, err);
        })
    }
}

export default Orders