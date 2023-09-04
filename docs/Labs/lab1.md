---
id: lab1
title: Azure Lab 1
sidebar_position: 1
description: Azure Lab 1 - Creating Virtual Machines in Azure
---

# Azure Lab 1: Creating Virtual Machines in Azure

## Lab Preparation

### Purpose / Objectives of Lab 1
In this lab, you will login to Microsoft Azure for the first time, navigate your way to DevTest Labs, and spin up two VM images. The main purpose of this lab is to learn how to create Windows and Linux virtual machines using a pre-built image, how to remotely connect to each, and basic management of these VMs from the Azure web interface. These two VMs will be used extensively in your later labs.

While you are working through this lab, it is highly recommended that you write down general notes and commands to help you remember how to do this lab. You may use your notes during tests, so fill it out accordingly!

If you encounter technical issues, please contact your professor via e-mail or in your section's Microsoft Teams group.

### Minimum Requirements ###
Before beginning, you must have: 
1. Attended the Week 1 lectures (or watched the posted recording)
1. Your Seneca login credentials
1. A mobile device (phone/tablet) to setup 2FA (two-factor authentication)
1. Your printed copy of the **OPS705 Lab Logbook - Azure** PDF

## Investigation 1: Connecting to Your Azure Account 
In this investigation, you'll log in to your Seneca-provided Azure account and ensure you have access to our DevTest Labs classroom.

### Part 1: Logging In For The First Time
1. **Follow the link to our DevTest Lab in Azure found on Blackboard.**
1. Enter your Seneca credentials. (Same username and password you use for your e-mail)
1. You'll next be asked to set up two-factor authentication. Do not bypass this step!
1. Once you've set that up, verify it by logging out and logging back in again.
1. Conduct a small celebration (pat on the back, a quick jig, perhaps a fist pump) and move on to Investigation 2.

### Part 2: Logging In Afterwards
Logging in after initial setup is quite easy.
1. Navigate to the Azure portal: https://portal.azure.com
1. Use your Seneca credentials.
1. Complete 2FA authentication.
1. Our classroom DevTest Lab will be in your recent list, or you can use the search bar to bring up DevTest Labs by looking for **OPS705**. (*DO NOT search for *Virtual Machines* in the search bar.* You will find yourself in the wrong area and things will not work.)

## Investigation 2: Managing a Windows Server 2019 VM in Azure
In this investigation, you'll create, configure, and manage a Windows Server 2019 Virtual Machine using Microsoft Azure and a pre-built image. This means no tedious and time-consuming Windows installation! You'll also login to the VM remotely, using Microsoft's Remote Desktop Protocol to share its desktop.

### Part 1: Creating A Windows VM From An Image
To create your Windows Server 2019 Virtual machine, perform the following steps:
1. Navigate to *DevTest Labs > OPS705 > My virtual machines*
1. Click the **+ Add** button.
1. Wait for the *Choose a base* listing to populate. This may take a few moments.
1. Select the item titled **Windows Server 2019 Datacenter**. Be careful here! There are many other options.
1. A new blade, *Create lab resource* appears.

    ![Image: Azure - Create Lab Resource](/img/azure-vm-labresource.png)

1. In the *Virtual machine name* field, type: **yourSenecaUsername-win** (you only have 15 characters, you may need to abbreviate)
1. *Username:* **yourSenecaUsername**
1. *Use a saved secret:* Unchecked
1. *Password*: Your choice, but use the same for all VMs and resources in this course.
1. *Save as default password:* Checked.
1. *Virtual machine size*: **Standard_B2ms**
1. *OS disk type*: **Standard HDD**
1. Leave the remaining options as they are.
1. Click on the **Create** button at the bottom of the screen.
1. You are now back in the *My virtual machines* blade while Azure creates your personal virtual machine. This may take a few minutes.
1. When it finishes, you should see a **Your deployment is complete.** message near the top of the page. Congratulations!
1. Click on the **Go to resource** button at the bottom left of the page and move on to the next section of the lab.

### Part 2: Accessing Your Windows VM Remotely Using RDP
In this section, we'll discover how to remotely connect to the Windows Server's desktop environment over the Internet from your computer. It's a very simple process.
1. In the *Overview* tab for the Virtual Machine created in Part 1, click the **Connect** button. This will download an RDP profile file (usually *vmname.rdp*).
1. Open the RDP file. It should launch the Remote Desktop application and automatically try to connect to your VM.
1. Upon opening, the VM's URL, port number, and username are automatically provided.

    ![Image: Windows RDP Dialog](/img/azure-rdp.png)

