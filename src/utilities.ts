
(async function() {
    // What Await do is to set the type of value we are getting by using async await syntax.
    let promiseReturnTextType: Awaited<Promise<string>>;

    promiseReturnTextType = await Promise.resolve('hello world');
    console.log(promiseReturnTextType);
})();
