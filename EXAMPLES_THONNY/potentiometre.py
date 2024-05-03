from machine import Pin, ADC # importe dans le code la lib qui permet de gerer les Pin de sortie et de reception de signaux analogique
import utime # importe dans le code la lib qui permet de gerer le temps

adc = ADC(Pin(27, mode=Pin.IN)) # on prescise au programme que la pin 26 est une entré de type ADC
led = Pin(17, mode=Pin.OUT)

while True:# boucle infini
    print(int(val)) # ecrire la valeur de val en arrondisant à l'entier
    utime.sleep_ms(100) # attendre 100ms => 0.1 seconde
    led.on()     # change l'etat de la led 

    utime.sleep(1)# attendre 1 seconde 

    led.off() 