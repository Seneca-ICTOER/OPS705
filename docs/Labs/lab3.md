---
id: lab3
title: Azure Lab 3
sidebar_position: 3
description: Azure Lab 3 - Linux and the Command Line Interface (CLI)
---

# Azure Lab 3: Linux and the Command Line Interface

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
Creating subdirectories within your home directory makes it more **efficient** to save and access files on your Linux server.

A comparison would be rooms in a house. If there were no rooms, just one large room in a 3,000 square foot house, it would be "messy" and difficult to locate items. Each room in a house is used to for a specific purpose to be more productive to perform a task such as a kitchen, bedroom, bathroom, etc.

You will be creating the following directory structure within your user home directory. The directories you will create in this investigation are in blue.

![Image: Investigation 1 Directory Structure](/img/L3I1-directorystructure.png)

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

To check for mistakes, a **shell script** has been created to check your work for you. 

**If the checking shell script detects an error**, then it will tell you and offer constructive feedback on how to fix that problem so you can re-run the checking shell scripts until your work is correct.

Perform the following steps:
1. Change directories to ~/bin: `cd ~/bin`
1. Make sure you have the most recent lab files: `git pull`
1. Change back to your home directory: `cd ~`
1. Run the checking script for your Linux work in this lab: `labcheck3.1.sh`
1. **If you encounter errors:**
    * Review the feedback.
    * Make the necessary corrections.
    * Re-run the checking script.
