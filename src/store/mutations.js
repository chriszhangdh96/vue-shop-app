var mutations = {
    // 改变Home下图标分类点击状态索引
    changeIndex1(state){
        state.TabbearIndex = 1;
    },
    // 改变Home下图标购物车点击状态索引
    changeIndex2(state){
        state.TabbearIndex = 2;
    },
    
    //加入购物车
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

        localStorage.setItem('car',JSON.stringify(state.car))

    },

    //修改购物车的值
    updatagoodsinfo(state,goodsinfo){
        //修改购物车中商品的数量值
        state.car.some(item=>{
            if(item.id==goodsinfo.id){
                item.count=parseInt(goodsinfo.count)
                return true
            }
        })
        //修改完商品的数量，把最新的购物车数据放到本地存储
        localStorage.setItem('car',JSON.stringify(state.car))
    },

    //删除商品
    removeforcar(state,id){
        state.car.some((item,index)=>{
            if(item.id==id){
                state.car.splice(index,1)
                return true
            }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    //改变按钮状态
    updatagoodsselected(state,info){
        //改变按钮的状态
        state.car.some(item=>{
            if(item.id==info.id){
                item.selected=info.selected
                return true
            }
        })

        localStorage.setItem('car',JSON.stringify(state.car))
    },
    //全选/反选切换
    updateGettersGoodsChecked(state, boolean) {
        state.car.forEach(item => {
            //console.log(item.selected)
            item.selected = boolean;
            //console.log(item.selected)
           // console.log('----' + item.checked);
        });
        // state.checkAllStatus.status = boolean;


        // state.checkAllStatus = boolean;
        // localStorage.setItem('checkAllStatus', JSON.stringify(state.checkAllStatus));

        localStorage.setItem('car', JSON.stringify(state.car));
    },

    //收藏该商品
    addToshop(state,goodsshop){
        state.shop.push(goodsshop)
        localStorage.setItem('shop',JSON.stringify(state.shop))
    },
    //删除收藏的商品
    removeshop(state,id){
        state.shop.some((item,index)=>{
            if(item.id==id){
                state.shop.splice(index,1)
                return true
            }
        })
        localStorage.setItem('shop',JSON.stringify(state.shop))
    },
    //去结算
    toshoping(state){
        state.car.forEach()
    }
}

export default mutations