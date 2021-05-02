import Cookies from 'js-cookie'

function getParamFromUrl_test(str) {
    let query = str.split('&')
    query[0] = query[0].split('?')[1]
    let param = {}
    for (let i = 0; i < query.length; i++) {
        let q = query[i].split('=')
        if (q.length === 2) {
            param[q[0]] = q[1].replace('%20', ' ')
        }
    }
    return param
}

function getParamFromUrl() {
    if (window.location.search === '') {
        return {}
    }
    let query = window.location.search.split('&')
    query[0] = query[0].split('?')[1]
    let param = {}
    for (let i = 0; i < query.length; i++) {
        let q = query[i].split('=')
        if (q.length === 2) {
            param[q[0]] = q[1].replace('%20', ' ')
        }
    }
    return param
}

function clearAppData() {
    // clear cookies, localstorages and session storages
    sessionStorage.removeItem('likedTracks')
    Cookies.remove('user', { path: '' })
    Cookies.remove('io', { path: '' })
}

function setUserCookieFromURL() {
    let data = getParamFromUrl()
    if (!data.user_json) {
        return
    }
    let dataObject = JSON.parse(decodeURIComponent(data.user_json))
    Cookies.set('user', dataObject.token)
    removeQueryStringFromURL()
}

function removeQueryStringFromURL(path = '/') {
    window.history.replaceState({}, document.title, path)
}

export default {
    getParamFromUrl_test,
    getParamFromUrl,
    clearAppData,
    removeQueryStringFromURL,
    setUserCookieFromURL,
}
