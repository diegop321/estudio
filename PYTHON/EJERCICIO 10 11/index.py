# Leer un archivo JSON y convertirlo en objeto.  10
# Escribir un objeto en un archivo JSON.    11



import json 

with open("PYTHON/EJERCICIO 10 11/book.json", "r") as j:
    data=json.load(j)
    print(data)


