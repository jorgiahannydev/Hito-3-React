/**
 * Formatea un número como precio con separador de miles.
 * Ej: 25000 -> "25.000"
 * @param {number} value - Valor numérico a formatear
 * @returns {string} Valor formateado
 */
export const formatPrice = (value) => {
  return value.toLocaleString('es-CL');
};
