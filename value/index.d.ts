// 解析一段表达式
export function evalExpress(target: any, express: string, scope?: any): any

// 获取表达式作为key对应的值
export function getValue(target: any, express: string, scope?: any): any

// 设置表达式作为key对应的值
export function setValue(target: any, express: string, value: any, scope?: any): any