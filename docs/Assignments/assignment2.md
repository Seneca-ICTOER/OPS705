---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: Assignment 2 - Installing WordPress in AWS (PaaS)
---

# Assignment 2: Installing WordPress in AWS (PaaS)

## Purpose of Assignments in OPS705

Unlike labs, assignments have minimal instructions. You are given specifications on what the assignment needs, and you must rely on your previous work in the course. If the assignment doesn't have the command you need, you can find it in your labs. And don't be afraid to do a little research!

Assignments in OPS705 are built as an assessment of your ability to meet the course objectives. As such, your professor is unable to provide detailed help.

## Objectives of Assignment 2

In this assignment, you will install a WordPress blog in AWS using *Elastic Beanstalk* and *RDS*. 

**You will construct this assignment in our *AWS Academy Learner Lab* classroom.**

The purpose of this assignment is to demonstrate your knowledge of Amazon Web Services gathered from our lectures and assigned labs and to show you how you can leverage PaaS to build a web application easily.

## Task 1: Networking
In this task, you will create all the networking required for your new web application.

### Virtual Private Cloud
Create a new VPC with the following settings:
1. **VPC only**
1. Name: **Wordpress VPC**
1. IPv4 CIDR: **10.0.0.0/16**
1. Leave all other settings on default

Once created, modify this VPC (*Edit VPC Settings*) with the following actions:
1. Enable DNS resolution: **Checked**
1. Enable DNS hostnames: **Checked**

### Subnets
Create two private IPv4 subnets in this VPC:
1. Private Subnet 1 – **10.0.1.0/24 – us-east-1a**
1. Private Subnet 2 – **10.0.2.0/24 – us-east-1b**

Create two public IPv4 subnets in this VPC:
1. Public Subnet 1 – **10.0.11.0/24 – us-east-1a**
1. Public Subnet 2 – **10.0.12.0/24 – us-east-1b**

Edit your public subnets (*Edit subnet settings*) with the following settings:
1. Enable auto-assign public IPv4 address: **Checked**
1. Enable resource name DNS A record on launch: **Checked**

### Internet Gateway
Create a new Internet Gateway with the following:
1. Name: **Wordpress Gateway**
1. Once created, attach it to your Wordpress VPC.

### Route Tables
Find your default route table for your Wordpress VPC and add the name: **VPC-local Route Table**

Create a second route table:
1. Name: **Wordpress Website Route Table**
1. VPC: **Wordpress VPC**
1. Routes Entry 1:
    1. Destination: **10.0.0.0/16**
    1. Target: **local**
1. Routes Entry 2:
    1. Destination: **0.0.0.0/0**
    1. Target: **Internet Gateway – Wordpress Gateway**

### Security Groups
Create a security group with the following settings:
1. Name: **Wordpress Website SG**
1. Description: **Allows HTTP traffic inbound**
1. VPC: **Wordpress VPC**
1. Inbound Rule:
    1. Type: **HTTP**
    1. Source: **Anywhere – IPv4 (0.0.0.0/0)**

Create a security group with the following settings:
1. Name: **Wordpress Database SG**
1. Description: **Allows MySQL traffic locally**
1. VPC: **Wordpress VPC**
1. Inbound Rule:
    1. Type: **MYSQL/Aurora**
    1. Source: **Custom** (Select *Wordpress Website SG* in the search field)

Edit both public subnets’ route table associations to: **Wordpress Website Route Table**

