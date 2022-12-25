import { painterInstance } from './painter.d'

interface bufferObj {

    // 写入数据
    write(data: any, usage?: any): bufferObj

    // 分配使用
    use(location: any, size: number, stride?: number, offset?: number, type?: any, normalized?: boolean): bufferObj
}

interface textureObj {

    // 链接图片资源
    useImage(image: any, level: number, format: any, textureType: any): textureObj

    // 链接多张图片
    useCube(images: any, width: number, height: number, level: any, format: any, textureType: any): textureObj

}

interface glObj {

    _gl_: any

    // 画笔
    painter(): painterInstance

    // 启用着色器
    shader(vshaderSource: string, fshaderSource: string): glObj

    // 缓冲区
    buffer(isElement: boolean): bufferObj

    // 纹理
    texture(_type_: any, unit: number): textureObj

    // 视图窗口缩放设置
    updateScale(value: number): glObj

}

export default function (node: Element, opts?: any): glObj