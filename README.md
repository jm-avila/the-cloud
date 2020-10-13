# The Cloud

[Check it out](http://jm-avila.github.io/the-cloud)

## About the app:

It is a small application developed in react, which consumes the https://reqres.in/ api. For example: "george.bluth@reqres.in" and a random password. Once your credentials are authenticated, you can access the list of users, see their details, edit and delete them.

To take into account, when editing and deleting, the data in the list will not be modified, although the PUT and DELETE requests will be made.

The global state of the application is managed with redux, side effects and asynchrony with redux-saga.

Styles were developed using SASS. There is a breaking point, 550px, some styles are modified to fit the content on computer and a mobile device.

Navigation is managed through react-router-dom.

All the base components have been tested using Jest and react-testing, there are render and event tests.

To keep the code clean, I've configure prettier to format the code with each save and eslint to display fix warnings if variables are declared but never used.
