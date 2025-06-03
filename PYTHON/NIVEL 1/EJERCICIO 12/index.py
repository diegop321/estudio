# Crear logs en consola con diferentes niveles (info, warn, error).
# import logging
# logging.warning('funciona')  # will print a message to the console
# logging.info('info')  # will not print anything



import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug('info detallada diagnostico problemas')
logging.info('confirmacion todo esta bien ')

logging.warning('algo inisperado sucedio')
logging.error('este es un error oooooooo')