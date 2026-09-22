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
  /**
   * Nombre legal completo, tal como consta en el registro. Es el que Meta
   * coteja: se usa sin abreviar en el footer, en /contacto y en la cabecera
   * de cada documento legal.
   */
  razonSocial: 'URBBY EL SALVADOR, SOCIEDAD ANÓNIMA DE CAPITAL VARIABLE',
  /** Forma corta, solo para prosa donde el nombre completo entorpece la lectura. */
  razonSocialCorta: 'Urbby El Salvador, S.A. de C.V.',
  marca: 'Urbby',
  dominio: 'urbby.app',
  sitio: 'https://urbby.app',

  /** Dirección exacta según la escritura. No abreviar ni reordenar. */
  direccion:
    'BLOCK #132, COLONIA ESCALÓN, Distrito de SAN SALVADOR, Municipio de SAN SALVADOR CENTRO, Departamento de SAN SALVADOR',
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

/**
 * La dirección ya nombra el distrito, el municipio y el departamento de San
 * Salvador, así que solo se le agrega el país: repetir la ciudad sonaría
 * redundante y se alejaría del texto de la escritura.
 */
export const direccionCompleta = `${empresa.direccion}, ${empresa.pais}`;
