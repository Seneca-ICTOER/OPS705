---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: Assignment 1 - Installing WordPress On A VM
---

# Assignment 1: Installing WordPress On A VM

## Purpose of Assignments in OPS705

Unlike labs, assignments have minimal instructions. You are given specifications on what the assignment needs, and you must rely on your previous work in the course. If the assignment doesn't have the command you need, you can find it in your labs. And don't be afraid to do a little research!

Assignments in OPS705 are built as an assessment of your ability to meet the course objectives. As such, I'm unable to provide detailed help.

## Objectives of Assignment 1

In this assignment, you will install a WordPress blog from scratch on a new Azure-based Linux VM.

All components necessary to run the application will be directly inside this virtual machine. In essence, you will be creating a LAMP stack: Linux, Apache, MySQL, and PHP. This is what you'll need to get Wordpress working.

**Hint: Many of these commands require elevated root privileges.**

Specifications are below:

## Azure Linux VM Configuration
Create a new, third CentOS Linux VM with the following specifications:

1. **Virtual machine name:** assign1-username
1. **Virtual machine size:** Standard_B1s
1. **IP address:** Public

All other options, set up as you did with your previous Azure Linux VM.

### Post-Installation Setup
1. Fully update the system.
1. Only allow public-key authentication.
1. SSH must only listen on port 22222.
1. Install the prof key into your new VM under your regular user.

## Apache Configuration
Install apache on your new VM as you have in previous labs. Use default port 80 for the server.

## MySQL Database Configuration
### MariaDB Server Installation

1. Install the **mariadb-server** software and configure its systemd service. Use the default port 3306.

1. Once the database is up, run the command and follow the defaults:  

    ```bash
    mysql_secure_installation
    ```

    (Don't forget to set a root password during this process!)

1. With your new password, log in to your database with the following command:  

    ```bash
    mysql -h localhost -u root -p
    ```
    (Type your password in the prompt)

### Create Separate User and Database for Wordpress
Now that you're logged in, you have to create a separate user and database for Wordpress.
1. Create the new database: 

    ```sql
    CREATE DATABASE wordpress;
    ````
1. Create the new user: 

    ```sql
    CREATE USER wordpressadmin@localhost IDENTIFIED BY 'password';
    ```
    (Change the password to something else!)
1. Give your new user privileges to that database: 

    ```sql
    GRANT ALL PRIVILEGES ON wordpress.* TO wordpressadmin@localhost IDENTIFIED BY 'password';
    ```

1. Tell MariaDB to reload privileges: 

    ```dql
    FLUSH PRIVILEGES;
    ```

Use the database name, user, and password created in this sections Step 1 and Step 2 for your connector information in the WordPress setup later on. Do NOT use root with WordPress.

## PHP Installation
1. Install the latest PHP repository: 

    ```bash
    yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
    ```

1. Enable the repository on your VM: 

    ```bash
    yum-config-manager --enable remi-php74
    ```

1. Install php: 

    ```bash
    yum install php php-mysql
    ```

After the packages are installed, restart the apache service.

## WordPress Website Configuration
To install WordPress, you'll need to download the zip file from online, unzip it, and move the files into your apache web directory.

### Unzip and Move Wordpress Files
1. Download the zip with the following command: 

    ```bash
    wget https://wordpress.org/latest.tar.gz
    ```

1. Unzip the file: 

    ```bash
    tar -zxvf latest.tar.gz
    ```

1. Copy the *contents* of the new directory wordpress into: `/var/www/html/`

    (Don't move the directory itself! Remember your Lab 3 CLI work.)

### Set File Permissions
1. Give apache ownership of all WordPress files: 

    ```bash
    chown -R apache:apache /var/www/html
    ```

1. Give apache proper permissions of WordPress files: 

    ```bash
    chmod -R 755 /var/www/html
    ```


### Disable SELinux
1. TEMPORARILY set selinux to permissive: 

    ```bash
    setenforce 0
    ```


### Wordpress Database Connector Page
1. Paste the URL hostname of your VM into a browser on your local machine.
1. You should see the WordPress database connector page. Use *localhost* as your **Database Host**.

### Wordpress Site Configuration
During Wordpress setup, after the database connection page, use the following values:
* **Site Title:** *Full Name*'s Assignment 1
* **Username:** *senecausername*
* **Password:** *insertpassword*
* **Your Email:** *senecaemailaddress*

### Re-Enable SELinux
When you've finished the installation, go back to your CLI and run: 

  ```bash
  setenforce 1
  ```

## WordPress Blog
Customize your blog by choosing a different **theme** from the default. Choose a *WordPress.org* theme from the menu.

Create three blog entries of the following topics:
1. Have you ever installed services like this outside of OPS705? If so, elaborate.
1. Which types of databases have you used in the DAD program so far? Which has been your favourite?
1. What was the most difficult part of this assignment for you?

## Firewall Configuration
Once you've finished setting up your WordPress blog, you must lock down your CentOS firewall.

Requirements:
1. Must use iptables, not firewalld.
1. Only the following INPUT traffic is allowed:
    1. RELATED,ESTABLISHED
    1. LOOPBACK/ALL
    1. SSH
    1. HTTP
    1. Default policy for INPUT and FORWARD must be set to DROP

## Lab Submission 
As with previous labs, your work will be evaluated by accessing your site directly. 

To formally submit, you must include the following:

1. In the comment section of your submission, paste the URL of your new site.

**Reminder:** Once submitted, please shutdown your VM.
