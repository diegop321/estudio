# Usar path.join y path.resolve.

import os
from pathlib import Path

ruta_base = "/home/usuario"
nombre_archivo = "documento.txt"

print("con join")
ruta_completaJ = os.path.join(ruta_base, nombre_archivo)
print(ruta_completaJ)  


print("con path")
rutaCompletaP = (Path(".") / nombre_archivo).resolve() 
print( rutaCompletaP) 

rutaCompletaPa = Path("/home/usuario/documento.txt").resolve()
print(rutaCompletaPa) 