// Object Destructuring

let user = {
    username: "testuser",
    is_verified: true
}

let {username, is_verified} = user

console.log(username, is_verified)

let metadata = {
    title: "JavaScript Work Stuff",
    translations: [
        {
            locale: "de",
            localization_tags: [],
            last_edit: "2020-01-22T06:41:47",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-werkzeug"
        }
    ],
    url: "en-US/docs/Tools/Scratchpad"
}

// How to get title and translation title out?

let {
    title: englishTitle,
    translations: [
        {
            title: localeTitle
        }
    ]
} = metadata

console.log(englishTitle, localeTitle)

let family = {
    familyName: "Niemczyk",
    parents: [
        {name: "Hannah", age: 65},
        {name: "Zbigniew", age: 78}
    ],
    country: ["Germany", "England", "Poland"]
}

// Challenge
/*
    Welcome to my tiny family tree. Allow me to access my family name, my mom's name, and Poland out of this object, using resprective variables.
*/

let {
    familyName: lastName,
    parents: [{name: motherName}],
    country: [,,countryName]
} = family;

console.log(lastName, motherName, countryName)