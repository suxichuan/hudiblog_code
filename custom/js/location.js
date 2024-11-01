/**
 * 今日诗词V2 JS-SDK 1.2.2
 * 今日诗词API 是一个可以免费调用的诗词接口：https://www.jinrishici.com
 */
!function (e) {
    var  t = {}, o = "jinrishici-token";


    function r(e, n) {
        var t = new XMLHttpRequest();
        t.open("get", n);
        // t.setRequestHeader("Referer","no-referer")
        // t.withCredentials = false
        // t.withCredentials = !0
        t.send();
        t.onreadystatechange = function (n) {
            if (4 === t.readyState || 3 === t.readyState || 2 === t.readyState) {
                var o = JSON.parse(t.responseText);
                '1' === o.status ? e(o) : console.error("高德地理位置API加载失败，错误原因：" + o.errMessage)
            }
        }
    }

    t.load = function (n) {
        return e.localStorage && e.localStorage.getItem('token') ? function (e, n) { //211.139.68.58
            return r(e, `https://restapi.amap.com/v3/ip?key=${encodeURIComponent("37d0d1b0adb57a6c9ff5cd1744ef6023")}&ip=${encodeURIComponent("211.139.68.58")}`)
        }(n) : function (n) {
            return r(function (t) {
                e.localStorage.setItem('token', t.token), n(t)
            }, `https://restapi.amap.com/v3/ip?key=${encodeURIComponent("37d0d1b0adb57a6c9ff5cd1744ef6023")}&ip=${encodeURIComponent("211.139.68.58")}`)
        }(n)
    },
        e.diliweizhi = t
}(window);
