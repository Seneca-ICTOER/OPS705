"use strict";(self.webpackChunkOPS705=self.webpackChunkOPS705||[]).push([[328],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6189:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=a(3117),r=(a(7294),a(3905));const i={id:"lab1",title:"Azure Lab 1",sidebar_position:1,description:"Azure Lab 1 - Creating Virtual Machines in Azure"},o="Azure Lab 1: Creating Virtual Machines in Azure",l={unversionedId:"Labs/lab1",id:"Labs/lab1",title:"Azure Lab 1",description:"Azure Lab 1 - Creating Virtual Machines in Azure",source:"@site/docs/Labs/lab1.md",sourceDirName:"Labs",slug:"/Labs/lab1",permalink:"/OPS705/Labs/lab1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS705/tree/main/docs/Labs/lab1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"lab1",title:"Azure Lab 1",sidebar_position:1,description:"Azure Lab 1 - Creating Virtual Machines in Azure"},sidebar:"courseNotesSidebar",previous:{title:"Weekly Schedule",permalink:"/OPS705/weekly-schedule"},next:{title:"Azure Lab 2",permalink:"/OPS705/Labs/lab2"}},s={},u=[{value:"Lab Preparation",id:"lab-preparation",level:2},{value:"Purpose / Objectives of Lab 1",id:"purpose--objectives-of-lab-1",level:3},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Investigation 1: Connecting to Your Azure Account",id:"investigation-1-connecting-to-your-azure-account",level:2},{value:"Part 1: Logging In For The First Time",id:"part-1-logging-in-for-the-first-time",level:3},{value:"Part 2: Logging In Afterwards",id:"part-2-logging-in-afterwards",level:3},{value:"Investigation 2: Managing a Windows Server 2022 VM in Azure",id:"investigation-2-managing-a-windows-server-2022-vm-in-azure",level:2},{value:"Part 1: Creating A Windows VM From An Image",id:"part-1-creating-a-windows-vm-from-an-image",level:3},{value:"Part 2: Accessing Your Windows VM Remotely Using RDP",id:"part-2-accessing-your-windows-vm-remotely-using-rdp",level:3},{value:"Part 3: Fully Stopping Your Windows Virtual Machine",id:"part-3-fully-stopping-your-windows-virtual-machine",level:3},{value:"Investigation 3: Managing an Ubuntu Linux VM in Azure",id:"investigation-3-managing-an-ubuntu-linux-vm-in-azure",level:2},{value:"Part 1: Creating An Ubuntu VM From An Image",id:"part-1-creating-an-ubuntu-vm-from-an-image",level:3},{value:"Part 2: Accessing Your Ubuntu VM Remotely Using SSH",id:"part-2-accessing-your-ubuntu-vm-remotely-using-ssh",level:3},{value:"Part 3: Downloading OPS705 Lab Files",id:"part-3-downloading-ops705-lab-files",level:3},{value:"Part 4: Adding Your Professor&#39;s Public Key",id:"part-4-adding-your-professors-public-key",level:3},{value:"Part 5: Fully Stopping your Ubuntu VM",id:"part-5-fully-stopping-your-ubuntu-vm",level:3},{value:"Investigation 4: Managing Your VMs Directly Through Azure&#39;s UI",id:"investigation-4-managing-your-vms-directly-through-azures-ui",level:2},{value:"Part 1: Powering On A Virtual Machine",id:"part-1-powering-on-a-virtual-machine",level:3},{value:"Part 2: Powering Off A Virtual Machine",id:"part-2-powering-off-a-virtual-machine",level:3},{value:"Part 3: Restarting A Virtual Machine",id:"part-3-restarting-a-virtual-machine",level:3},{value:"Part 4: Deleting A Virtual Machine",id:"part-4-deleting-a-virtual-machine",level:3},{value:"Part 5: A Note About Resource Usage",id:"part-5-a-note-about-resource-usage",level:3},{value:"Lab Submission",id:"lab-submission",level:2}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azure-lab-1-creating-virtual-machines-in-azure"},"Azure Lab 1: Creating Virtual Machines in Azure"),(0,r.kt)("h2",{id:"lab-preparation"},"Lab Preparation"),(0,r.kt)("h3",{id:"purpose--objectives-of-lab-1"},"Purpose / Objectives of Lab 1"),(0,r.kt)("p",null,"In this lab, you will login to Microsoft Azure for the first time, navigate your way to DevTest Labs, and spin up two VM images. The main purpose of this lab is to learn how to create Windows and Linux virtual machines using a pre-built image, how to remotely connect to each, and basic management of these VMs from the Azure web interface. These two VMs will be used extensively in your later labs."),(0,r.kt)("p",null,"While you are working through this lab, it is highly recommended that you write down general notes and commands to help you remember how to do this lab. You may use your notes during tests, so fill it out accordingly!"),(0,r.kt)("p",null,"If you encounter technical issues, please contact your professor via e-mail or in your section's Microsoft Teams group."),(0,r.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,r.kt)("p",null,"Before beginning, you must have: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Attended the Week 1 lectures (or watched the posted recording)."),(0,r.kt)("li",{parentName:"ol"},"Your Seneca login credentials."),(0,r.kt)("li",{parentName:"ol"},"A computer with an Internet connection. (Windows/macOS/Linux)"),(0,r.kt)("li",{parentName:"ol"},"A mobile device (phone/tablet) to setup 2FA (two-factor authentication)."),(0,r.kt)("li",{parentName:"ol"},"Your copy (digital or printed) of the ",(0,r.kt)("a",{target:"_blank",href:a(9451).Z},"OPS705 Lab Logbook - Azure"),".")),(0,r.kt)("h2",{id:"investigation-1-connecting-to-your-azure-account"},"Investigation 1: Connecting to Your Azure Account"),(0,r.kt)("p",null,"In this investigation, you'll log in to your Seneca-provided Azure account and ensure you have access to our DevTest Labs digital classroom."),(0,r.kt)("h3",{id:"part-1-logging-in-for-the-first-time"},"Part 1: Logging In For The First Time"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Follow the link to our DevTest Lab in Azure found on Blackboard.")),(0,r.kt)("li",{parentName:"ol"},"Enter your Seneca credentials. (Same username and password you use for your e-mail)"),(0,r.kt)("li",{parentName:"ol"},"You'll next be asked to set up two-factor authentication. Do not bypass this step!"),(0,r.kt)("li",{parentName:"ol"},"Once you've set that up, verify it by logging out and logging back in again."),(0,r.kt)("li",{parentName:"ol"},"Conduct a small celebration (pat on the back, a quick jig, perhaps a fist pump) and move on to Investigation 2.")),(0,r.kt)("h3",{id:"part-2-logging-in-afterwards"},"Part 2: Logging In Afterwards"),(0,r.kt)("p",null,"Logging in after initial setup is quite easy."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Azure portal: ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"https://portal.azure.com")),(0,r.kt)("li",{parentName:"ol"},"Use your Seneca credentials."),(0,r.kt)("li",{parentName:"ol"},"Complete 2FA authentication."),(0,r.kt)("li",{parentName:"ol"},"Our classroom DevTest Lab will be in your recent list, or you can use the search bar to bring up DevTest Labs by looking for ",(0,r.kt)("strong",{parentName:"li"},"OPS705"),". (",(0,r.kt)("em",{parentName:"li"},"DO NOT search for "),"Virtual Machines",(0,r.kt)("em",{parentName:"li"}," in the search bar.")," You will find yourself in the wrong area and things will not work.)")),(0,r.kt)("h2",{id:"investigation-2-managing-a-windows-server-2022-vm-in-azure"},"Investigation 2: Managing a Windows Server 2022 VM in Azure"),(0,r.kt)("p",null,"In this investigation, you'll create, configure, and manage a Windows Server 2022 Virtual Machine using Microsoft Azure and a pre-built image. This means no tedious and time-consuming Windows installation! You'll also login to the VM remotely, using Microsoft's Remote Desktop Protocol to share its desktop."),(0,r.kt)("h3",{id:"part-1-creating-a-windows-vm-from-an-image"},"Part 1: Creating A Windows VM From An Image"),(0,r.kt)("p",null,"To create your Windows Server 2024 Virtual machine, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("em",{parentName:"p"},"DevTest Labs > OPS705 > My virtual machines"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"+ Add")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the ",(0,r.kt)("em",{parentName:"p"},"Choose a base")," listing to populate. This may take a few moments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the item titled ",(0,r.kt)("strong",{parentName:"p"},"Windows Server 2024 Datacenter"),". Be careful here! There are many other options.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A new blade, ",(0,r.kt)("em",{parentName:"p"},"Create lab resource")," appears."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image: Azure - Create Lab Resource",src:a(3826).Z,width:"1488",height:"1480"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Virtual machine name")," field, type: ",(0,r.kt)("strong",{parentName:"p"},"az-win##")," (you have been assigned a 2-digit UID, found in gradebook. Use that. Example: az-win01)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Username:")," ",(0,r.kt)("strong",{parentName:"p"},"yourSenecaUsername"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Use a saved secret:")," Unchecked")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Password"),": Your choice, but use the same for all VMs and resources in this course.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Save as default password:")," Checked.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Virtual machine size"),": ",(0,r.kt)("strong",{parentName:"p"},"Standard_B2ms"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"OS disk type"),": ",(0,r.kt)("strong",{parentName:"p"},"Standard HDD"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the remaining options as they are.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button at the bottom of the screen.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You are now back in the ",(0,r.kt)("em",{parentName:"p"},"My virtual machines")," blade while Azure creates your personal virtual machine. This may take a few minutes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When it finishes, you should see a ",(0,r.kt)("strong",{parentName:"p"},"Your deployment is complete.")," message near the top of the page. Congratulations!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Go to resource")," button at the bottom left of the page and move on to the next section of the lab."))),(0,r.kt)("h3",{id:"part-2-accessing-your-windows-vm-remotely-using-rdp"},"Part 2: Accessing Your Windows VM Remotely Using RDP"),(0,r.kt)("p",null,"In this section, we'll discover how to remotely connect to the Windows Server's desktop environment over the Internet from your computer. It's a very simple process."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Overview")," tab for the Virtual Machine created in Part 1, click the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button. This will download an RDP profile file (usually ",(0,r.kt)("em",{parentName:"p"},"vmname.rdp"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the RDP file. It should launch the Remote Desktop application and automatically try to connect to your VM.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upon opening, the VM's URL, port number, and username are automatically provided."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image: Windows RDP Dialog",src:a(6643).Z,width:"810",height:"908"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the password you used when creating the VM in Part 1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accept the certificate warning. (Click yes.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see a login progress screen, and a Windows Server desktop after a few moments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congratulations! You've set up a Windows Server VM and logged in remotely.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Notepad, and write:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-test"},"My name is *insertFullName*, and I've completed the Lab 1 Windows Server VM investigation!\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the file to your VM's desktop, with the filename ",(0,r.kt)("em",{parentName:"p"},"yourSenecaUsername.txt"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Do not skip Part 3 at this stage! Otherwise, you'll be bleeding funds by leaving the VM running.")))),(0,r.kt)("h3",{id:"part-3-fully-stopping-your-windows-virtual-machine"},"Part 3: Fully Stopping Your Windows Virtual Machine"),(0,r.kt)("p",null,"This section is fairly simple. The one thing to never forget: Ensure your VM's status is set to ",(0,r.kt)("strong",{parentName:"p"},"Stopped (Deallocated)"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade of your Windows Server VM, click on the ",(0,r.kt)("strong",{parentName:"li"},"Stop")," button."),(0,r.kt)("li",{parentName:"ol"},"A notification will appear in the top right of your browser window, confirming your action."),(0,r.kt)("li",{parentName:"ol"},"Don't worry about going into the Windows OS and shutting down first. Azure sends a signal to the VM to shut down safely."),(0,r.kt)("li",{parentName:"ol"},"If your VM status says stopped, but does not include the ",(0,r.kt)("strong",{parentName:"li"},"(Deallocated)")," text, then resources are still being held by the VM and we're still being charged. The stop button will still be available, so click it.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image: Azure VM - Deallocated",src:a(215).Z,width:"1780",height:"908"})),(0,r.kt)("h2",{id:"investigation-3-managing-an-ubuntu-linux-vm-in-azure"},"Investigation 3: Managing an Ubuntu Linux VM in Azure"),(0,r.kt)("p",null,"In this investigation, we'll create, configure, and manage an Ubuntu Server Virtual Machine using Microsoft Azure. This is a command line only OS, so you'll be using SSH to remotely connect to the VM and issue basic commands. This VM will be used extensively in Lab 2."),(0,r.kt)("h3",{id:"part-1-creating-an-ubuntu-vm-from-an-image"},"Part 1: Creating An Ubuntu VM From An Image"),(0,r.kt)("p",null,"To create your Ubuntu VM, follow the steps from ",(0,r.kt)("em",{parentName:"p"},"Investigation 2, Part 1"),", but with the following settings:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Choose a base:")," Ubuntu Server 24.04 LTS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Virtual machine name:")," az-lnx## (Use 2-digit UID)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"User name:")," yourSenecaUsername"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Authentication type:")," Password"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Use a saved secret:")," Unchecked"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Password:")," Same as your Windows Server VM"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save as default password:")," Checked"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Virtual machine size:")," Standard_B1s"),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"Advanced Settings")," tab."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"IP address"),", select ",(0,r.kt)("em",{parentName:"li"},"Public"),"."),(0,r.kt)("li",{parentName:"ol"},"Click back to ",(0,r.kt)("em",{parentName:"li"},"Basic Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Leave all other options as they are."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"!")),(0,r.kt)("p",null,"When deployment is complete, click on the new VM in ",(0,r.kt)("em",{parentName:"p"},"My virtual machines")," to verify its status and find the VM's address. Write this down."),(0,r.kt)("h3",{id:"part-2-accessing-your-ubuntu-vm-remotely-using-ssh"},"Part 2: Accessing Your Ubuntu VM Remotely Using SSH"),(0,r.kt)("p",null,"We will be accessing our new Linux VM remotely using SSH."),(0,r.kt)("p",null,"Requirements: An SSH Client"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Windows: Use the built-in Command Prompt."),(0,r.kt)("li",{parentName:"ol"},"macOS/Linux: Use the built-in ",(0,r.kt)("em",{parentName:"li"},"Terminal")," application.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"Overview")," tab for the Virtual Machine created in Part 1, look for the ",(0,r.kt)("strong",{parentName:"p"},"IP address or FQDN")," entry. This is the address you will use to connect in this section. Write it down (Hover over the URL, and you'll see a ",(0,r.kt)("em",{parentName:"p"},"Copy to clipboard")," icon)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Windows Using Command Prompt, or macOS/Linux Using Terminal"),":\n",(0,r.kt)("img",{alt:"Image: Windows Command Prompt - SSH Login to Ubuntu",src:a(5029).Z,width:"1064",height:"506"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the command line, enter the following (using your address from the ",(0,r.kt)("em",{parentName:"p"},"Overview")," tab):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh yourSenecaUsername@address\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When prompted for a password, use the one you gave when you created the VM. (You won't see anything as you type here; that's normal.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If login is successful, you should see a prompt like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"[cjohnson30@az-lnx01 ~]$"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To prove you've completed this section, run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hostnamectl\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take a full desktop screenshot of the results in the above step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To quit, type ",(0,r.kt)("code",null,"exit"),"."))),(0,r.kt)("h3",{id:"part-3-downloading-ops705-lab-files"},"Part 3: Downloading OPS705 Lab Files"),(0,r.kt)("p",null,"A number of files have been created for you that you need for the next several labs. These must be downloaded to your Ubuntu VM using the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using git (which comes pre-installed), download all lab files into your bin directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ops705/labs.git ~/bin/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We'll explore how these two commands work in more detail over the next few weeks.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to show you've properly downloaded all lab files, and take a screenshot of the result: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lh ~/bin\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Image: Listed Git Files",src:a(6992).Z,width:"1101",height:"366"})))),(0,r.kt)("h3",{id:"part-4-adding-your-professors-public-key"},"Part 4: Adding Your Professor's Public Key"),(0,r.kt)("p",null,"In this section, you will add your professor's public key to allow them to log in to your Linux VM and run lab checks and perform troubleshooting when needed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As part of the files you downloaded with git, you should have a file here: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/bin/professorID.pub"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the following command as your ",(0,r.kt)("strong",{parentName:"p"},"regular user"),", install your professor's public key on to your Linux VM: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/bin/professorID.pub >> ~/.ssh/authorized_keys\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the key installation was successful by running the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/bin/professorID.pub; cat ~/.ssh/authorized_keys\n")))),(0,r.kt)("p",null,"Compare the output. You should see the contents of ",(0,r.kt)("strong",{parentName:"p"},"professorID.pub")," in your ",(0,r.kt)("strong",{parentName:"p"},"authorized_keys")," file. (",(0,r.kt)("em",{parentName:"p"},"WARNING: Do not delete any additional data in authorized_keys!"),")"),(0,r.kt)("h3",{id:"part-5-fully-stopping-your-ubuntu-vm"},"Part 5: Fully Stopping your Ubuntu VM"),(0,r.kt)("p",null,"As with the Windows Server VM, fully deallocating your VM is essential to responsible usage."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Stop")," button at the top of the VM's Overview blade.")),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("h2",{id:"investigation-4-managing-your-vms-directly-through-azures-ui"},"Investigation 4: Managing Your VMs Directly Through Azure's UI"),(0,r.kt)("p",null,"In this quick investigation, we'll walk through how to directly manage virtual machines from the Azure Dashboard interface on a basic level. This is useful for starting up VMs, shutting them down when unresponsive, and deleting them when you're finished. (",(0,r.kt)("strong",{parentName:"p"},"Warning:")," Do not delete either VM created in this lab!)"),(0,r.kt)("p",null,"IMPORTANT - After creating your VMs for the first time, you must log out and log back in to Azure. When you first create a VM in DevTest Labs (DTL) and it's in a fully running state, you need to log out and log back into the Azure Portal for permissions to be added properly to your account. If you don't, you'll get ",(0,r.kt)("em",{parentName:"p"},"Permission denied")," warnings from Azure if you try to do this investigation."),(0,r.kt)("h3",{id:"part-1-powering-on-a-virtual-machine"},"Part 1: Powering On A Virtual Machine"),(0,r.kt)("p",null,"From the ",(0,r.kt)("em",{parentName:"p"},"DevTest Labs")," blade:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"My virtual machines")," menu bar item."),(0,r.kt)("li",{parentName:"ol"},"Click on the virtual machine you'd like to manage to move to its ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Start")," menu button near the top.")),(0,r.kt)("h3",{id:"part-2-powering-off-a-virtual-machine"},"Part 2: Powering Off A Virtual Machine"),(0,r.kt)("p",null,"From the ",(0,r.kt)("em",{parentName:"p"},"DevTest Labs")," blade:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"My virtual machines")," menu bar item."),(0,r.kt)("li",{parentName:"ol"},"Click on the virtual machine you'd like to manage to move to its ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Stop")," menu button near the top.")),(0,r.kt)("p",null,"Remember the difference between the status ",(0,r.kt)("em",{parentName:"p"},"Stopped")," and ",(0,r.kt)("em",{parentName:"p"},"Stopped (deallocated)"),"!"),(0,r.kt)("h3",{id:"part-3-restarting-a-virtual-machine"},"Part 3: Restarting A Virtual Machine"),(0,r.kt)("p",null,"There are two methods to restarting a VM. Either within the OS, or through the Azure Dashboard."),(0,r.kt)("p",null,"Inside the OS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows: Click on Start, and select Power Off."),(0,r.kt)("li",{parentName:"ul"},"Linux: From the command line (SSH), type ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo reboot"))),(0,r.kt)("p",null,"In either OS, you will be disconnected from your remote session. Wait a few minutes while the VM restarts, and reconnect."),(0,r.kt)("p",null,"From Azure Dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Restart")," button from the VM's ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade."),(0,r.kt)("li",{parentName:"ol"},"Wait until the VM's status has changed to ",(0,r.kt)("strong",{parentName:"li"},"Running")," before logging back in.")),(0,r.kt)("h3",{id:"part-4-deleting-a-virtual-machine"},"Part 4: Deleting A Virtual Machine"),(0,r.kt)("p",null,"Deleting a Virtual Machine is useful when you no longer need it long-term, or if there's a catastrophic issue with the OS inside. Be careful! Any saved data inside the VM will be deleted as well!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the VM's ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade."),(0,r.kt)("li",{parentName:"ol"},"If the VM status isn't ",(0,r.kt)("strong",{parentName:"li"},"Stopped (Deallocated)"),", stop the VM. Wait until its status updates."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Delete")," button at the top of the blade.")),(0,r.kt)("h3",{id:"part-5-a-note-about-resource-usage"},"Part 5: A Note About Resource Usage"),(0,r.kt)("p",null,"As mentioned during our lecture and throughout this lab, using resources responsibly is incredibly important. We pay for what we use. While we have a failsafe in place to stop all VMs at 2:00am EST daily, don't rely on it! Fully stop your VMs when you're not using them."),(0,r.kt)("p",null,"Your total allowed resource allocation has been restricted for this course. This means you can only have two VMs (or services) at a time. If you have two already, you won't be able to add another until you delete one."),(0,r.kt)("h2",{id:"lab-submission"},"Lab Submission"),(0,r.kt)("p",null,"Submit to Blackboard full-desktop screenshots (PNG/JPG) of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your view of the OPS705 DevTest Labs Overview blade."),(0,r.kt)("li",{parentName:"ol"},"The Azure ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade for your ",(0,r.kt)("strong",{parentName:"li"},"Windows Server")," VM."),(0,r.kt)("li",{parentName:"ol"},"The Azure ",(0,r.kt)("em",{parentName:"li"},"Overview")," blade for your ",(0,r.kt)("strong",{parentName:"li"},"Ubuntu")," VM."),(0,r.kt)("li",{parentName:"ol"},"The text file created for your Windows VM, open in Notepad."),(0,r.kt)("li",{parentName:"ol"},"Your Ubuntu remote SSH session after running the command: ",(0,r.kt)("inlineCode",{parentName:"li"},"hostnamectl")),(0,r.kt)("li",{parentName:"ol"},"The list of lab files downloaded to your Ubuntu VM.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reminder:")," Make sure to fully stop your VMs when you're done!"))}m.isMDXComponent=!0},9451:function(e,t,a){t.Z=a.p+"assets/files/azure-logbook-491d0d3cd72551b5b2a557fe35632279.docx"},5029:function(e,t,a){t.Z=a.p+"assets/images/azure-cmdssh-login-215094b605d9dece8d2379958baf28ba.png"},215:function(e,t,a){t.Z=a.p+"assets/images/azure-deallocated-730a3ca2469cfa2107a3688a87f5cd0f.png"},6643:function(e,t,a){t.Z=a.p+"assets/images/azure-rdp-71e3b3bf1df22ab1fd8f73bd71634414.png"},3826:function(e,t,a){t.Z=a.p+"assets/images/azure-vm-labresource-1ff20f1467e633f1d697d31b89292545.png"},6992:function(e,t,a){t.Z=a.p+"assets/images/listed-git-files-9bc8613b59389997481e79f905f598e7.png"}}]);