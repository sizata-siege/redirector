// @ts-check

__('Loading Redirect')
/**
 * Redirect to somewhere
 * @param {string} target 
 * @param {number=} wait 
 * @param {function=} call 
 */
// function redirect (target, wait = 0, call = null)
window.redirect = (target, wait = 0, call = null) => // fuck this problem
{
    setTimeout(() =>
    {
        window.location.href = target
    }, wait)

    // if (call != undefined) call()
}

// export default redirect

__('Redirect Loaded!')
