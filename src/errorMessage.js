/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
export default {
    require:"该值不能为空",
    minLength:val=>`长度不能小于${val}`,
    maxLength:val=>`长度不能大于${val}`,
    minValue:val=>`最小值不能小于${val}`,
    maxValue:val=>`最大值不能超过${val}`,
    number:"请输入合法数字",
    date:"请输入合法日期",
    float:"请输入合法浮点数",
    int:"请输入合法整数",
    email:"请输入合法email",
    phone:"请输入合法手机号",
    "default":"输入值不合法"
}
