# Day 01 Notes

## What Node.js is, and how it’s different from a browser

Node.js allows us to run JavaScript on the computer without the browser

## What npm is for

npm is used to install and manage JavaScript packages and tools for our projects

## The difference between Git and GitHub

Git is a version control system that tracks changes in our files. GitHub is an online platform where we can get and share Git repositories

## Every command I learned

node --version : checks the installed Node.js version
npm --version : checks the installed npm version
git init : creates a new Git repository
git add . : adds the files to the staging area
git commit -m "message" : saves the staged changes in a commit
git branch -M main : changes the current branch name to main
git remote add origin URL : connects the local repository to a GitHub repository
git push -u origin main : pushes the local main branch to GitHub
git status : shows the current state of the repository
git log --oneline : shows the commit history in a short format

## One thing that broke during setup, and how I fixed it?

During setup, I first added the wrong GitHub remote URL using "YOUR-USERNAME".
I fixed it by updating the remote URL to my actual GitHub repository URL using "git remote set-url origin"

## My four answers from Task 3.4

if the variable is going to change in the future, const should be stable
it returns object, and this is surprising because array is a type of object
=== compares type and value, == compares value, we use === because it's more specific
I use while when I don't know how many times the code will run
