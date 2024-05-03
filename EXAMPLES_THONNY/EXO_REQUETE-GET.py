import network   #import des fonction lier au wifi
import urequests #import des fonction lier au requetes http
import utime #import des fonction lier au temps
import ujson #import des fonction lier aà la convertion en Json
from machine import Pin, PWM

wlan = network.WLAN(network.STA_IF) # met la raspi en mode client wifi
wlan.active(True) # active le mode client wifi

ssid = 'camille'
password = 'heyhahah'
wlan.connect(ssid, password) # connecte la raspi au réseau
url = "http://172.20.10.2:3000"


ledVert = PWM(Pin(17,mode=Pin.OUT)) 
ledVert.freq(1_000)
ledVert.duty_u16(0)
ledBleu = PWM(Pin(16,mode=Pin.OUT)) 
ledBleu.freq(1_000)
ledBleu.duty_u16(0)
ledRouge = PWM(Pin(18,mode=Pin.OUT)) 
ledRouge.freq(1_000)
ledRouge.duty_u16(0)

diction = {"Gryffindor": [5000,0, 0],
                "Slytherin": [0,5000, 0],
                "Ravenclaw": [0,0, 5000],
                "Hufflepuff": [5000,5000,0]}

def setColor(r,v,b):
    ledRouge.duty_u16(r)
    ledVert.duty_u16(v)
    ledBleu.duty_u16(b)



while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)
    pass

while(True):
    try:
        print("GET")
        r = urequests.get(url) # lance une requete sur l'url
        print(r.json()["message"])
        tab = diction[r.json()["message"]]# traite sa reponse en Json
        setColor(tab[0],tab[1],tab[2])
        r.close() # ferme la demande
        utime.sleep(1)
        
        
        
                
    except Exception as e:
        print(e)
    