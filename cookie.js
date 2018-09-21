'use strict';

function getAlertTemplate() {
    var template = '<div id="cookie-info" style="background-color:#fff;padding-top:15px;font-size:14px;text-align:center;border:2px solid #000;max-width: 1260px;margin: 0 auto;">' + '<span>This website uses "cookies" to give you best experience. Continue using this website means you have no problem with this.</span>' + '<a id="cookie-learn-more" style="border-bottom: solid 1px;" target="_blank" href="http://wikipedia.org/wiki/HTTP_cookie"> Learn more about "cookie"? </a>' + '<br/><button id="accept-cookies" style="padding: 10px;margin-bottom: 15px;font-size: 16px;">Continue</button>' + '</div>';
    return template;
}
function showCookieAlert() {
    var wrapper = document.createElement("div");
    wrapper.style.position = 'fixed';
    wrapper.style.bottom = 0;
    wrapper.style.left = 0;
    wrapper.style.right = 0;
    wrapper.style.zIndex = 999;
    wrapper.style.width = '100%';
    wrapper.style.textAlign = 'center';
    wrapper.innerHTML = getAlertTemplate();
    document.body.appendChild(wrapper);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cookiesAccepted = getCookie("cookies-accepted");
    if (cookiesAccepted == "") {
        showCookieAlert();
    }
}
document.addEventListener('click', function (e) {
    if (e.target.id == "accept-cookies") {
        setCookie("cookies-accepted", "1", 365 * 5);
        document.getElementById('cookie-info').style.display = 'none';
    }
}, false);
document.addEventListener("DOMContentLoaded", function (e) {
    var cookie = document.getElementById('accept-cookies');
    if (cookie == null) {
        return checkCookie();
    };
}, false);
//# sourceMappingURL=cookie.js.map