1. Type the password you used when creating the VM in Part 1.
1. Accept the certificate warning. (Click yes.)
1. You should see a login progress screen, and a Windows Server desktop after a few moments.
1. Congratulations! You've set up a Windows Server VM and logged in remotely.
1. Open Notepad, and write:
    ```test
    My name is *insertFullName*, and I've completed the Lab 1 Windows Server VM investigation!
    ```
1. Save the file to your VM's desktop, with the filename *yourSenecaUsername.txt*.
1. **Do not skip Part 3 at this stage! Otherwise, you'll be bleeding funds by leaving the VM running.**

### Part 3: Fully Stopping Your Windows Virtual Machine
This section is fairly simple. The one thing to never forget: Ensure your VM's status is set to **Stopped (Deallocated)**.
1. In the *Overview* blade of your Windows Server VM, click on the **Stop** button.
1. A notification will appear in the top right of your browser window, confirming your action.
1. Don't worry about going into the Windows OS and shutting down first. Azure sends a signal to the VM to shut down safely.
1. If your VM status says stopped, but does not include the **(Deallocated)** text, then resources are still being held by the VM and we're still being charged. The stop button will still be available, so click it.

![Image: Azure VM - Deallocated](/img/azure-deallocated.png)

## Investigation 3: Managing a CentOS Linux VM in Azure
In this investigation, we'll create, configure, and manage a CentOS Minimal Virtual Machine using Microsoft Azure. This is a command line only OS, so you'll be using SSH to remotely connect to the VM and issue basic commands. This VM will be used extensively in Lab 2.

### Part 1: Creating A CentOS VM From An Image
To create your CentOS VM, follow the steps from *Investigation 2, Part 1*, but with the following settings:

1. **Choose a base:** CentOS-based 7.9
1. **Virtual machine name:** yourSenecaUsername-lnx
1. **User name:** yourSenecaUsername
1. **Authentication type:** Password
1. **Use a saved secret:** Unchecked
1. **Password:** Same as your Windows Server VM
1. **Save as default password:** Checked
1. **Virtual machine size:** Standard_B1s
1. Click on the *Advanced Settings* tab.
1. Under **IP address**, select *Public*.
1. Click back to *Basic Settings.
1. Leave all other options as they are.
1. Click **Create**!

When deployment is complete, click on the new VM in *My virtual machines* to verify its status and find the VM's address. Write this down.

### Part 2: Accessing Your CentOS VM Remotely Using SSH
We will be accessing our new Linux VM remotely using SSH.

Requirements: An SSH Client
1. Windows: Use the built-in Command Prompt.
1. macOS/Linux: Use the built-in *Terminal* application.

