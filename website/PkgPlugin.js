import fs from 'fs'
import path from 'path'

export default function PkgPlugin() {
    return {
        name: "PkgPlugin",
        buildStart() {

            // 首先判断是dev还是build
            if (process.env.npm_lifecycle_event == 'build') {

                // 打包前，清空内容
                (function deleteSync(target) {

                    // 如果文件夹不存在，直接返回即可
                    if (!fs.existsSync(target)) return

                    // 如果是文件，直接删除即可
                    if (!fs.lstatSync(target).isDirectory()) {
                        fs.unlinkSync(target)
                    } else {

                        // 读取子文件
                        const subFiles = fs.readdirSync(target)

                        subFiles.forEach(function (file) {

                            // 调用这个方法，删除子文件或文件夹
                            const curPath = path.join(target, "./" + file)
                            deleteSync(curPath)

                        })

                        // 等子文件或文件夹删除完毕以后，删除本文件夹
                        fs.rmdirSync(target)
                    }
                })('../docs');

            }
        }
    }
}