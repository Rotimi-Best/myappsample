git init -> this initializes a repository

git status -> this is to check the status of all the files

git add .  -> Adds all the files in the folder to the repository

git rm --cached index.html -> this is to remove the index file from the repository

git add .html -> add all html file 

git commit -m 'Changed app.js' -> this commits whatever file has been updated

touch .gitignore -> creates a file that will not be included when you use (git add .)
*In the gitignore file you add the name of the file that you dont want to be added to the repository*
most times it is the log files that you need this for.
You can also add an entire directory(folders): in the gitignore file add the folder like this: / (name of folder) 

git branch (name of what you want to create) -/> e.g git branch login -> this creates a branch that would not affect the
master branch which has all the other folders.

git checkout (name of file you want to go back to) -> if you want to go back to a file after using different commands

git merge (name of branch) - this merges branches together you do it from the master branch

git remote lets you see the remote repository that you have