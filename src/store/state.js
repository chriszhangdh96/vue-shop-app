var car=JSON.parse(localStorage.getItem('car') || '[]')
var shop=JSON.parse(localStorage.getItem('shop') || '[]')
var foot=JSON.parse(localStorage.getItem('foot') || '[]')
var state = {
    car:car,//购物车里面的数据
    //收藏列表
    shop:shop,
    shoping:[],
    TabbearIndex:0,
    foot:foot,
    footTab:0
}

export default state