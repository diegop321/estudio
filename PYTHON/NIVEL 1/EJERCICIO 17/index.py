# Leer argumentos desde la terminal (process.argv).

import sys

print("Todos los argumentos:", sys.argv)

print("Argumentos sin el nombre del script:", sys.argv[1:])

if len(sys.argv) > 1:
    primerArgumento = sys.argv[0]
    print("El primer argumento es:", primerArgumento)
else:
    print("No se encontraron argumentos")