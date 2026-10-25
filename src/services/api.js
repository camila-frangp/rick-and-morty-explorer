const BASE_URL = 'https://rickandmortyapi.com/api';

// Función base: hace la petición y transforma las respuestas HTTP con error en excepciones
async function request(endpoint) {
  let response;

  try {
    response = await fetch(`${BASE_URL}${endpoint}`);
  } catch {
    throw new Error('No se pudo conectar con la API. Revisa tu conexión a internet.');
  }

  if (!response.ok) {
    const error = new Error(`Error ${response.status} al consultar la API.`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

// Obtiene una página de personajes, con filtros opcionales (name, status, gender)
export async function getCharacters({ page = 1, name = '', status = '', gender = '' } = {}) {
  const params = new URLSearchParams({ page });
  if (name) params.append('name', name);
  if (status) params.append('status', status);
  if (gender) params.append('gender', gender);

  try {
    return await request(`/character?${params}`);
  } catch (error) {
    // La API responde 404 cuando la búsqueda no tiene resultados: no es un error real
    if (error.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }
    throw error;
  }
}

// Obtiene un personaje por su id
export async function getCharacterById(id) {
  try {
    return await request(`/character/${id}`);
  } catch (error) {
    if (error.status === 404) {
      throw new Error('El personaje que buscas no existe.');
    }
    throw error;
  }
}

// Obtiene varios episodios a partir de sus URLs completas (como vienen en cada personaje)
export async function getEpisodesByUrls(urls) {
  if (urls.length === 0) return [];

  const ids = urls.map((url) => url.split('/').pop());
  const data = await request(`/episode/${ids.join(',')}`);

  // Con un solo id la API devuelve un objeto, con varios devuelve un array
  return Array.isArray(data) ? data : [data];
}
