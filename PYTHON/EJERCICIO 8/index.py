import threading

def contador():
    global count
    print(count)
    count += 1
    
    threading.Timer(1, contador).start()


count = 0


contador()
