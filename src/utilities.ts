
(async function() {
    // What Await do is to set the type of value we are getting by using async await syntax.
    let promiseReturnTextType: Awaited<Promise<string>>;

    promiseReturnTextType = await Promise.resolve('hello world');
    console.log(promiseReturnTextType);
})();


(function() {
    interface IAccepts {
        name: string;
        age: number;
    }

    // What partial do is to make all the property optional.
    function getDetails(data: Partial<IAccepts>): string {
        if (!data.age && !data.name) {
            return 'Name and age is required';
        } else if (!data.name) {
            return `Name is required`;
        } else if (!data.age) {
            return 'Age is required';
        }
        return `My name is ${data.name} and age is ${data.age}`;
    }

    const value = getDetails({ name: 'Raj Dutta' });
    console.log(value);
})();


(function() {
    interface IAccepts {
        name: string;
        age: number;
    }

    // What Required do is to make all the property required.
    function getDetails(data: Required<IAccepts>): string {

        return `My name is ${data.name} and age is ${data.age}`;
    }

    const value = getDetails({ name: 'Raj Dutta', age: 26 });
    console.log(value);
})();


(function() {
    interface SettingNonChangableType {
        name: string;
        age: number;
    }

    const user: Readonly<SettingNonChangableType> = {
        name: 'Raj Dutta',
        age: 26
    }

    // This will return an exception because this is the purpose of readonly utility function so the value can't be change
    // user.age = 26;
})();
