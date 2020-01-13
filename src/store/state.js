var checkAllStatus=true
var car=JSON.parse(localStorage.getItem('car') || '[]')
var shop=JSON.parse(localStorage.getItem('shop') || '[]')
var state = {
    car:car,//购物车里面的数据
    checkAllStatus: checkAllStatus,
    //收藏列表
    shop:shop
}

export default state