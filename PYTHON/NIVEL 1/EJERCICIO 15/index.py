# Detectar el sistema operativo con os.platform().

import platform

sistemaOperativo = platform.system()

print(f"El sistema operativo es: {sistemaOperativo}")


if sistemaOperativo == "Windows":
    version = platform.version()
    versionwin = platform.release()
    print("La versión de Windows es:", version)
    print("version de publicacion-el windows es: ", versionwin)

elif sistemaOperativo == "Linux":
    release = platform.release()
    print("La release de Linux es: ", release)

elif sistemaOperativo == "Darwin":
    version = platform.version()
    print("La versión de macOS es: ", version)

else:
    print("El sistema operativo no se reconoce.")