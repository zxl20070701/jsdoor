interface cardinalInstance {

    // 设置张弛系数【应该在点的位置设置前设置】
    setT(t: number): cardinalInstance

    // 设置点的位置
    setP(points: Array<Array<number>>): cardinalInstance

}

interface doCalc {
    (x: number): number
}

export default function (t?: number): cardinalInstance | doCalc