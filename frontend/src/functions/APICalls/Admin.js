class Admin{
    api = {};
    constructor(api){
        this.api = api;
    }
    getRules(cb, incShipped = false){
        this.api.get('/admin/rules')
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: listing admin rules failed, error: ${err}`, err);
        })
    }
    addRule(rule, cb){
        this.api.post('/admin/addRule', rule)
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: adding an admin rule failed, error: ${err}`, err);
        })
    }
    remRule(rule_id, cb){
        this.api.post('/admin/remRule', {rule_id})
        .then(data => {
            cb(data.data)
        })
        .catch(err=>{
            console.log(`ERROR: rem an admin rule failed, error: ${err}`, err);
        })
    }
}

export default Admin