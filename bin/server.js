const http = require('http');
const fs = require('fs');

const mineTypes = require('./mime.types.js');
const { log, error } = require('./log');
const { fullPath } = require('./path');

module.exports = function () {

    let port = 20000; // 端口号
    let basePath = process.cwd(); // 服务器根路径

    let index = 0;
    let server = http.createServer(function (request, response) {
        try {
            log("[" + index++ + "]" + request.url);

            request.url = request.url.split("?")[0];

            // 请求的文件路径
            let filePath = fullPath(request.url == "/" ? "index.html" : request.url.replace(/^\//, ""), basePath);

            let dotName = /\./.test(filePath) ? filePath.match(/\.([^.]+)$/)[1] : "";

            // 文件类型
            type = mineTypes[dotName];

            if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
                response.writeHead(200, {
                    'content-type': (type || "text/html") + ";charset=utf-8"
                });
                response.write(fs.readFileSync(filePath));
            } else {
                response.writeHead(404, {
                    'content-type': "text/html;charset=utf-8"
                });
                response.write(require('./responseFileList')(filePath));
            }
        } catch (e) {
            error(e);

            response.writeHead(500, {
                'content-type': "text/plain;charset=utf-8"
            });
            response.write(e + "");
        }

        response.end();
    });

    server.listen(port);
    log('Server running on port:' + port);

};