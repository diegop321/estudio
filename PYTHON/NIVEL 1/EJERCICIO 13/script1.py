import config

def conectar_base_de_datos():
    print("Conectando a la base de datos en", config.DB_HOST, "puerto", config.DB_PORT)

conectar_base_de_datos()