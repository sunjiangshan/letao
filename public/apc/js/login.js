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
                  min: 2,
                  max: 6,
                  message: '用户名长度必须在2到6之间'
                },
                callback: {
                    message:"用户名或密码错误"
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
                    min: 2,
                    max: 10,
                    message: '密码长度必须在2到10之间'
                  },
                  callback: {
                    message:"用户名或密码错误"
                  }
                }
              }
        }   
    })
    // 表单校验

    $('form').on('success.form.bv',function(e){
        e.preventDefault();
        //阻止表单默认行为 通过AJAX进行提交
        $.ajax({
            type:'POST',
            url:'/employee/employeeLogin',
            // serialize方法是JQ的方法 用于表单序列化
            data:$('form').serialize(),
            daraType:'json',
            success:function(info){
               if(info.error===1000) {
                //    alert('用户名错误')
                   $('form').data('bootstrapValidator').updateStatus("username","INVALID","callback");
               }
               if(info.error===1001) {
                // alert('密码错误')
                    $('form').data('bootstrapValidator').updateStatus("password","INVALID","callback");
                }
                if(info.success) {
                    location.href='index.html'
                }
            }

        })
    })

    //表单提交的校验

    $("[type='reset']").on('click',function(){
        $('form').data('bootstrapValidator').resetForm();
    })

    //重置表单样式
});