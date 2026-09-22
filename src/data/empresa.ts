/**
 * Datos legales de la empresa, en un solo lugar.
 *
 * IMPORTANTE: estos valores deben coincidir EXACTAMENTE con los documentos de
 * registro de la sociedad en El Salvador. Meta los coteja durante la
 * verificación del negocio, así que un dato distinto al de la escritura de
 * constitución puede hacer que rechacen la verificación.
 *
 * Los valores entre corchetes siguen pendientes de completar.
 */
export const empresa = {
  razonSocial: 'Urbby El Salvador S.A. de C.V.',
  marca: 'Urbby',
  dominio: 'urbby.app',
  sitio: 'https://urbby.app',

  direccion: '[DIRECCIÓN EXACTA SEGÚN ESCRITURA DE CONSTITUCIÓN]',
  ciudad: 'San Salvador',
  pais: 'El Salvador',

  correo: 'CORREO@urbby.app',
  telefono: '+503 [TELÉFONO]',
  /** Sólo dígitos, para los enlaces tel: y wa.me */
  telefonoEnlace: '+50300000000',

  nit: '[NIT]',
  nrc: '[NRC]',

  actualizado: '22 de septiembre de 2026',
} as const;

/** Código de verificación de dominio de Meta Business Manager.
 *  Configuración del negocio › Seguridad de la marca › Dominios. */
export const metaDomainVerification = 'PEGAR_CODIGO_DE_VERIFICACION_AQUI';

export const direccionCompleta =
  `${empresa.direccion}, ${empresa.ciudad}, ${empresa.pais}`;
