"use strict";(self.webpackChunkOPS705=self.webpackChunkOPS705||[]).push([[814],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"Assignment 1 - Installing WordPress On A VM"},i="Assignment 1: Installing WordPress On A VM",s={unversionedId:"Assignments/assignment1",id:"Assignments/assignment1",title:"Assignment 1",description:"Assignment 1 - Installing WordPress On A VM",source:"@site/docs/Assignments/assignment1.md",sourceDirName:"Assignments",slug:"/Assignments/assignment1",permalink:"/OPS705/Assignments/assignment1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS705/tree/main/docs/Assignments/assignment1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"Assignment 1 - Installing WordPress On A VM"},sidebar:"courseNotesSidebar",previous:{title:"Azure Lab 4",permalink:"/OPS705/Labs/lab4"}},l={},u=[{value:"Purpose of Assignments in OPS705",id:"purpose-of-assignments-in-ops705",level:2},{value:"Objectives of Assignment 1",id:"objectives-of-assignment-1",level:2},{value:"Azure Linux VM Configuration",id:"azure-linux-vm-configuration",level:2},{value:"Post-Installation Setup",id:"post-installation-setup",level:3},{value:"Apache Configuration",id:"apache-configuration",level:2},{value:"MySQL Database Configuration",id:"mysql-database-configuration",level:2},{value:"PHP Installation",id:"php-installation",level:2},{value:"WordPress Website Configuration",id:"wordpress-website-configuration",level:2},{value:"WordPress Blog",id:"wordpress-blog",level:3},{value:"Firewall Configuration",id:"firewall-configuration",level:2},{value:"Lab Submission",id:"lab-submission",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-1-installing-wordpress-on-a-vm"},"Assignment 1: Installing WordPress On A VM"),(0,r.kt)("h2",{id:"purpose-of-assignments-in-ops705"},"Purpose of Assignments in OPS705"),(0,r.kt)("p",null,"Unlike labs, assignments have minimal instructions. You are given specifications on what the assignment needs, and you must rely on your previous work in the course. If the assignment doesn't have the command you need, you can find it in your labs. And don't be afraid to do a little research!"),(0,r.kt)("p",null,"Assignments in OPS705 are built as an assessment of your ability to meet the course objectives. As such, I'm unable to provide detailed help."),(0,r.kt)("h2",{id:"objectives-of-assignment-1"},"Objectives of Assignment 1"),(0,r.kt)("p",null,"In this assignment, you will install a WordPress blog from scratch on a new Azure-based Linux VM."),(0,r.kt)("p",null,"All components necessary to run the application will be directly inside this virtual machine. In essence, you will be creating a LAMP stack: Linux, Apache, MySQL, and PHP. This is what you'll need to get Wordpress working."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint: Many of these commands require elevated root privileges.")),(0,r.kt)("p",null,"Specifications are below:"),(0,r.kt)("h2",{id:"azure-linux-vm-configuration"},"Azure Linux VM Configuration"),(0,r.kt)("p",null,"Create a new, third CentOS Linux VM with the following specifications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Virtual machine name:")," assign1-username"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Virtual machine size:")," Standard_B1s"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"IP address:")," Public")),(0,r.kt)("p",null,"All other options, set up as you did with your previous Azure Linux VM."),(0,r.kt)("h3",{id:"post-installation-setup"},"Post-Installation Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fully update the system."),(0,r.kt)("li",{parentName:"ol"},"Only allow public-key authentication."),(0,r.kt)("li",{parentName:"ol"},"Install the prof key into your new VM under your regular user.")),(0,r.kt)("h2",{id:"apache-configuration"},"Apache Configuration"),(0,r.kt)("p",null,"Install apache on your new VM as you have in previous labs. Use default port 80 for the server."),(0,r.kt)("h2",{id:"mysql-database-configuration"},"MySQL Database Configuration"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("strong",{parentName:"p"},"mariadb-server")," software and configure its systemd service. Use the default port 3306."),(0,r.kt)("p",null,"Once the database is up, run the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_secure_installation")," and follow the defaults (Don't forget to set a root password during this process!)"),(0,r.kt)("p",null,"With your new password, log in to your database with the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql -h localhost -u root -p")," (Type your password in the prompt)"),(0,r.kt)("p",null,"Now that you're logged in, you have to create a separate user and database for Wordpress."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the new database: ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE wordpress;")),(0,r.kt)("li",{parentName:"ol"},"Create the new user: ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER wordpressadmin@localhost IDENTIFIED BY 'password';")," (Change the password to something else!)"),(0,r.kt)("li",{parentName:"ol"},"Give your new user priviledges to that database: ",(0,r.kt)("inlineCode",{parentName:"li"},"GRANT ALL PRIVILEGES ON wordpress.* TO wordpressadmin@localhost IDENTIFIED BY 'password';")),(0,r.kt)("li",{parentName:"ol"},"Tell MariaDB to reload priviledges: ",(0,r.kt)("inlineCode",{parentName:"li"},"FLUSH PRIVILEGES;"))),(0,r.kt)("p",null,"Use the database name, user, and password created in this sections Step 1 and Step 2 for your connector information in the WordPress setup later on. Do NOT use root with WordPress."),(0,r.kt)("h2",{id:"php-installation"},"PHP Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the latest PHP repository: ",(0,r.kt)("inlineCode",{parentName:"li"},"yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm")),(0,r.kt)("li",{parentName:"ol"},"Enable the repository on your VM: ",(0,r.kt)("inlineCode",{parentName:"li"},"yum-config-manager --enable remi-php74")),(0,r.kt)("li",{parentName:"ol"},"Install php: ",(0,r.kt)("inlineCode",{parentName:"li"},"yum install php php-mysql"))),(0,r.kt)("p",null,"After the packages are installed, restart the apache service."),(0,r.kt)("h2",{id:"wordpress-website-configuration"},"WordPress Website Configuration"),(0,r.kt)("p",null,"To install WordPress, you'll need to download the zip file from online, unzip it, and move the files into your apache web directory."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the zip with the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"wget https://wordpress.org/latest.tar.gz")),(0,r.kt)("li",{parentName:"ol"},"Unzip the file: ",(0,r.kt)("inlineCode",{parentName:"li"},"tar -zxvf latest.tar.gz")),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("em",{parentName:"li"},"contents")," of the new directory wordpress into /var/www/html/ (Don't move the directory itself! Remember your Lab 3 CLI work.)"),(0,r.kt)("li",{parentName:"ol"},"Give apache ownership of all WordPress files: ",(0,r.kt)("inlineCode",{parentName:"li"},"chown -R apache:apache /var/www/html")),(0,r.kt)("li",{parentName:"ol"},"Give apache proper permissions of WordPress files: ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod -R 755 /var/www/html")),(0,r.kt)("li",{parentName:"ol"},"TEMPORARILY set selinux to permissive: ",(0,r.kt)("inlineCode",{parentName:"li"},"setenforce 0"))),(0,r.kt)("p",null,"Paste the URL hostname of your VM into a browser on your local machine. You should see the WordPress database connector page. Use ",(0,r.kt)("em",{parentName:"p"},"localhost")," as your ",(0,r.kt)("strong",{parentName:"p"},"Database Host"),"."),(0,r.kt)("p",null,"During Wordpress setup, after the database connection page, use the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Site Title:")," ",(0,r.kt)("em",{parentName:"li"},"Full Name"),"'s Assignment 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username:")," ",(0,r.kt)("em",{parentName:"li"},"senecausername")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password:")," ",(0,r.kt)("em",{parentName:"li"},"insertpassword")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Your Email:")," ",(0,r.kt)("em",{parentName:"li"},"senecaemailaddress"))),(0,r.kt)("p",null,"When you've finished the installation, go back to your CLI and run: ",(0,r.kt)("inlineCode",{parentName:"p"},"setenforce 1")),(0,r.kt)("h3",{id:"wordpress-blog"},"WordPress Blog"),(0,r.kt)("p",null,"Customize your blog by choosing a different ",(0,r.kt)("strong",{parentName:"p"},"theme")," from the default. Choose a ",(0,r.kt)("em",{parentName:"p"},"WordPress.org")," theme from the menu."),(0,r.kt)("p",null,"Create three blog entries of the following topics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Have you ever installed services like this outside of OPS705? If so, elaborate."),(0,r.kt)("li",{parentName:"ol"},"Which types of databases have you used in the DAD program so far? Which has been your favourite?"),(0,r.kt)("li",{parentName:"ol"},"What was the most difficult part of this assignment for you?")),(0,r.kt)("h2",{id:"firewall-configuration"},"Firewall Configuration"),(0,r.kt)("p",null,"Once you've finished setting up your WordPress blog, you must lock down your CentOS firewall."),(0,r.kt)("p",null,"Requirements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Must use iptables, not firewalld"),(0,r.kt)("li",{parentName:"ol"},"Only the following INPUT traffic is allowed:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"RELATED,ESTABLISHED"),(0,r.kt)("li",{parentName:"ol"},"LOOPBACK/ALL"),(0,r.kt)("li",{parentName:"ol"},"SSH"),(0,r.kt)("li",{parentName:"ol"},"HTTP"),(0,r.kt)("li",{parentName:"ol"},"Default policy for INPUT and FORWARD must be set to DROP")))),(0,r.kt)("h2",{id:"lab-submission"},"Lab Submission"),(0,r.kt)("p",null,"As with previous labs, your work will be evaluated by accessing your site directly. "),(0,r.kt)("p",null,"To formally submit, you must include the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the comment section of your submission, paste the URL of your new site.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reminder:")," Once submitted, please shutdown your VM."))}m.isMDXComponent=!0}}]);