var mutations = {
    addTocar(state,goodsinfo){
        //点击加入购物车,吧商品信息保存到car上

        //假设没有找到对应的商品
        var flag=false
        state.car.some(item=>{
            if(item.id==goodsinfo.id){
                item.count+=parseInt(goodsinfo.count)
                flag=true
                return true
            }
        })

        if(!flag){
            state.car.push(goodsinfo)
        }
    }
}

export default mutations