## How it work ?

With a simple attack hid, P4wnP1 copy sam, security and system files to the usb masse storage (ums) of P4wP1, after ~45s P4wnP1 copy the ums disk on his apache2 directory and he start apache2.

Then, this script download (wget) the .bin disk from the web server of P4wnP1 and extracts the files 

Now it's the tool called secretdump from impacket (https://github.com/SecureAuthCorp/impacket
) who takes the files (sam, system and security) and extract the windows hash and more informations about the operating system windows like the windows recovery password with question/answer..

I had some problems mounting the disk, so I chose this alternative (hid, apache start, wget, 7z) to get the system, sam and security files.

You can launch install-requirement.sh to install impacket, and sshpass.

```
./install-requirement.sh
```
Don't forget to put the js file extract-sam-system-security-en.js in /usr/localP4wnP1/HIDscript/ and create a disk to emulate usb mass storage

```
cd /usr/local/P4wnP1/helper & ./genimg -i -s 100  -o 100.bin -l disk
```

To more understand, I invite you to read the source code of the steal-windows-hash.py file
