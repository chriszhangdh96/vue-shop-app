var getters = {
    getAllCount(state){
        var c=0
        state.car.forEach(item=>{
            c+=item.count
        })
        return c
    },
    getgoodscount(state){
        var o={}
        state.car.forEach(item=>{
            o[item.id]=item.count
        })
        return o
    },

    //购物车的选择状态
    getgoodsselected(state){
        var o={}
        state.car.forEach(item=>{
            o[item.id]=item.selected
        })
        return o
    },

    //
    getgoodscountandmount(state){
        var o={
            count:0,//勾选的数量
            amout:0,//勾选的总价
        }
        state.car.forEach(item=>{
            if(item.selected){
                o.count+=item.count
                o.amout+=item.price*item.count
            }
        })
        return o
    }
}

export default getters