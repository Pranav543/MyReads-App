# MyReads Project

This project is my implementation of MyReads app which is the final assessment project for the Udacity's React Fundamentals course, part of the React Nanodegree Program.

MyReads is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read.

## Functionality

Main screen displaying bookshelves for "Currently Reading", "Want to Read", and "Read" books.
Search screen to find new books.
A control on each book, on any screen, that allows for setting which shelf it displays on (or none).


## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── components
        ├── Homepage.js #responsible for displaying homepage and makes API calls
        ├──BookShelf.js #responsible for sorting book by their shelf category and displaying it
        ├──SearchBox.js #displays serchbox and passes query to SearchPage
        ├──SearchPage.js #performs API call and displays all books which match query
        └──Book.js # rsponsible for displaying every book
```
