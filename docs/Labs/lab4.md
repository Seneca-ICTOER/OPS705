---
id: lab4
title: Azure Lab 4
sidebar_position: 4
description: Azure Lab 4 - Setting Up a Multi-VM Application Server Environment
---

# Azure Lab 4: Setting Up a Multi-VM Application Server Environment

## Lab Preparation

### Purpose / Objectives of Lab 4
In this lab, you will set up a basic Apache web server (including some light HTML coding) and supporting *iptables* firewall rules. You will also set up an IIS-based web server on your Windows Server VM, and learn how to set up port forwarding through your Linux Server VM to allow access to the IIS web server on the Internet.

If you encounter technical issues, please contact your professor via e-mail or in your section's Microsoft Teams group.

### Minimum Requirements
Before beginning, you must have: 
1. Successfully completed Lab 3.
1. Attended the Week 5 lectures.
1. Read through the Week 5 slides, and have them handy as a reference for concepts.
1. Your Azure-based Linux VM.

## Investigation 1: Setting Up A Web Server on Ubuntu Linux
In this investigation, you'll install the Apache web server package from a Linux repository and set up the service.

### Part 1: Setting Up and Managing the Apache Service

1. From within your Linux server, install the ``apache2`` package. (Remember your package management tools. Refer back to Lab 2 if needed.)
1. Now that the package is installed, the web server should have automatically started. Using ***systemd*** commands, confirm the `apache2` service has started without any errors.

    ![Image: Apache Status](/img/apache-status.png)

1. Finally, check the web server is serving web pages by loading a page locally on Ubuntu (inside your VM): 

    ```bash
    curl localhost
    ```

     If you get a bunch of HTML code, you've succeeded! (Curl doesn't render HTML code, so you see it as plain text. This is how we check the web server works without dealing with networking.)
1. Remember from our lecture: there's a difference between **start** and **enable**. Ensure the web server starts up with the system *every* time.
1. Copy and paste the FQDN address for your Linux VM in a browser on your **local computer**. It doesn't load, does it? We're not done. Move to **Part 2** to deal with the firewall and allow web traffic through.

### Part 2: Allowing Web Traffic

In this section, you will follow security best practices to allow web server traffic into your VM. We'll open a firewall exception to allow requests to our web server through, so we can access our new web server from the Internet.

1. Before making changes, it's a good idea to review our current rules: 

    ```bash
    iptables -L -vn --line-numbers
    ```

1. Add your rule exception. Web traffic is typically served on TCP port 80, and that's what we'll use: 

    ```bash
    iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    ```

1. Confirm your new rule has been applied: 

    ```bash
    iptables -L -vn --line-numbers
    ```

    ![Image: Allowing TCP Port 80](/img/rule-80.png)

1. Go back to your local browser, and reload the page. Does it work now?
1. If it does, congratulations! **You're almost done.**
1. Back in you SSH session, **save your new rules**! Remember, changes you make will be erased when you shut down unless you save them.

### Part 3: Editing Your Apache Website

Finally, let's modify the main page. Currently, it's displaying the default Apache splash page. Let's change that.

1. Navigate to: `/var/www/html`
1. List all files in this directory. There are none; this is expected.
1. In this location, elevate to root privileges and open a new vim session to: `index.html`
1. Using HTML, give it a title of: **OPS705 Linux Server - Fall 2024**.
1. Using HTML, add to the body: **Name: yourname**
1. Using HTML, add to the body as a new line: **Student Username: yourstudentusername**
1. Here's how that basic HTML code looks like: 

    ```html
    <html>
      <head>
        <title>
          OPS705 Linux Server - Fall 2024
        </title>
      </head>
      <body>
        <b>OPS705 Linux Server - Fall 2024</b>
        <p>Name: <b>insertyourfullname</b></p>
        <br>Username: <b>yourstudentusername</b></br>
      </body>
    </html>
    ```

1. Save and quit the vim session.
1. In your **local** browser, refresh the page. If your changes show up, you're done!

## Investigation 2: Setting Up A Web Server on Windows Server 2022
Setting up an Internet Information Services web server on an Azure VM is incredibly easy, especially in contrast to the Apache setup.

### Part 1: Installing and Verifying the IIS Web Server

1. Spin up your Windows Server VM, and wait until it's fully started up.
1. Connect to this VM remotely using remote desktop software as you've done in the past.
1. Find the **Server Manager** program. It loads automatically at start, but you can re-open it if you've closed it from the Start Menu.
1. At the top right of **Server Manager**, click on the *Manage* menu item, then click *Add Roles and Features*.
    ![Image: Server Manager - Manage menu](/img/servermanager-manage.png)
1. The *Add Roles and Features Wizard* pops up.
1. Click *Next* to move past the first page. You should now be in the *Installation Type* page.
1. On *Installation Type*, stick with the default and just click **Next**.
1. On *Server Selection*, stick with the default and click **Next**.
1. On *Server Roles*, find the **Web Server (IIS)** option, check the box to select it.
    ![Image: Server Manager - IIS Role Selection](/img/servermanager-role-iis.png)
1. A dialog box pops up, asking if you'd like to add required features. Click **Add Features**.
    ![Image: Server Manager - IIS Role Selection, Add Features](/img/servermanager-role-iis-add-features.png)
1. Back in the *Server Roles* page, click **Next**.
1. Over the next few pages, stick with the defaults and click **Next** until you reach the *Confirmation* page. On this page, click **Install**.
1. Wait for the installation to complete. This may take several minutes.
    ![Image: IIS Role Installation](/img/iis-installing.png)
