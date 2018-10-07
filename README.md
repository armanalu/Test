## Test Link
link :  https://armanalu.github.io/Test/

## App Features
1. The app fetches data from the API https://techkaro-test.herokuapp.com/api/v1/getdata and displays the data on the html page.
2. The app should be able to fetch data in English, Chinese and Urdu
3. The app should be responsive across various screen sizes ( > 370px ).
---

## Ingredients
The app should use:
1. Bootstrap
2. Font Awesome for icons
3. Google Fonts for fonts (font-family: 'Montserrat')
4. JQuery for Ajax

The CDNs of all ingredients, along with `script.js` and `style.css` files, have already been linked in the `<head>`.

----

## Rules
1. Your app should look like the mockups attached in the `screenshots` folder. Try to achieve pixel perfection.
2. Your app should be responsive
3. Any data that can be fetched from the API should not be hard-coded in HTML
4. You must upload the task to your Github Account and host it on Github Pages before 6 PM. 
5. You must not push any commits to your repo after 6 PM

----
## API Instructions
When the flags on the top are clicked, the language should change - For example, clicking the Chinese flag should display text in Chinese. The translations can be fetched from the API using query string:

**API URL:** https://techkaro-test.herokuapp.com/api/v1/getdata
**Query Parameter:** lang
**lang values**: `en` for English, `zh` for Chinese, and `ur` for Urdu

**Example:** To get data in Chinese, use https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh
