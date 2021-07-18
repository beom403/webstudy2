function fetchPage(name){
    fetch(name).then((response) => {
        response.text().then((text) => {
            document.querySelector('article').innerHTML = text;
        })
    })
}

if (location.hash){
    fetchPage(location.hash.substr(2));
}
else{
    fetchPage('welcome'); 
}

// show 'nav'
// #1
// fetch('list').then((response) => {
//     response.text().then((text) => {
//         document.querySelector('#nav').innerHTML = text;
//     })
// })
// #2
fetch('list').then(response => {
    response.text().then(text => {
        document.querySelector('#nav').innerHTML = "";
        text.split(',').forEach(item => {
            item = item.trim();
            document.querySelector('#nav').innerHTML += '<li><a href="#!' + item + '" onclick="fetchPage(\'' + item + '\')">' + item + '</a></li>';
        })
    })
})