1. When complete, open a browser inside the Windows Server VM, and navigate to `http://localhost`. You should see the IIS default splash page. Congratulations!

### Part 2: Editing Your IIS Website

1. First: In a new file explorer window, find the *View* menu item near the top, and click *File name extensions*.
1. Next: Open **Server Manager** from the Start menu and click on the **Local Server** menu bar option.
1. Towards the top of the window, click **Tools > Internet Information Services (IIS) Manager**
1. In the new window in the *Connections* menu column on the left, expand the folder with your VM name on it, then expand the **Sites** folder and click on **Default Web Site**.
1. In the *Actions* menu column on the right, click **Explore**. This will open a new folder where your IIS web pages are stored.
    ![Image: IIS Explore Dialog](/img/iis-explore.png)
1. Right-click anywhere in that window, click **New > Text Document**. Name it **index.html**. Save it with double-quotes to make sure it's saved as an HTML file, not text. `"index.html"`
1. Open the text file, and write the same HTML code as Investigation 1, changing the title tag to: **OPS705 IIS Web Server - Fall 2024**.
1. Refresh your browser page from *Part 1*: `http://localhost` You should see your new code.
1. On your **local computer**, open a browser and navigate to the URL you used to remotely connect to your Windows Server VM. Unlike the Linux Server in Lab 3, the web page you created does not appear. We still have some work to do.

## Investigation 3: Routing Through Your Linux Server
In this investigation, you'll set up your Linux Server VM to forward requests to your Windows VM's IIS web server. This is an advanced topic. Reviewing the Week 5 material is highly recommended. The following investigation assumes you understand the concepts discussed in those lectures.

### Part 1: Enabling System-Level Forwarding on Your Linux Server

1. Remote SSH into your Linux Server VM.
1. Elevate to root.
1. Use vim to open: **/etc/sysctl.conf**
1. Find the line: `#net.ipv4.ip_forward = 1` 
1. Remove the `#` symbol to uncomment the line and make it active.
    ![Image: Enabling IP Forwarding](/img/ip-forwarding.png)
1. Save and quit vim.
1. At the command prompt, run: 

    ```bash
    sysctl -p
    ```
1. Confirm you've properly enabled system-level forwarding with the following command:

    ```bash
    sysctl net.ipv4.ip_forward
    ``````
1. The response from the command above should say **net.ipv4.ip_forward = 1**. If not, revisit the steps in Part 2.

### Part 2: Port Forwarding Using NAT

1. Remote into your Windows Server VM, open Command Prompt, and run

    ```bash
    ipconfig
    ``````
1. Write down the 10.x.x.x IP address displayed. 
    ![Image: Windows Server - Local IPConfig](/img/winserv-ipconfig.png)
1. Remote SSH into your Linux Server VM, and elevate to root.
1. Confirm you can access the IIS web server on your Linux VM by running:

      ```bash
      curl **IP-address-from-step-1**
      ```

    ![Image: Ubuntu Curl - Windows Server IIS](/img/ubuntu-iis-curl.png)

1. If you see plain HTML code displayed, move to the next step.
1. We're going to be working with the NAT table. Let's look at the NAT rules listing with the following command:

    ```bash
    iptables -t nat -nvL --line
    ```
1. Set up a port forwarding rule so all requests to sent your Linux VM on port 8080 get forwarded to your Windows VM on port 80. Run the following:

    ```bash
    iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination *windows-server-ip-from-step-1*:80
    ```
1. Set up NAT for all forwarded traffic:

    ```bash
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
    ```
1. Confirm your new NAT table rules with the command from Step 6.
    ![Image: Confirming NAT tables with port forwarding](/img/nat-tables.png)
1. Once confirmed, save your updated rules!

### Part 3: Adding Forwarding Firewall Rule Exceptions

1. Create a firewall rule to allow forwarded traffic destined for TCP port 80:

    ```bash
    iptables -A FORWARD -p tcp --dport 80 -j ACCEPT
    ```
1. Create a firewall rule to allow forwarded traffic sent from TCP port 80:

    ```bash
    iptables -A FORWARD -p tcp --sport 80 -j ACCEPT
    ```
1. Confirm your new forward rules:

    ```bash
    iptables -nvL --line
    ```
    ![Image: Confirming port 80 forward rules](/img/forward-80.png)
1. If correct, save your rules!
1. Watch your firewall rules and their packet counters with the following command:

    ```bash
    watch iptables -nvL --line
    ```
1. In a browser on your **local computer**, paste the URL for your Linux VM, adding **:8080** to the end of the address, then hit Enter. (Make sure you aren't using https!)

    ***Example: http://cjohnson30-lnx.eastus.cloudapp.azure.com:8080***
1. If you've done your work right, the Windows IIS web page should appear!
1. Review the packet count from your `watch` command in Step 5. Notice the new forward rules are working! Keep this in mind for troubleshooting.
1. In your SSH session, use the keyboard combination **Ctrl** and **c** to halt the watch program.
1. Now that you know your new rules work, **save your new rules**!

## Lab Submission
Submit to Blackboard full-desktop screenshots (PNG/JPG) of the following:

1. Browser window showing the Linux Apache page (on your local computer, not displayed on your VM).
1. Browser window showing the Windows IIS page (on your local computer, not displayed on your VM).
1. SSH session window with your iptables rules listed.
1. SSH session window with your iptables NAT table rules listed.

**Reminder:** Make sure to fully stop your VMs when you're done!
