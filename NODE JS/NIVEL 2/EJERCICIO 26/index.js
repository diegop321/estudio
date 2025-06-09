// Usar Promise.all con múltiples promesas.

function funcion1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Resultado de tarea 1'), 1000);
  });
}

function funcion2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Resultado de tarea 2'), 1500);
  });
}

function funcion3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Resultado de tarea 3'), 500);
  });
}

async function solucion() {
  try {
    const resultados = await Promise.all([funcion1(), funcion2(), funcion3()]);
    console.log('Todos los resultados:', resultados);
  } catch (error) {
    console.error('Error en alguna promesa:', error.message);
  }
}

solucion();
