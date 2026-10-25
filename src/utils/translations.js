// La API devuelve los textos en inglés: estas funciones los traducen para mostrarlos en la interfaz

const estados = {
  Alive: 'Vivo',
  Dead: 'Muerto',
  unknown: 'Desconocido',
};

const generos = {
  Female: 'Femenino',
  Male: 'Masculino',
  Genderless: 'Sin género',
  unknown: 'Desconocido',
};

export function traducirEstado(status) {
  return estados[status] ?? status;
}

export function traducirGenero(gender) {
  return generos[gender] ?? gender;
}

export function traducirLugar(nombre) {
  return nombre === 'unknown' ? 'Desconocido' : nombre;
}
