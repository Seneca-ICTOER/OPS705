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
