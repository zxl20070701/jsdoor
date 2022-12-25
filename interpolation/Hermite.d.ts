interface hermitedInstance {

    // 设置点的位置
    setP(x1: number, y1: number, x2: number, y2: number, s1: number, s2: number): hermitedInstance

}

interface doCalc {
    (x: number): number
}

export default function (u?: number): hermitedInstance | doCalc
