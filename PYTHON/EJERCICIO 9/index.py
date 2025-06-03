# Usar fs.readdir para listar archivos de una carpeta.
from pathlib import Path


directorio = Path('C:/Users/DIEGOFPENA/Desktop/estudio/PYTHON/EJERCICIO 3')  

if directorio.exists() and directorio.is_dir():
    archivos = [archivo.name for archivo in directorio.iterdir() if archivo.is_file()]
    print("Archivos:", archivos)
else:
    print("La ruta no existe o no es un directorio.")