1. If all checks pass (with the congratulations message), take a screenshot of the **full script output** (don't leave any text out or cut off). You'll need it for later.

### Part 2: Viewing Directory Contents / Copying & Moving Directories
Now that you have learned how to efficiently create your directory structure, you will now learn how to issue Linux commands to **view directory contents** as well as **copy** and **move** directories.

Perform the following steps:

1. Ensure you're starting from your user's home directory:

    ```bash
    cd ~
    ```

1. Let's confirm you can see the directory structure you created in the previous investigation:

    ```bash
    tree
    ```

1. Alternatively, we can also use the `-R` option with the `ls` command to display all directories and subdirectories from a specified starting point *recursively*. Run the next two commands one at a time and note the difference between what's displayed:

    ```bash
    ls -lR
    ls -lR uli101xx
    ```

1. You can copy and move entire directories (and their contents recursively) to other directories. Review the syntax example and then run the actual command beneath:

    Syntax example: `cp -R sourcedirectory destinationdirectory`

    ```bash
    cp -R uli101xx xyz100xx
    ```

    It's important to understand that, in a recursive copy, the directory `uli101xx` and anything inside of it are copied *into* the `xyz100xx` directory.


1. Display the directory structure of your user home directory to confirm you copied the `uli101xx` directory successfully:

    ```bash
    tree
    ```

1. Let's move the `apc100xx` directory:

    ```bash
    mv acp100xx xyz100xx/uli101xx/tutorials
    ```

    Notice we didn't use the `-R` option with `mv`. The move command is *always* recursive by default. (Adding `-R` to a move results in a syntax error.)

1. Confirm you moved the `acp100xx` directory successfully:

    ```bash
    tree
    ```

**Confirm your work by running the next check script:**
1. Make certain that your current directory is your home directory.
1. Run the checking script for Part 2: `labcheck3.2.sh`
1. Take a screenshot of the full script output. You'll need it for later.

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.

### Part 3: Removing Directories
You will now learn how to safely remove directories and their contents.

Perform the following steps:
1. Confirm that you are located in your home directory.
1. The `rmdir` command is used to remove empty directories. Remove the empty directory called *tutorials*:

    ```bash
    rmdir uli101xx/tutorials
    ```

1. Confirm that you removed the tutorials directory.
1. Attempt to remove the *uli101xx* directory:

    ```bash
    rmdir uli101xx
    ```

    **NOTE:** You should get an error message, since the *uli101xx* directory is NOT empty.
1. To remove non-empty directories, you can use the `rm -r` option, which can travel down the directory paths and their contents *recursively*:

    ```bash
    rm -r uli101xx
    ```

1. Confirm that the *uli101xx* directory (contained in your user home directory) and its contents have been removed.
1. To safely remove non-empty directories, you can add the `-i` option, which will prompt the user if they wish to remove contents as it your travel recursively down a directory to remove directories and their contents. Issue the following Linux command (entering "y" when prompted):

    ```bash
    rm -ri xyz100xx
    ```

1. You should have removed all directories from the previous step.

**Let's run a checking script to confirm that you have correctly removed all of those directories:**
1. Make certain that your current directory is your home directory.
1. Issue the `tree` command to confirm that all of those recently created directories have been removed.
1. Run the checking script for Part 3: `labcheck3.3.sh`

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.

## Investigation 2: Absolute / Relative / Relative-to-Home Pathnames
The best way to learn about different types of file pathnames is to use them while issuing Linux commands and see which pathnames (or combination of pathnames) is the most efficient (i.e. requiring the least number of keystrokes).

In the following investigation (Parts 1-3), you will create the exact same directory structure each time, but using a different path type.

First, let's confirm:
1. Connect to your CentOS VM's CLI.
1. Issue a command to confirm you are located in your **home** directory.

In this investigation, you will create the blue sections of this tree diagram. 

![Image: Investigation 2 Directory Structure](/img/L3I2-directorystructure.png)

### Part 1: Using Absolute Pathnames
Let's create the following directory structure under your home directory by issuing the `mkdir` command using only **absolute** pathnames.

1. Issue the following Linux command to create the directory structure displayed above using **absolute pathnames** (remember to substitute 'youruserid' with your actual userid):

    ```bash
    mkdir -p /home/youruserid/tutorial3/practice/commands /home/youruserid/tutorial3/practice/examples /home/youruserid/tutorial3/notes/lesson1 /home/youruserid/tutorial3/notes/lesson2
    ```

1. Confirm that you properly created the directory structure:

    ```bash
    tree /home/youruserid/tutorial3
    ```

1. Notice that using absolute pathnames with this Linux command requires a lot of typing.

### Part 2: Using Relative-to-Home Pathnames
Let's remove this directory structure, and issue the same command using a **relative-to-home** pathname instead.

1. To remove this directory structure, issue the following Linux command (enter "y" at each prompt to remove ALL contents):

    ```bash
    rm -ri /home/youruserid/tutorial3
    ```

1. Confirm that the directory structure has been removed:

    ```bash
    tree
    ```

1. Create the same directory structure using *relative-to-home pathnames*:

    ```bash
    mkdir -p ~/tutorial3/practice/commands ~/tutorial3/practice/examples ~/tutorial3/notes/lesson1 ~/tutorial3/notes/lesson2
    ```

    * NOTE: To generate the `~` character, hold down SHIFT and press the button to the left of the number 1 above the text on your keyboard.
1. **Question:** Did this command require less typing than the previous command using absolute pathnames?
1. Confirm the directory structure was properly created:
    ```bash
    tree
    ```

### Part 3: Using Relative Pathnames
Let's remove the *tutorial3* directory and its contents and issue the same command using **relative pathnames**.

1. Issue the same command as you did in Part 2 to remove the *tutorial3* directory and its contents safely.
1. Issue a Linux command to confirm you removed the *tutorial3* directory and its contents.
1. Create the same directory structure using relative pathnames:

    ```bash
    mkdir -p tutorial3/practice/commands tutorial3/practice/examples tutorial3/notes/lesson1 tutorial3/notes/lesson2
    ```

1. Issue a command to verify that the proper directory structure was created.

You may think that issuing Linux file management commands are better using relative or relative-to-home pathnames instead of absolute pathnames, but that is not always true.

Since the current directory location was your home directory, it makes sense to use relative or relative-to-home pathnames. On the other hand, what if we changed the location to a different directory? For example, `/bin`?

**Let's run a checking script to verify you created the Part 1-3 directories correctly:**
1. Make certain that your current directory is your home directory.
1. Issue the `tree` command to confirm that all of those recently created directories have been removed.
1. Run the checking script for Parts 1-3: `labcheck3.4.sh`

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.

### Part 4: Pathing Practice
![Image: Investigation 2 Directory Structure](/img/L3I2-directorystructure.png)

When performing the next series of steps, refer to the tree diagram above. Learning to reference a tree diagram on a quiz, midterm or final exam can help to prevent errors and loss of marks!

Perform the following:
1. Change to the examples directory in your recently-created directory structure:

    ```bash
    cd tutorial3/practice/examples
    ```
    
1. Confirm you are located in the *examples* directory.
1. Remembering that we are located in the *examples* directory, issue the following Linux command using a relative pathname to display files in the */bin* directory:

    ```bash
    ls ../../../../../bin
    ```

1. Now issue the following Linux command using an absolute pathname:

    ```bash
    ls /bin
    ```
     **Question:** Which type of pathname would be the best to use in this situation?
1. Let's copy the program `ls` (contained in the */bin* directory) to your user home directory by using the `cp` command.
1. First, copy the *ls* command from the */bin* directory to your home directory using absolute pathnames:

    ```bash
    cp /bin/ls /home/youruserid/
    ```
1. Now let's issue the previous command using just relative pathname (remember, our current directory location is *examples*):

    ```bash
    cp ../../../../../bin/ls ../..
    ```

    **TIP: For relative pathnames that move up multiple parent directories such as these, it is HIGHLY RECOMMENDED to view the tree diagram and check for the correct number of .. symbols. Students commonly make mistakes and lose marks on these type of questions!**
1. Let's issue the command using one absolute pathname and a relative pathname:

    ```bash
    cp /bin/ls ../..
    ```

    **Question:** What did this command do?
1. Let's issue the same command using one absolute pathname and a relative-to-home pathname:

    ```bash
    cp /bin/ls ~
    ```

    **Question:** What did this command do?
1. Let's copy the `ls` program from the */bin* directory to your current directory (i.e. examples):

    ```bash
    cp /bin/ls .
    ```

1. Issue the following Linux command:

    ```bash
    cp /bin/ls ./ls.bk
    ```

    **Question:** What does this command do?

**Let's run a checking script to make certain you performed the recently-issued commands correctly:**
1. Make certain that your current directory is your home directory.
1. Issue the `tree` command to confirm that all of those recently created directories have been removed.
1. Run the checking script for Part 4: `labcheck3.5.sh`

If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message.

## Lab Submission
Submit to Blackboard full-desktop screenshots (PNG/JPG) of the following:
1. A successful run of `labcheck3.1.sh`
1. A successful run of `labcheck3.2.sh`
1. A successful run of `labcheck3.3.sh`
1. A successful run of `labcheck3.4.sh`
1. A successful run of `labcheck3.5.sh`

**Reminder:** Make sure to fully stop your VMs when you're done!

= Licensing =

Author: Chris Johnson

License: [LGPL version 3](https://www.gnu.org/licenses/lgpl.html)
