import animation from '../tool/animation'

export default {
    mounted(el: HTMLElement) {
        let els = el.children;
        let fixedMenuEl: HTMLElement = <HTMLElement>document.getElementById('fixed-menu-id')
        let docEl: HTMLElement = <HTMLElement>document.getElementById('doc-view-id')
        fixedMenuEl.innerHTML = ""
        for (let index = 0; index < els.length; index++) {
            (function (index) {

                if (["H2", "H3", "H4"].indexOf(els[index].nodeName) > -1) {

                    let fixedItemEl = document.createElement(els[index].nodeName)
                    fixedMenuEl.appendChild(fixedItemEl)
                    fixedItemEl.innerText = (<HTMLElement>els[index]).innerText
                    fixedItemEl.addEventListener('click', function () {

                        let offsetTop = (<HTMLElement>els[index]).offsetTop
                        let currentScrollTop = docEl.scrollTop || 0

                        animation(function (deep: number) {
                            docEl.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop
                        }, 500, function () {
                            docEl.scrollTop = offsetTop
                        })

                    })

                }
            })(index)
        }

    }
}
