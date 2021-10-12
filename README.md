# Simple Dedi Application

Simple Dedi application is my first project using AdonisJS. This is an api-only application that has several functions: 

| Category | Function Name | Endpoint        | Who can access? | Description  | 
| -------- | ------------- | --------------- | ------------    | -------------| 
| Auth     | Register      | /users/register | All users       | User can register using email, username, and password.|
|          | Login         | /users/login    | Registered users | User can login using email and password. |
|          | Logout        | /users/logout   | Login users     | Not implemented fully (to be updated) |
| CRUD Village | Create    | /villages/create | Login users    | Need 1 request body: name  and auth: bearer token|
|          | List          | /villages       | All users       | |
|          | Detail        | /villages/:id   | All users       | Need 1 param: id |
|          | Update        | /villages/update | Login users     | Need 2 request body: id, name  and auth: bearer token |
|          | Delete        | /villages/delete | Login users     | Need 1 request body: id and auth: bearer token |

## Pre-Requisites
* [node 16.10.0](https://nodejs.org/en/download/)
* [npm 7.24.0](https://www.npmjs.com/package/download)
* [AdonisJS CLI](https://www.npmjs.com/package/@adonisjs/cli)
* [MySQL](https://www.mysql.com/downloads/)
* [Postman](https://www.postman.com/downloads/) 
## How to run
* Clone this repository
``` 
git clone https://github.com/Selvyfitriani/simple-dedi 
```
* Install dependencies
``` 
npm install 
```
* Do Migrations
```
adonis migration:run
```
* Run app
```
adonis serve --dev
```

App will running on port http://localhost:3333. You can test this app using postman. To make it easy, please import this collection into your postman
```
https://www.getpostman.com/collections/994ce9f672e325df10cd
```

---

If there are any inputs, please contact me through email (selvyfiriani@gmail.com) Thanks!
