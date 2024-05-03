from machine import Pin # importe dans le code la lib qui permet de gerer les Pins de sortie 

import utime # importe dans le code la lib qui permet de gerer le temps 

  

pinNumber = 17 # declaration d'une variable pinNumber à 17 

pinNumber2 = 21 

pinNumber3 = 27 

led = Pin(17, mode=Pin.OUT) # declaration d'une variable de type pin ici la 17 

                                   #et on prescise que c'est une pin de sortie de courant (OUT) 

led2 = Pin(21, mode=Pin.OUT) 
  

led3 = Pin(27, mode=Pin.OUT) 
  

pin_button = Pin(14, mode=Pin.IN, pull=Pin.PULL_UP) 
  

while True:          # boucle infini 

    led.on()     # change l'etat de la led 

    utime.sleep(1)# attendre 1 seconde 

    led.off() 

    led2.on() 

    utime.sleep(1) 

    led2.off() 

    led3.on() 

    utime.sleep(1) 

    led3.off() 

     

    #led.on()        allume la led  

    #led.off()       eteind la led 