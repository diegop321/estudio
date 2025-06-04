# Crear un archivo config.js y usarlo en múltiples scripts.
# Crear un archivo .env y usarlo en múltiples scripts.

from config import API_KEY, DEBUG

def usar_api():
    if DEBUG:
        print("Modo debug activado")
    print("Usando API con clave:", API_KEY)

usar_api()