In the *Overview* tab for the Virtual Machine created in Part 1, look for the **IP address or FQDN** entry. This is the address you will use to connect in this section. Write it down (Hover over the URL, and you'll see a *Copy to clipboard* icon).

**On Windows Using Command Prompt, or macOS/Linux Using Terminal**:
![Image: Windows Command Prompt - SSH Login to CentOS](/img/azure-cmdssh-login.png)
1. From the command line, enter the following (using your address from the *Overview* tab):
    ```bash
    ssh yourSenecaUsername@address
    ```
1. When prompted for a password, use the one you gave when you created the VM. (You won't see anything as you type here; that's normal.)
1. If login is successful, you should see a prompt like this: `[cjohnson30@cjohnson30-lnx ~]$`
1. To prove you've completed this section, run the following command:

    ```bash
    hostnamectl
    ```

1. Take a full desktop screenshot of the results in the above step.
1. To quit, type <code>exit</code>.

### Part 3: Downloading OPS705 Lab Files
A number of files have been created for you that you need for the next several labs. These must be downloaded to your CentOS VM using the following steps:
1. Install git: 

    ```bash
    sudo yum -y install git
    ```

1. Using git, download all lab files into your bin directory:

    ```bash
    git clone https://github.com/ops705/labs.git ~/bin/
    ```

1. We'll explore how these two commands work in more detail over the next few weeks.
1. Run the following command to show you've properly downloaded all lab files, and take a screenshot of the result: 

    ```bash
    ls -lh ~/bin
    ```

    ![Image: Listed Git Files](/img/listed-git-files.png)

### Part 4: Adding Your Professor's Public Key
In this section, you will add your professor's public key to allow them to log in to your Linux VM and run lab checks and perform troubleshooting when needed.

1. As part of the files you downloaded with git, you should have a file here: `~/bin/professorID.pub`
1. Using the following command as your **regular user**, install your professor's public key on to your Linux VM: 

    ```bash
    cat ~/bin/professorID.pub >> ~/.ssh/authorized_keys
    ```

1. Verify the key installation was successful by running the following:

    ```bash
    cat ~/bin/professorID.pub; cat ~/.ssh/authorized_keys
    ```

Compare the output. You should see the contents of **professorID.pub** in your **authorized_keys** file. (*WARNING: Do not delete any additional data in authorized_keys!*)

### Part 5: Fully Stopping your CentOS VM
As with the Windows Server VM, fully deallocating your VM is essential to responsible usage.

1. Click on the **Stop** button at the top of the VM's Overview blade.

That's it!

## Investigation 4: Managing Your VMs Directly Through Azure's UI
In this quick investigation, we'll walk through how to directly manage virtual machines from the Azure Dashboard interface on a basic level. This is useful for starting up VMs, shutting them down when unresponsive, and deleting them when you're finished. (**Warning:** Do not delete either VM created in this lab!)

IMPORTANT - After creating your VMs for the first time, you must log out and log back in to Azure. When you first create a VM in DevTest Labs (DTL) and it's in a fully running state, you need to log out and log back into the Azure Portal for permissions to be added properly to your account. If you don't, you'll get *Permission denied* warnings from Azure if you try to do this investigation.

### Part 1: Powering On A Virtual Machine
From the *DevTest Labs* blade:
1. Click on the *My virtual machines* menu bar item.
1. Click on the virtual machine you'd like to manage to move to its *Overview* blade.
1. Click the **Start** menu button near the top.

### Part 2: Powering Off A Virtual Machine
From the *DevTest Labs* blade:
1. Click on the *My virtual machines* menu bar item.
1. Click on the virtual machine you'd like to manage to move to its *Overview* blade.
1. Click the **Stop** menu button near the top.

Remember the difference between the status *Stopped* and *Stopped (deallocated)*!

### Part 3: Restarting A Virtual Machine
There are two methods to restarting a VM. Either within the OS, or through the Azure Dashboard.

Inside the OS:
* Windows: Click on Start, and select Power Off.
* Linux: From the command line (SSH), type `sudo reboot`

In either OS, you will be disconnected from your remote session. Wait a few minutes while the VM restarts, and reconnect.

From Azure Dashboard:
1. Click on the **Restart** button from the VM's *Overview* blade.
1. Wait until the VM's status has changed to **Running** before logging back in.

### Part 4: Deleting A Virtual Machine
Deleting a Virtual Machine is useful when you no longer need it long-term, or if there's a catastrophic issue with the OS inside. Be careful! Any saved data inside the VM will be deleted as well!
1. Navigate to the VM's *Overview* blade.
1. If the VM status isn't **Stopped (Deallocated)**, stop the VM. Wait until its status updates.
1. Click on the **Delete** button at the top of the blade.

### Part 5: A Note About Resource Usage
As mentioned during our lecture and throughout this lab, using resources responsibly is incredibly important. We pay for what we use. While we have a failsafe in place to stop all VMs at 2:00am EST daily, don't rely on it! Fully stop your VMs when you're not using them.

Your total allowed resource allocation has been restricted for this course. This means you can only have two VMs (or services) at a time. If you have two already, you won't be able to add another until you delete one.

## Lab Submission
Submit to Blackboard full-desktop screenshots (PNG/JPG) of the following:
1. Your view of the OPS705 DevTest Labs Overview blade.
1. The Azure *Overview* blade for your **Windows Server** VM.
1. The Azure *Overview* blade for your **CentOS** VM.
1. The text file created for your Windows VM, open in Notepad.
1. Your CentOS remote SSH session after running the command: `hostnamectl`
1. The list of lab files downloaded to your CentOS VM.

**Reminder:** Make sure to fully stop your VMs when you're done!
