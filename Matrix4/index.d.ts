interface matrix4 {

    // 移动
    move(dis: number, a: number, b: number, c: number): matrix4,

    // 旋转
    rotate(deg: number, a1: number, b1: number, c1: number, a2: number, b2: number, c2: number): matrix4,

    // 缩放
    scale(xTimes: number, yTimes: number, zTimes: number, cx: number, cy: number, cz: number): matrix4,

    // 乘法
    multiply(newMatrix4: Array<number> | matrix4, flag: boolean): matrix4,

    // 对一个坐标应用变换
    use(x: number, y: number, z?: number, w?: number): Array<number>,

    // 矩阵的值
    value(): Array<number>

}

export default function (initMatrix4?: Array<number>): matrix4