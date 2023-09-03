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

(Image:directory-structure-1.png)

To better **organize** files (text, images, documents, spreadsheets, programs, etc) within your Linux system, they should be stored in **directories**. To further organize many files, directories may contain **sub-directories**. 

The Linux file system is **hierarchical**, like other operating systems such as **Windows**, **macOS**, etc. In Linux (as opposed to Windows), there are no drive letters (such as **C:**, or **D:**). All files and directories appear under a single ancestor directory called the "**root directory**".

Learning how to issue Linux commands for **navigating** and **manipulating** directory and files within the the Linux filesystem are **essential skills** for Linux users and Linux system administrators (i.e. ''sysadmins'').

In the Linux OS, the **root directory** / is the  starting directory, and other ''child directories'',  ''grandchild directories'', etc. can be created as required. This hierarchical structure resembles an "''upside-down tree''".

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
