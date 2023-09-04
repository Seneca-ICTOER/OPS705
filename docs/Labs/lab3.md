---
id: lab3
title: Lab 3
sidebar_position: 3
description: Lab 3 - Linux and the Command Line Interface (CLI)
---

# Lab 3: Linux and the Command Line Interface

## Lab Preparation

### Purpose / Objectives of Lab 3
Understanding how to use a command line interface (CLI) is an incredibly useful skill-set as application developers. It is present in all major operating systems, and is often how you will interact with tools and databases to accomplish tasks a GUI doesn't provide.

In this lab, you will practice working with the Linux command line environment inside your Azure CentOS VM to:
1. Understand the purpose of **directories** and **directory pathnames**.
1. Use common Linux commands to perform **directory management tasks**.
1. Understand the difference between **absolute** , **relative** and **relative-to-home** pathnames
1. Become productive at issuing Linux commands with the most appropriate pathname

If you encounter technical issues, please contact your professor via e-mail or in your section's Microsoft Teams group.

### Minimum Requirements
Before beginning, you must have: 
1. Successfully completed Lab 2.
1. Attended the Week 3 class lecture.
1. Read through the Week 3 slides, and have them handy as a reference for concepts.
1. Your *username*-lnx CentOS VM in Azure.
1. Your Seneca Azure login credentials.
1. Your linked mobile device for 2FA.

## Key Concepts

### Linux Directories
To better **organize** files (text, images, documents, spreadsheets, programs, etc) within your Linux system, they should be stored in **directories**. To further organize many files, directories may contain **sub-directories**. 

The Linux file system is **hierarchical**, like other operating systems such as **Windows**, **macOS**, etc. In Linux (as opposed to Windows), there are no drive letters (such as **C:**, or **D:**). All files and directories appear under a single ancestor directory called the "**root directory**".

Learning how to issue Linux commands for **navigating** and **manipulating** directory and files within the the Linux filesystem are **essential skills** for Linux users and Linux system administrators (i.e. *sysadmins*).

In the Linux OS, the **root directory** / is the  starting directory, and other *child directories*,  *grandchild directories*, etc. can be created as required. This hierarchical structure resembles an "*upside-down tree*".

![Image: Linux - Directory Structure](/img/linux-directory-structure.png)

There is actually a command called `tree` that displays a **directory tree diagram**! 

To install the `tree` command within Linux:

```bash
sudo yum install tree
```

### Directory Pathnames

