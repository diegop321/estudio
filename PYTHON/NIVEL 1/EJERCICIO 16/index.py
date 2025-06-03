# Crear un archivo CSV y llenarlo con datos ficticios.

import csv

datos = [
    ['Nombre', 'Edad', 'Ciudad'],
    ['Juan', 30, 'Bogota'],
    ['Maria', 25, 'Engativa']
]


with open('archivo.csv', 'a', newline='') as archivo_csv:

    escribir = csv.writer(archivo_csv)

    escribir.writerow(datos[0])

    for fila in datos[2:]:
        escribir.writerow(fila)
