# **Docker Documentation**

* **What is Docker?** A platform for building, running and shiping applications. With docker, we can easily package our application and run it into anywhere on any machine with docker.

* **Virtual Machines vs Containers**

| Virtual Machines      | Containers |
| -----------  | -----------   |
| An abstraction of a machine (physical hardware) | An isolated environment for running an application |
| With hypervisors, we manage virtual machines      | Allow running multiple apps in isolation |
| Hardware intensive      | are lighweight (start quickly)          |
| | Container uses kernel of the host |

> ## **Linux basic commands...**

* **echo (print whatever we want)** is to check the running containers.
* **echo $0** is to print the current location of shell program.
* **history** is to print all the command we have excuted previously.
* **whoami** is to print the user access.
* **apt update** is used to update the database of packages and this is used before install any package.
* **apt install (package name)** use this command to install a package.
* **apt list** is used to get the list of all the packages available included installed and not-installed.
* **apt remove (package name)** used to remove any package.
* **pwd** means, print working directory, used to give the current working directory location.
* **ls** means, (list), it gives us the list of files and folders available to the current directory.
* **ls -1** is to show the files and sub-directory available to the current directory using column structure.
* **ls -l** (long list) this is also the same result but including with more details.
* **cd** is to change the current directory.
* **cd ~** this will take you root directory.
* **mkdir (folder name)** used to create a new folder.
* **mv (old name) (new name)** used to rename.
* **mv (old name) (new name) /..** used to move file and folder to different directory.
* **touch (file name)** to create a new file.
* **rm (file name)** used to remove one or more file.
* **rm -r (directory name)** used to remove the directory with included files.
* **cat (file name)** this command is used for multiple purpose, if this is a short text file then it used to view the file, this command also uses for concate files in one goal.
* **cat (file 1) > (file 2)** used this command to copy all the data from file 1 and paste it to file 2. This command will override all the text and add the new line.
* **cat (file 1) >> (file 2)** used to copy and append the copied text with the file 2.
* **less (file name)** used to read long files.
* **head -n (line number) (file name)** used to view the first specific lines of a certain file.
* **tail -n (line number) (file name)** used to view the last specific lines of a certain file.
* **grep (text to search)** used to search a string (case sensitive).
* **grep -i (text to search)** used to search a string (case in-sensitive).
* **grep -i -r (text to search) (folder to search in)** used to search a string within a directory.
* **find** used to get all the files and directories recursivly from the current directory (including hidden directory).
* **find (directory to look)** used to look all the directories and files available to a specific directory.
* **find -type d** used to find only the directories.
* **find -type f** used to find only the files.
* **printenv** used to print all the environment variable.
* **printenv (environment variable name)** used to get the value of a sepecific environment variable.
* **echo $(env variable name)** it's also an another way to get the value of a specific environment variable.
* **export (variable name)=(variable value)** used to set an environment variable to the current session.
* **kill (process id)** used to kill a process that is running.

> **Docker basic commands**

* **docker version** for the version.
* **docker image ls** to get all the list of the images.
* **docker run (image name)** to run an image.
* **docker pull (image name)** to pull an image from dockerhub.
* **docker run (image name)** to run the image, if this image available locally then it will run otherwise first pull the image and then run the image.
* **docker ps** is to check the running containers.
* **docker ps -a** is to get all the containers.
* **docker container prune** to remove all the containers.
* **docker run -it (image name)** to run a container in interactive mode. This will gives us shall (shall is a program that passes command to the operating system).
* **docker start -i (container id)** used to start the stop container in interactive mode.
* **exit** used to exit from the interactive terminal mode.

> **Docker development workflow**

* Go into the application.
* For docerizing the application, create Dockerfile and add instruction to package an application to an image.
* This image contains everything that need to run the application.
* Once we have an image, we tell docker to start a container an image. So application gets loaded inside of a container or process (locally).