> A **pathname** is used to specify a **route to a file** within the file system.
>
>![Image: Linux - Pathnames](/img/linux-pathname.png)
>
> A pathname **points** to a file system location by **following the directory tree hierarchy** expressed in a string of characters in which path components, separated by a delimiting character, represent each directory. The **delimiting character** is most commonly the slash ("**/**").
>
> (Reference: [Wikipedia](https://en.wikipedia.org/wiki/Path_(computing)))

The following table displays and defines **commonly used directories** (listed by directory pathname) for for ALL Linux filesystems:

![Image: Linux - Common Directories](/img/linux-common-directories.png)

| Directory Pathname    | Purpose                                        |
|-----------------------|-------------------------------------------------|
| `/`                   | Root directory (ancestor to all directories)    |
| `/home`               | Used to store all users’ home directories       |
| `/home/username/`     | A specific user's home directory               |
| `/bin`                | Common system binaries (commands)               |
| `/usr/bin`            | Common utilities (commands) for users.          |
| `/usr/sbin`           | Common utilities for system administration      |
| `/etc`                | System administration files (e.g., passwd)      |
| `/var`                | Dynamic files (log and mail files)              |
| `/tmp`, `/var/tmp`    | Temporary files for programs                    |
| `/dev`                | Device driver files (terminals, printers, etc.) |

When you log into your Linux user account, you are automatically directed to your **user's home** directory. This directory is where the user can store files and create subdirectories to organize their files.

### Pathname Types

There are different types of file pathnames that we can use to access a directory or text file.

For Example:
* **Absolute Pathname**: `/home/userid/uli101/cars.txt`
* **Relative Pathname**: `uli101/cars.txt` (this assumes you are in your home directory)
* **Relative-to-Home Pathname**: `~/uli101/cars.txt`

These types of file pathnames can make it more efficient (i.e. less keystrokes for users to type) when issuing Unix and Linux commands.

#### Absolute Pathnames

An **absolute pathname** is a path to a file or directory **always beginning from the root directory** (i.e. `/`).

This type of pathname is referred to as **absolute** because the pathname always begins from the **root directory**, *regardless the location or your current directory*. In other words, this type of pathname requires that you always provide the **FULL** pathname starting with the root directory.

Advantages of using Absolute Pathnames:
* Useful if you do not know your current directory location
* Understand the location of file within the filesystem.

Examples:
* `ls /bin`
* `ls /home/your-user-id/uli101/examples`

#### Relative Pathnames
A **relative pathname** is a path to a file or directory that begins from your **current** directory. This is called relative because it is used to locate a specific file *relative to your current directory*.

**NOTE:** In order to use relative pathnames, it is absolutely necessary that you know the location of your current directory!

Relative Pathname Symbols:
* `.`   A period symbol "." represents the **current** directory
* `..` Two consecutive period symbols ".." represents the **parent directory** (i.e. one level up)

Advantages of using Relative Pathnames:
* Possible shorter pathname (less typing)

Examples:
* `ls ../../../bin`
* `ls examples`
* `ls ./examples`

#### Relative-to-Home Pathnames
A **relative-to-home** pathname begins with the tilde character ( i.e. **~**) to represent the user’s home directory.

The tilde character `~` stores the path of the user’s home directory (i.e. **~** = **/home/current-user-id**)

You can immediately place a username after the tilde to represent another user’s home directory (e.g. **~otheruserid** = **/home/otheruseid**)

Examples:
* `ls ~/uli101/examples`
* `ls ~otheruserid/uli101/notes`

**NOTE**: Deciding which **type of pathname** to use depends on many factors including:
1. Knowledge of current directory
2. Knowledge of directory structure
3. Currently directory location
4. Type of file management command that is being used

## Investigation 1: Creating and Managing Directories
In this investigation, you will learn how to **create**, **navigate**, **list directory contents** and **remove directories** in your user account.

**Directory File Naming Rules**

Before you learn how to create directories, it is important to understand what represents an appropriate **directory filename**.

Listed below are some common **file naming rules**:

* Linux characters are **case-sensitive**. It is recommended to be consistent (e.g. use all lowercase letters)
* Adopt a **consistent directory naming scheme** (this will help you to navigate within your directory structure)
* Make your directory names **meaningful**
* **Avoid non-alphanumeric characters**, as they may have a special meaning to the system that will make your work more difficult when changing to directories, etc.
* **Avoid using spaces** for directory names (consider periods, hyphens, and underscores instead)

### Part 1: Directory Creation
(Image:directory-structure-3.png - **Fig. 4: Tree diagram** of directory structure to create in your **home** directory (displayed in blue text).)

Creating subdirectories within your home directory makes it more **efficient** to save and access files on your Linux server.

A comparison would be rooms in a house. If there were no rooms, just one large room in a 3,000 square foot house, it would be "messy" and difficult to locate items. Each room in a house is used to for a specific purpose to be more productive to perform a task such as a kitchen, bedroom, bathroom, etc.

You will be creating the following directory structure within your home directory (refer to diagram on the right side (*Fig. 4*)).

#### Creating Directories
We will now create our first level of directories.

> **IMPORTANT: For the following commands, you will be using *your* Seneca username to replace the text "your-seneca-id" in a pathname.**
>
>For example, if your Seneca user ID was **mkhan** then you would write the pathname */home/your-seneca-id* as: **/home/mkhan**

**Perform the following steps:**
1. SSH into your Azure Linux VM.
1. Confirm that you are located in your home directory (*/home/your-seneca-id*):

    ```bash
    pwd
    ```

1. Create a new directory called *uli101xx* in your home directory:

    ```bash
    mkdir /home/your-seneca-id/uli101xx
    ```
1. You should always confirm that you have created a directory. This can be done by issuing the `ls` command:

    ```bash
    ls /home/your-seneca-id/uli101xx
    ```

1. There are no files contained in this newly-created directory; therefore, no contents appear. A useful option, `-d`, can be used to confirm that the actual directory has been created as opposed to viewing the contents of the directory:
    ```bash
    ls -d /home/your-seneca-id/uli101xx
    ```
    * **NOTE:** The `-d` option will ***never*** show the contents of a directory. If you're asked to list files, don't use `-d`!

1. You should now see just the directory listed. You can also combine the `-d` and `-l` options to provide more detail regarding the newly-created directory:

    ```bash
    ls -d -l /home/your-seneca-id/uli101xx
    ```

1. **Question:** How can you confirm from the output of this command that `uli101xx` is a directory? (Hint: Look for the *d* designation in the output.)
1. Issue the following Linux command:

    ```bash
    ls -ld /home/your-seneca-id/uli101xx
    ```

1. **Question:** Is the output from this command the same was the output from the previous command? If so, what does this say about how to use multiple options for Linux commands?
1. Create the `acp100xx` and `xyz100xx` directories:

    ```bash
    mkdir /home/your-seneca-id/acp100xx /home/your-seneca-id/xyz100xx
    ```

    * **NOTE:** You can create multiple directories by issuing the `mkdir` command with multiple arguments. (**Make sure there's a space between each path!**)

1. Confirm that those directories have been created:
    ```bash
    ls -ld /home/your-seneca-id/acp100xx /home/your-seneca-id/xyz100xx
    ```

Using a FULL pathname starting from the root directory (i.e. /) requires is a LOT of typing!

Since we are already located in our home directory, we don't have to start from the root directory. This is called a *relative* pathname. See the below for examples.

#### Creating Subdirectories

We will now create the subdirectories that are contained in the `uli101xx` directory:

1. Move to the `uli101xx` directory using a relative pathname:

    ```bash
    cd uli101xx
    ```

1. Confirm that your current location is in the `uli101xx` directory (*/home/your-seneca-id/uli101xx*):

    ```bash
    pwd
    ```

1. Create subdirectories called `notes`, `tutorials` and `samples`:

    ```bash
    mkdir notes tutorials samples
    ```

1. Confirm that those directories have been created:

    ```bash
    ls
    ```

There are better ways to create the same directory structure without using the `cd` command.

#### Creating Subdirectories Without `cd`
Issuing the `cd` command prior to issuing other commands indicates to others that you are a novice or "newbie". You can actually lose marks on quizzes or tests if you issue multiple Linux commands to performed tasks that can be performed using a single Linux command with pathnames.

Here we'll show you how to create directories and subdirectories without having to move inside them.

First, return to your home directory:
1. Return to your home directory:

    ```bash
    cd
    ```

1. Confirm that you are now located in your home directory (*/home/your-seneca-id*):
    ```bash
    pwd
    ```

Although we will teach you how to remove directories and their contents in another investigation, let's remove the created directory structure and recreate the same directory structure using just one command using pathnames:
1. Remove all of the directories that you have created:

    ```bash
    rm -r uli101xx acp100xx xyz100xx
    ```

1. Confirm that the `uli101xx`, `acp100xx` and `xyz100xx` have been removed:

    ```bash
    ls
    ```

1. Issue the following **single Linux command** to create the entire directory structure:

    ```bash
    mkdir -p uli101xx/notes uli101xx/tutorials uli101xx/samples acp100xx xyz100xx
    ```

    * **NOTE:** The `-p` option allows "parent" directories to be automatically created first to then create their subdirectories.
1. Confirm that all of the directories have been created:

    ```bash
    ls -ld uli101xx/ uli101xx/notes uli101xx/tutorials uli101xx/samples acp100xx xyz100xx
    ```

#### Running a Shell Script to Check Your Work

Although you are being asked to create the directory structure, you might have made some mistakes.

For example:
* Forgetting to create a directory.
* Making syntax errors (eg. spelling or mixing up character case)
* Not creating subdirectories within specified directories.

To check for mistakes, a **shell script** has been created to check your work. **If the checking shell script detects an error**, then it will provide feedback and offer constructive feedback on how to fix that problem so you can re-run the checking shell scripts until your work is correct.

Perform the following steps:

1. Change directories to: **~/bin**
1. Make sure you have the most recent lab files: `git pull`
1. Change back to your home directory.
1. Run the checking script for Part 1: `labcheck3.1.sh`
* If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
* If you receive a congratulations message that there are no errors, then proceed to the next part.
1. Assuming you received a **congratulations** message, take a screenshot of the full script output. You'll need it for later.

### Part 2: Viewing Directory Contents / Copying & Moving Directories
Now that you have learned how to efficiently create your directory structure, you will now learn how to issue Linux commands to **view directory contents** as well as **copy** and **move** directories.

Perform the following steps:

1. Issue the following Linux command: `tree`
1.* **NOTE:** You should see the directory structure that you created in the previous investigation. You can also issue the tree command combined with a directory pathname to display the directory structure for a specific scope.
1.* You can also use the -R option for the ls command to display all directories and subdirectories for a specified directory path (referred to as a recursive directory listing).
1. Issue the following Linux command: `ls -lR`
1.* What directories do you see?
1. Issue the following Linux command: `ls -lR uli101xx`
1.* Note the differences between both of these commands (i.e. using and not using a pathname).
1. You can copy and move entire directories (and their contents) to other directories. Issue the following Linux command: `cp -R uli101xx xyz100xx`
1. Display the directory structure of your home directory to confirm you copied the uli101xx directory: `tree`
1. Issue the following Linux command: `mv acp100xx xyz100xx/uli101xx/tutorials`
1. Display the directory structure of your home directory to confirm you moved the acp100xx directory: `tree`

**Let's run a checking script to see if you moved and copied the directories correctly:**
1. Make certain that your current directory is your home directory.
1. Run the checking script for Part 2: `labcheck3.2.sh`
1. Take a screenshot of the full script output. You'll need it for later.

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.

Proceed to Part 3.

### Part 3: Removing Directories
You will now learn how to safely remove directories and their contents.

Perform the following steps:
1. Confirm that you are located in your home directory.
1. The rmdir command is used to remove empty directories. Remove the empty directory called *tutorials*: `rmdir uli101xx/tutorials`
1. Confirm that you removed the tutorials directory.
1. Remove the empty directory called *uli101xx*: `rmdir uli101xx`
1.* **NOTE:** You should get an error message, since the *uli101xx* directory is NOT empty.
1. To remove non-empty directories, you can use the `rm -r` option, which can travel down the directory paths and their contents: `rm -r uli101xx`
1. Confirm that the *uli101xx* directory (contained in your home directory) and its contents have been removed.
1.* **NOTE:** To safely remove non-empty directories, you can add the `-i` option, which will prompt the user if they wish to remove contents as it your travel recursively down a directory to remove directories and their contents.
1. Issue the following Linux command (entering "y" when prompted): `rm -ri xyz100xx`
1.* **NOTE:** You should have removed all directories that you have created.

**Let's run a checking script to confirm that you have correctly removed all of those directories:**
1. Make certain that your current directory is your home directory.
1. Issue the `tree` command to confirm that all of those recently created directories have been removed.
1. Run the checking script for Part 3: `labcheck3.3.sh`

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.
