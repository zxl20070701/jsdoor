export interface painterInstance {

    openDeep(): painterInstance

    points(first: number, count: number, type: boolean): painterInstance

    lines(first: number, count: number, type: boolean): painterInstance

    stripLines(first: number, count: number, type: boolean): painterInstance

    loopLines(first: number, count: number, type: boolean): painterInstance

    triangles(first: number, count: number, type: boolean): painterInstance

    stripTriangles(first: number, count: number, type: boolean): painterInstance

    fanTriangles(first: number, count: number, type: boolean): painterInstance

}

export default function (gl: any): painterInstance