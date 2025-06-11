# Usar child_process para ejecutar un comando externo.

import subprocess

result = subprocess.run(["uptime"])
print(result) 




