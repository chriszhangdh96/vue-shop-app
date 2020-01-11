var checkAllStatus=true
var car=JSON.parse(localStorage.getItem('car') || '[]')
var state = {
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTE4MzMwZGJlYTQ2MzQ3NTBkODQ4ZWIiLCJpYXQiOjE1Nzg2NDQyNTEsImV4cCI6MTU3ODY4MDI1MX0.sqWHr3ZmMRV42hb-A6ZleI-T2OZKpOlFylhMSuhjFoY',
    car:car,//购物车里面的数据
    checkAllStatus: checkAllStatus
}

export default state