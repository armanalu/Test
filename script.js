// creat array and varriable for get date
let months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
// creat a function for sending default data to html
$.ajax({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
    success: function (data) {
        console.log(data);
        document.querySelector(".date-text").innerHTML = `<i class="fas fa-calendar-alt"></i> 
            ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}h 
            ${date.getMinutes()}m <i class="fas fa-user"></i> by <a>TechKaro Community</a>`
    }
})
//  creat a function to changing language on onclick    
function language(lang) {
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${lang}`,
        success: function (data) {
            document.querySelector('#nav').innerHTML = `
                <a class="nav-item nav-link active">${data.menuOptions[0]}</a>
                <a class="nav-item nav-link">${data.menuOptions[1]}</a>
                <a class="nav-item nav-link">${data.menuOptions[2]}</a>
                <a class="nav-item nav-link disabled">${data.menuOptions[3]}</a>`
            document.querySelector('.img').innerHTML = `<img class="card-img-top" src=${data.imageURL}>`
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-title2').innerHTML = data.sale.heading;
            document.querySelector('.card-text2').innerHTML = data.sale.description;
        }
    })
}