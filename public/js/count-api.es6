$(function(){
    //初始化，获取当前已经点击的数据
    refreshCount();
    $("#thumb").on('click',function(){
        axios.get('/api/add_praise',{id:'1'})
        .then(data=>{
            if(data.data.msg =='ok'){
                refreshCount();
            }
        })
    })


    // 将当前点赞次数显示在页面
    function refreshCount() {
        $('#count').empty();
        axios.get('/api/get_count', {
            params: {
              id: 1
            }
          })
          .then(function (data) {
            console.log('获取点赞次数成功',data);
            if(data.data.msg === 'ok'){
                $('#count').html(data.data.count);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
})