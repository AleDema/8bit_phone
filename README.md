# 8Bit Phone | WIP
This is a custom phone written for 8Bit RP, with assistance by Alzar . It is replacing an existing port of GCPhone & Mythic Phone for the mythic framework this works with a ESX Framework. This is very much a Work In Progress and you should not even look into using this unless you're prepared to do some work.

## Dependencies
* ESX Base |
* ESX Inventory | Not Released
* (Modified [InteractSound](https://github.com/plunkettscott/interact-sound))
* [GHMattiMySQL](https://github.com/GHMatti/ghmattimysql)
* ???
* Basic Knowledge of reading code
*You will be required to change the progress bars as well as notifications I am using a event ``notification`` for notifications and another event ``cl-prog`` for the progress bar you can search for these and change them if you wish to work with your server.

> This is a WIP resource so it will require people with basic knowledge of things to figure out how to work the phone.

### Comments

* JS - Due to how I have the JavaScript structured I have opted to setup webpack to minify the files into a single file. This makes it far easier to add content in the future and not have to mess around with importing as well as ensures the file that's being included in the manifest file will always be the one that has all the data for it. Not sure if there's any sort of major performance issues. When you clone the repo, cd into the html folder and use command ```yarn``` if you have yarn or ```npm install``` if you're using npm and it will install all the required dependencies. After that run ```yarn run build``` or ```npm run build``` and it will build the minified build.js file needed.

> Note: You can in theory just change the manifest to include the regular JS files as well as add them being included in the HTML file and it'll work. But I will not give any guarantee that it'll work doing so. It's also using ES6 modules so you may end up with errors because of that.

__You not shit with webpack? Feel free to get the stupid thing to work & pack all depedencies needed and make a pull request. Because I cannot for the life of me get that dumbshit to work__

#### Libraries Used
* [jQuery](https://jquery.com/)
* [jQuery Inputmask](http://igorescobar.github.io/jQuery-Mask-Plugin/)
* [jQuery UI](https://jqueryui.com/)
* [noUiSlider](https://github.com/leongersen/noUiSlider)
* [Materialize](https://materializecss.com/)
* [Moment.js](https://momentjs.com/)
* [FontAwesome](https://fontawesome.com/)

------
# Includes
* Info App
* Contacts App
* DarkWeb
* Garage App (You may need to modify it to work for your garage)
* Settings App
* Twitter App
* Yellow Pages
* Messages
* Los Santos Web (You need to change this in the js to your website)

# Screenshots

### Home
![Home Screen](https://i.imgur.com/4Byt7MO.png)

### Contacts
![Contacts App](https://i.imgur.com/YiZMFi6.png)
![Contacts App](https://i.imgur.com/OHnemDg.png)

### Messages
![Messages App](https://i.imgur.com/9sub4GU.png)

### Twitter
![Twitter App](https://i.imgur.com/ylAnKlm.png)
![Twitter App](https://i.imgur.com/B8t0DJz.png)
