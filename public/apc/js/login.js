$(function(){
    $('form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
              validators: {
                notEmpty: {
                  message: '用户名不能为空'
                },
                //长度校验
                stringLength: {
                  min: 6,
                  max: 30,
                  message: '用户名长度必须在6到30之间'
                },
                callback: {
                    message:"用户名不存在"
                }
              }
            },
            password:{
                validators: {
                  notEmpty: {
                    message: '密码不能为空'
                  },
                  //长度校验
                  stringLength: {
                    min: 5,
                    max: 20,
                    message: '密码长度必须在6到30之间'
                  },
                  callback: {
                    message:"密码错误"
                  }
                }
              }
        }   
    })
})()