## Task 2: Database
Create a new RDS instance with the following settings:
1. Engine type: **MySQL**
1. Engine Version: **MySQL 8.0.32** (or current latest version available)
1. Templates: **Free tier**
1. DB instance identifier: **wordpress-db**
1. Master username: **admin**
1. Auto generate a password: **Checked**
1. DB instance class: **db.t3.micro**
1. Allocated storage: **5**
1. Enable storage autoscaling: **Unchecked**
1. Virtual private cloud (VPC): **Wordpress VPC**
1. DB subnet group: **Create new DB Subnet Group** (if you're redoing your database creation, there will already be an entry here. Make sure you're using the *Wordpress VPC* in the setting above!)
1. Public access: **No**
1. VPC security group: **Choose existing**
1. Existing VPC security groups: 
    1. **Remove default VPC**
    1. **Add *Wordpress Database SG*** (look to see that it's there below the dropdown after you select it)
1. Availability Zone: **us-east-1a**
1. Monitoring > Enable Enhanced monitoring: **Unchecked**
1. Below the Monitoring section, Additional configuration > Initial database name: **wordpress** (Write the database name down! You will need this later.)
1. Enable automated backups: **Unchecked**
1. Enable encryption: **Unchecked**

Once the database has finished creating, click on the *View connection details* button by the green success message at the top of the page. This gives you your database password.

Store the following connection information about your RDS instance in a saved document. You'll need it later:
1. **Endpoint**
1. **Initial database name**
1. **Master username**
1. **Master password**

## Task 3: Wordpress Source Code Modification
### Explanation

From your work with Wordpress in Assignment 1, you know you can simply upload the source code and the first time you load the webpage, you'll be asked for database connector information.

However, Elastic Beanstalk applications are meant to be disposable.

In A1, when you were adding that database connector info, it was being saved in a file called *wp-config.php* on the webserver VM. This is fine for that kind of setup, but ***in Elastic Beanstalk, changes made to static HTML or PHP are not saved if the Beanstalk application restarts***, which it will do often. Whenever the application restarts, it will reload from the source zip file and the original, empty connector file. If you did as in A1, you'd have to constantly re-enter your DB connector info every time you started up your Learner Lab environment.

We *could* add the DB connector info to *wp-config.php* manually before we upload the source code, but there's a much better way.

We use **environment variables** to allow us to put all the info in the Elastic Beanstalk application wizard directly. That way, every time the application restarts and reloads from the source code zip, it'll then read our saved connector information from AWS itself. Read below for details and steps.

**Note:** All other information, like the Wordpress website name, users, theme settings, blog posts, etc., are saved in the actual database you created in RDS. This database does not get reset when the Elastic Beanstalk application restarts, so your actual blog data will remain intact.

### Download and Unzip - Local Computer
1. On your local computer, download the current Wordpress source code from here: https://wordpress.org/latest.zip
1. Unzip the file. You should end up with a *wordpress* directory. (Do not delete the original .zip file)

### Modify Wordpress Configuration File

#### Duplicate and Open Configuration File
1. In the local *wordpress* folder, find a file called: **wp-config-sample.php**
1. Duplicate this file, and call it: **wp-config.php**
1. Open **wp-config.php** in a plain text editor. I recommend Sublime. (https://www.sublimetext.com/download)

#### Adding Database Connector Info as Environment Variables
In this file (wp-config.php), you will be adding database connector information as ***environment variables***, not the actual connector information. (We'll add that information later.)

Find the following lines and add the bolded values:
1. define('DB_NAME', **getenv('DB_NAME')**);
1. define('DB_USER', **getenv('DB_USER')**);
1. define('DB_PASSWORD', **getenv('DB_PASSWORD')**);
1. define('DB_HOST', **getenv('DB_HOST')**);

#### Adding Authentication Unique Keys and Salts as Environment Variables
In the same file (wp-config.php), you'll be adding the authentication keys and salts as ***environment variables***.

Find the following lines and add the bolded values:
1. define('AUTH_KEY', **getenv('AUTH_KEY')**);
1. define('SECURE_AUTH_KEY', **getenv('SECURE_AUTH_KEY')**);
1. define('LOGGED_IN_KEY', **getenv('LOGGED_IN_KEY')**);
1. define('NONCE_KEY', **getenv('NONCE_KEY')**);
1. define('AUTH_SALT', **getenv('AUTH_SALT')**);
1. define('SECURE_AUTH_SALT', **getenv('SECURE_AUTH_SALT')**);
1. define('LOGGED_IN_SALT', **getenv('LOGGED_IN_SALT')**);
1. define('NONCE_SALT', **getenv('NONCE_SALT')**);

![Image: Adding database connector information to wp-config.php.](/img/a2_wp-config-example.png)
*Figure 1: Adding database connector information to wp-config.php.*

### Zip As New File and Rename - Local Computer
1. Find the **wordpress** folder on your local computer.
1. *Zip the entire wordpress directory*, not just the files inside. (Use the zip compression protocol. Don't use something else like .rar.)
1. Rename your new zip file: **wordpress-6.2-*modded*.zip** (Use whatever version the source zip file has.)

## Task 4: Elastic Beanstalk
Create a new Elastic Beanstalk application with the following settings:

### Environment Tier
Select: **Web server environment**

### Main settings
1. Application name: **wordpress**
1. Environment name: **Wordpress-env**
1. Platform: **PHP**
1. Platform branch: **PHP 8.1** (or current latest)
1. Application code: **Upload your code**
1. Choose file: **wordpress-6.2-*modded*.zip** (From your local computer)
1. Version label: **wordpress-6.2** (Use the version from your zip filename)


### Configure more options

#### Software
Before beginning this section, you will need two things:
1. Your database connector information (you saved this, right?)
1. Randomly generated auth keys and salts from here: https://api.wordpress.org/secret-key/1.1/salt/ (it's a good idea to save these in a text file, too)

##### Settings:
1. Document root: **/wordpress**
1. Environment properties
    1. DB_HOST: ***your RDS database URL***
    1. DB_NAME: ***initial database name***
    1. DB_USER: **admin**
    1. DB_PASSWORD: ***your auto-generated database password***
    1. AUTH_KEY: **(use gathered info from salt page)**
    1. SECURE_AUTH_KEY: **(use gathered info from salt page)**
    1. LOGGED_IN_KEY: **(use gathered info from salt page)**
    1. NONCE_KEY: **(use gathered info from salt page)**
    1. AUTH_SALT: **(use gathered info from salt page)**
    1. SECURE_AUTH_SALT: **(use gathered info from salt page)**
    1. LOGGED_IN_SALT: **(use gathered info from salt page)**
    1. NONCE_SALT: **(use gathered info from salt page)**

Hint: None of these values should have single quotes in them. (i.e. ')

#### Security
1. Service role: **LabRole**
1. EC2 key pair: **vockey**
1. IAM instance profile: **LabInstanceProfile**

#### Monitoring
1. System: **Basic**

#### Managed updates
1. Enabled: **Unchecked**

#### Notifications
1. Email: ***YourSenecaE-mailAddress***

#### Network
1. VPC: **Wordpress VPC**
1. Public IP address: **Checked**
1. Instance subnets: **Public Subnet 1, Public Subnet 2** (both checked)
1. Database subnets: **Private Subnet 1, Private Subnet 2** (both checked)

#### Instances
1. EC2 Security Groups: **Wordpress Website SG** (both checked)

### Create the application.

While you wait for the creation to complete, check your e-mail to confirm your notification subscription.

## Task 5: Site Configuration
Open the URL presented in the Wordpress EBS instance and begin the site setup.

### Site Information
Set the following site information:
1. Site Title: **OPS705 Fall 2023 A2 - *Full Name***
1. Username: ***yourSenecaUsername***
1. Password: **Choose a strong password** (do not reuse the DB password!)
1. Your Email: ***yourSenecaEmailAddress***
1. Search engine visibility: **Unchecked**

## Task 6: Blog Posts
*Delete the first template post.* In your own words, answer the following questions in individual blog posts:

### Blog Post: 1
How would you describe how you set up this Elastic Beanstalk+Database instance of Wordpress to a student who has just finished OPS705 Week 1?

### Blog Post: 2
What was the most difficult part of this assignment for you?

### Blog Post: 3
What parts of this assignment did you find easier compared to our IaaS version of Wordpress from Assignment 1?

### Blog Post: 4
In the context of this assignment, briefly describe the function of the following:
1. VPCs
1. Subnets
1. Security groups
1. Route tables
1. Internet gateways

## Assignment Submission
As with your previous assignment, your work will be evaluated by accessing your site directly. 

To formally submit, you must include the following in Blackboard:
1. In Q1 of your submission, paste the URL of your new site. (The main public landing page, not the admin view.)
1. A single full-browser screenshot showing your active and complete Wordpress blog.
1. Attach a single full-browser screenshot showing Blog Post 1.
1. Attach a single full-browser screenshot showing Blog Post 2.
1. Attach a single full-browser screenshot showing Blog Post 3.
1. Attach a single full-browser screenshot showing Blog Post 4.

Once submitted, you can leave your Elastic Beanstalk application running, but **shutdown your Learner Lab environment**.
