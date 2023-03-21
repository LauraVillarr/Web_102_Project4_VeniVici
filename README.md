# Web Development Project 4 - *Veni Vici*

Submitted by: **Laura Villarreal**

This web app: **Allows users to see pictures and attributes of dogs grabbed from the api "The Dog Api" using the discover button. Users can filter future discoveries
based on dog breed by placing the attribute on a ban list, which will prevent dogs with those breeds from appearing to the user.**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
    - [X] Author note: this can be seen in the gif. Each api call is printed out to the console. There is a point where a dog of breed
          Shiba Inu is skipped over since it is on the banned list, and instead a breed of type Dalmatian is displayed to the user.

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [X] CSS was implemented similar to the example for a clean UI look

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/LauraVillarr/Web_102_Project4_VeniVici/blob/master/walkthrough_venivici.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I had a lot of difficulty getting my api call to work initially. I was initially confused what endpoint I should use to get all the data I wanted. In addition,
I was struggling to grab my key from the .env folder, and later realized that Vite needed the key name to start with "VITE" in order for it to be recognized. I was
also having some issues with calling functions that had one parameter. My functions were in App.jsx, and the functions with arguments were being passed to child elements.
When I initially tried to call these functions from the child, the child did not recognize the function. I needed to adjust how I was calling the function from the
child in order to get it working. Finally, I had a bit of trouble figuring out how to get the ban list where I wanted it on the screen. I was trying to use flexbox
for it, but instead decided to make its position absolute. While not shown in the gif, I made the ban list work with smaller screens by using @media to have the
ban list under the discover element once the screen size was a certain size.

## License

    Copyright [2023] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
