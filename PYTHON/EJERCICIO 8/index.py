# Crear un contador con setInterval

import threading

def contador():
    global c
    print(c)
    c += 1
    
    threading.Timer(5, contador).start()


c = 0


contador()
