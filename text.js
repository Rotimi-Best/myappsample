THIS IS MY GIT TUTORIAL WITH TRAVERSY MEDIA AKA BRAD

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

git clone (link) -> this can download a project from git hub(the link is found on git hub)


--------------------------------------------------
        modified:   app.js


rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git checkout login
Switched to branch 'login'
A       .gitignore
M       app.js

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git status
On branch login
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .gitignore
        modified:   app.js


rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ clear

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ touch
touch: missing file operand
Try 'touch --help' for more information.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git remote add origin https://github.com/Rotimi-Best/myappsample.git

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git remote
origin

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git push -u origin master
Counting objects: 4, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 385 bytes | 192.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/Rotimi-Best/myappsample.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ touch README.md

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git add .

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git commit -m 'Added read me file'
[login 32493d2] Added read me file
 3 files changed, 4 insertions(+), 1 deletion(-)
 create mode 100644 .gitignore
 create mode 100644 README.md

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git push
fatal: The current branch login has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin login


rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git branch master
fatal: A branch named 'master' already exists.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (login)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git push
Everything up-to-date

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ touch README.md

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git add .

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git push
Everything up-to-date

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git commit -m 'Added read me file'
[master 9d022c1] Added read me file
 2 files changed, 27 insertions(+)
 create mode 100644 README.md
 create mode 100644 text.js

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git push
Counting objects: 4, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 901 bytes | 225.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/Rotimi-Best/myappsample.git
   7ee2a08..9d022c1  master -> master

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git add .

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git commit -m 'Editted the read me file'
[master d9d90d0] Editted the read me file
 1 file changed, 2 insertions(+), 2 deletions(-)

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git push
Counting objects: 3, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 387 bytes | 193.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/Rotimi-Best/myappsample.git
   9d022c1..d9d90d0  master -> master

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp (master                                                                               )
$ git pull
Already up to date.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp2
$ git clone https://github.com/Rotimi-Best/myappsample.git
Cloning into 'myappsample'...
remote: Counting objects: 11, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 11 (delta 0), reused 11 (delta 0), pack-reused 0
Unpacking objects: 100% (11/11), done.

rotim@Rotimi-Best-PC MINGW64 /e/PROGRAMMING/Git Tutorial/myApp2
$

