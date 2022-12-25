// 获取一个新的缓冲区
export function newBuffer(gl: any, isElement?: boolean): any

// 数据写入缓冲区
export function writeBuffer(gl: any, data: any, usage: any, isElement?: boolean): null

// 使用缓冲区数据
export function useBuffer(gl: any, location: any, size: number, type: any, stride: number, offset: number, normalized?: boolean): null