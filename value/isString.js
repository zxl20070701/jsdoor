var toString = Object.prototype.toString;

// 获取一个值的类型字符串[object type]
var getType = function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

// 判断一个值是不是String
export default function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};
