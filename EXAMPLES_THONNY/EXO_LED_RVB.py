from machine import Pin, PWM

import utime 

ledVert = PWM(Pin(17,mode=Pin.OUT)) 
ledVert.freq(1_000)
ledVert.duty_u16(0)
ledBleu = PWM(Pin(16,mode=Pin.OUT)) 
ledBleu.freq(1_000)
ledBleu.duty_u16(0)
ledRouge = PWM(Pin(18,mode=Pin.OUT)) 
ledRouge.freq(1_000)
ledRouge.duty_u16(0)


while True:          # faire du blanc

    ledVert.duty_u16(5000)
    ledBleu.duty_u16(5000)
    ledRouge.duty_u16(5000)
    
# while True:          # faire du violet
# 
#     ledBleu.duty_u16(5000)
#     ledRouge.duty_u16(5000)

# while True:          # faire les coull=eurs individuelles ex: rouge
# 
#     ledRouge.duty_u16(5000)
