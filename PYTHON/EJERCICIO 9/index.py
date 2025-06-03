# Usar fs.readdir para listar archivos de una carpeta.


import pathlib

buscar = 'PYTHON/EJERCICIO 3'
directorio = pathlib.Path(buscar)
for fichero in directorio.iterdir():
    print(fichero.name)