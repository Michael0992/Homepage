import os
verzeichnis = "./rsc/ico"  # z.B. "C:/Users/Name/Bilder"
mylist = [] 
for dateiname in os.listdir(verzeichnis):
    if dateiname.endswith(".svg"):
        mylist.append(dateiname)

print(mylist)