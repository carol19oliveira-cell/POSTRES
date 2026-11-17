import panoramaImg from '../assets/images/panorama_nove_travessas_1794594763095.jpg';
import fresasCremaImg from '../assets/images/travessa_ninho_morango_1794594764690.jpg';
import uvasChocolateImg from '../assets/images/travessa_uva_brownie_1794594764980.jpg';
import tresChocolatesImg from '../assets/images/postre_tres_chocolates_1794854188077.jpg';
import carlotaLimonImg from '../assets/images/travessa_limao_pessego_1794594763749.jpg';
import maracuyaGanacheImg from '../assets/images/postre_maracuya_ganache_1794854189595.jpg';
import duraznosVainillaImg from '../assets/images/postre_duraznos_vainilla_1794854189653.jpg';
import pinaCocoImg from '../assets/images/postre_pina_coco_1794854189737.jpg';
import mangoQuesoImg from '../assets/images/postre_mango_queso_1794854190122.jpg';
import dulceNuecesImg from '../assets/images/postre_dulce_nueces_1794854191352.jpg';
import mocaCafeImg from '../assets/images/postre_moca_cafe_1794854191348.jpg';
import galletasCacaoImg from '../assets/images/postre_galletas_cacao_1794854192155.jpg';
import brownieVainillaImg from '../assets/images/postre_brownie_vainilla_1794854192023.jpg';
import tresLechesImg from '../assets/images/postre_tres_leches_1794854193059.jpg';
import bananaDulceImg from '../assets/images/postre_banana_dulce_1794854194260.jpg';
import cheesecakeRojosImg from '../assets/images/postre_cheesecake_rojos_1794854195380.jpg';
import cocoChocolateImg from '../assets/images/postre_coco_chocolate_1794854194220.jpg';
import naranjaChocolateImg from '../assets/images/postre_naranja_chocolate_1794854196143.jpg';
import manzanaCanelaImg from '../assets/images/postre_manzana_canela_1794854195710.jpg';
import perasCarameloImg from '../assets/images/postre_peras_caramelo_1794854196165.jpg';
import panetonChocolateImg from '../assets/images/postre_paneton_chocolate_1794854196588.jpg';
import comboCompletoMockupImg from '../assets/images/combo_completo_mockup.png';
import bono1EnvasesImg from '../assets/images/bono1_envases_mockup.png';
import bono2CalculadoraImg from '../assets/images/bono2_calculadora_mockup.png';
import bono3PlannerImg from '../assets/images/bono3_planner_mockup.png';
import bono4KitPromocionImg from '../assets/images/bono4_kit_promocion_mockup.png';
import depoAvatar1Img from '../assets/images/depo_avatar_1.jpg';
import depoAvatar2Img from '../assets/images/depo_avatar_2.jpg';
import depoAvatar3Img from '../assets/images/depo_avatar_3.jpg';
import depoAvatar4Img from '../assets/images/depo_avatar_4.jpg';
import depoAvatar5Img from '../assets/images/depo_avatar_5.jpg';
import depoAvatar6Img from '../assets/images/depo_avatar_6.jpg';

export const PRODUCT_IMAGES = {
  panorama: panoramaImg,
  comboCompletoMockup: comboCompletoMockupImg,
  bono1Envases: bono1EnvasesImg,
  bono2Calculadora: bono2CalculadoraImg,
  bono3Planner: bono3PlannerImg,
  bono4KitPromocion: bono4KitPromocionImg,
};

export interface PostreVisualItem {
  id: string;
  numero: string;
  nombre: string;
  alt: string;
  imagen: string;
}

export const POSTRES_GALERIA: PostreVisualItem[] = [
  {
    id: 'fresas-vainilla',
    numero: '01',
    nombre: 'Fresas con crema de vainilla',
    alt: 'Postre en bandeja de fresas con crema de vainilla en capas',
    imagen: fresasCremaImg,
  },
  {
    id: 'uvas-chocolate',
    numero: '02',
    nombre: 'Uvas y chocolate semiamargo',
    alt: 'Postre en bandeja de uvas verdes con crema y chocolate semiamargo',
    imagen: uvasChocolateImg,
  },
  {
    id: 'tres-chocolates',
    numero: '03',
    nombre: 'Tres chocolates',
    alt: 'Postre en bandeja de tres chocolates en capas con rizos de chocolate',
    imagen: tresChocolatesImg,
  },
  {
    id: 'carlota-limon',
    numero: '04',
    nombre: 'Carlota cremosa de limón',
    alt: 'Carlota cremosa de limón en bandeja de vidrio con ralladura de limón',
    imagen: carlotaLimonImg,
  },
  {
    id: 'maracuya-ganache',
    numero: '05',
    nombre: 'Maracuyá con ganache',
    alt: 'Postre en bandeja de maracuyá con ganache de chocolate oscuro',
    imagen: maracuyaGanacheImg,
  },
  {
    id: 'duraznos-vainilla',
    numero: '06',
    nombre: 'Duraznos y vainilla',
    alt: 'Postre en bandeja con capas de duraznos y crema de vainilla',
    imagen: duraznosVainillaImg,
  },
  {
    id: 'pina-coco',
    numero: '07',
    nombre: 'Piña y coco',
    alt: 'Postre en bandeja de piña caramelizada y crema de coco tostado',
    imagen: pinaCocoImg,
  },
  {
    id: 'mango-queso',
    numero: '08',
    nombre: 'Mango y queso crema',
    alt: 'Postre en copa de vidrio con capas de mango fresco y queso crema',
    imagen: mangoQuesoImg,
  },
  {
    id: 'dulce-nueces',
    numero: '09',
    nombre: 'Dulce de leche y nueces',
    alt: 'Postre en bandeja de dulce de leche decorado con nueces caramelizadas',
    imagen: dulceNuecesImg,
  },
  {
    id: 'moca-cafe',
    numero: '10',
    nombre: 'Moca de café y chocolate',
    alt: 'Postre en capas de moca de café y chocolate espolvoreado con cacao',
    imagen: mocaCafeImg,
  },
  {
    id: 'galletas-cacao',
    numero: '11',
    nombre: 'Galletas de cacao y crema',
    alt: 'Postre en bandeja de galletas de cacao intercaladas con crema de vainilla',
    imagen: galletasCacaoImg,
  },
  {
    id: 'brownie-vainilla',
    numero: '12',
    nombre: 'Brownie y crema de vainilla',
    alt: 'Postre en bandeja de trozos de brownie con crema de vainilla y ganache',
    imagen: brownieVainillaImg,
  },
  {
    id: 'tres-leches',
    numero: '13',
    nombre: 'Tres leches de cuchara',
    alt: 'Pastel tres leches de cuchara en bandeja de vidrio con crema batida y canela',
    imagen: tresLechesImg,
  },
  {
    id: 'banana-dulce',
    numero: '14',
    nombre: 'Banana y dulce de leche',
    alt: 'Postre en bandeja con capas de banana fresca, dulce de leche y crema batida',
    imagen: bananaDulceImg,
  },
  {
    id: 'cheesecake-rojos',
    numero: '15',
    nombre: 'Cheesecake de frutos rojos',
    alt: 'Cheesecake en fuente de vidrio cubierto con frutos rojos y salsa brillante',
    imagen: cheesecakeRojosImg,
  },
  {
    id: 'coco-chocolate',
    numero: '16',
    nombre: 'Coco y chocolate',
    alt: 'Postre en bandeja con capas de crema de coco, chocolate y coco tostado',
    imagen: cocoChocolateImg,
  },
  {
    id: 'naranja-chocolate',
    numero: '17',
    nombre: 'Naranja y chocolate',
    alt: 'Postre en bandeja de chocolate oscuro con crema cítrica de naranja',
    imagen: naranjaChocolateImg,
  },
  {
    id: 'manzana-canela',
    numero: '18',
    nombre: 'Manzana y canela',
    alt: 'Postre en capas de manzanas caramelizadas con canela, crema y crumble',
    imagen: manzanaCanelaImg,
  },
  {
    id: 'peras-caramelo',
    numero: '19',
    nombre: 'Peras con caramelo',
    alt: 'Postre en capas de peras con caramelo dorado y crema de vainilla',
    imagen: perasCarameloImg,
  },
  {
    id: 'paneton-chocolate',
    numero: '20',
    nombre: 'Panetón con crema y chocolate',
    alt: 'Postre navideño en bandeja de panetón en cubos con crema y cobertura de chocolate',
    imagen: panetonChocolateImg,
  },
];

export const BENEFICIOS_VENTAJA = [
  {
    titulo: 'Preparación práctica por etapas',
    descricao: 'Organiza tu producción en casa de forma ordenada y sin apuros.',
    icon: 'clock' as const,
  },
  {
    titulo: 'Ingredientes conocidos y accesibles',
    descricao: 'Opciones pensadas con insumos fáciles de encontrar en tu ciudad.',
    icon: 'cart' as const,
  },
  {
    titulo: 'Presentación atractiva en la mesa',
    descricao: 'Capas visibles y acabados vistosos para lucirse en las fiestas.',
    icon: 'sparkles' as const,
  },
  {
    titulo: 'Ideales para compartir en Navidad',
    descricao: 'Formatos en bandeja pensados para reuniones familiares y pedidos de diciembre.',
    icon: 'gift' as const,
  },
  {
    titulo: 'Recetas probadas paso a paso',
    descricao: 'Cantidades claras y montaje detallado para trabajar con seguridad.',
    icon: 'layers' as const,
  },
  {
    titulo: 'Versátiles todo el año',
    descricao: 'Sabores que también puedes ofrecer en fines de semana y celebraciones.',
    icon: 'calendar' as const,
  },
];

export const HIGHLIGHTS_POR_DENTRO = [
  {
    id: 'ingredientes',
    numero: '01',
    titulo: 'Ingredientes y cantidades',
    descripcion: 'Lista clara con las proporciones exactas de cada preparación.',
    slotLabel: 'Espacio preparado para captura de página: Ingredientes y cantidades',
  },
  {
    id: 'preparacion',
    numero: '02',
    titulo: 'Preparación paso a paso',
    descripcion: 'Indicaciones ordenadas para elaborar cada crema, base y cobertura.',
    slotLabel: 'Espacio preparado para captura de página: Preparación paso a paso',
  },
  {
    id: 'montaje',
    numero: '03',
    titulo: 'Montaje de las capas',
    descripcion: 'Secuencia visual y escrita para armar cada bandeja de manera prolija.',
    slotLabel: 'Espacio preparado para captura de página: Montaje de las capas',
  },
  {
    id: 'conservacion',
    numero: '04',
    titulo: 'Orientaciones de conservación',
    descripcion: 'Pautas de almacenamiento para cuidar la textura y presentación.',
    slotLabel: 'Espacio preparado para captura de página: Guía de conservación',
  },
];

export interface ComboOferta {
  id: 'esencial' | 'completo';
  titulo: string;
  selo?: string;
  preco: string;
  link: string;
  textoBotao: string;
  beneficios: string[];
}

export const COMBOS_OFERTA: ComboOferta[] = [
  {
    id: 'esencial',
    titulo: 'Combo Esencial',
    preco: 'US$ 5',
    link: 'https://pay.hotmart.com/S108527275B?off=dw34bddz',
    textoBotao: 'Quiero el Combo Esencial',
    beneficios: [
      '10 postres irresistibles para Navidad',
      'Montaje paso a paso',
      'Guía de conservación y almacenamiento',
    ],
  },
  {
    id: 'completo',
    titulo: 'Combo Completo',
    selo: 'Nuestra recomendación',
    preco: 'US$ 9',
    link: 'https://pay.hotmart.com/S108527275B?off=hfjuw1vh',
    textoBotao: 'Quiero el Combo Completo',
    beneficios: [
      '20 postres irresistibles para Navidad',
      'Montaje paso a paso',
      '12 cremas y rellenos',
      'Bases y coberturas',
      'Guía de conservación y almacenamiento',
      'Guía de envases y presentación',
      'Calculadora de precios',
      'Planner de pedidos',
      'Kit de promoción',
    ],
  },
];

export interface DepoimentoItem {
  id: string;
  nombre: string;
  origen: string;
  formato: 'instagram' | 'facebook' | 'mensaje';
  avatar: string;
  texto: string;
  destacado?: string;
  tiempo: string;
}

export const DEPOIMENTOS: DepoimentoItem[] = [
  {
    id: 'depo-1',
    nombre: '@valeria.ayala',
    origen: 'Comentó en Instagram',
    formato: 'instagram',
    avatar: depoAvatar1Img,
    texto:
      'El mejor recetario que compré, y eso que ya había comprado varios. Este fue el único que leí completo y puse en práctica enseguida. Nunca había hecho postres para vender en mi vida y este fin de semana ya entregué 4 bandejas. Solo recibo elogios, ¡dicen que parecen de las mejores pastelerías de mi ciudad! ❤️',
    tiempo: '3 min',
  },
  {
    id: 'depo-2',
    nombre: '@paularojas.postres',
    origen: 'Comentó en Instagram',
    formato: 'instagram',
    avatar: depoAvatar2Img,
    texto:
      'Compré el recetario hace un mes y fue la mejor decisión que tomé. Estoy impresionada con el contenido y realmente entrega todo lo que promete. Además, ¡estoy vendiendo muchísimo estos postres en bandeja! ❤️',
    destacado: 'fue la mejor decisión que tomé',
    tiempo: '12 min',
  },
  {
    id: 'depo-3',
    nombre: 'Mónica Herrera',
    origen: 'Comentario en Facebook',
    formato: 'facebook',
    avatar: depoAvatar3Img,
    texto:
      '¡Chicas, qué recetario tan maravilloso! El valor se recupera con la primera bandeja que vendes, en serio es buenísima. Además de las recetas, entiendes las cremas y bases para armar tus propias combinaciones. ¡Compren sin dudar y pónganse a preparar!',
    tiempo: '2 h',
  },
  {
    id: 'depo-4',
    nombre: '@marce.dulcehogar',
    origen: 'Mensaje directo',
    formato: 'mensaje',
    avatar: depoAvatar4Img,
    texto:
      'Realmente fue la mejor inversión que hice. Trabajo con repostería saludable hace unos años y nunca había preparado postres tradicionales en bandeja. Compré los ingredientes, seguí el paso a paso ilustrado del recetario y quedaron simplemente PERFECTOS. ¡Mil gracias por compartir tanto detalle! 🤎',
    tiempo: 'Ayer',
  },
  {
    id: 'depo-5',
    nombre: 'Daniela Navarro',
    origen: 'Respondió a tu historia',
    formato: 'mensaje',
    avatar: depoAvatar5Img,
    texto:
      'Compré el recetario completo y se nota la dedicación para explicar absolutamente todo con detalle, hasta los envases y cómo calcular los precios. Es la primera vez que compro un producto digital y siento que realmente valió la pena.',
    destacado: 'Es la primera vez que compro un producto digital y siento que realmente valió la pena.',
    tiempo: '19:07',
  },
  {
    id: 'depo-6',
    nombre: 'Camila Paredes',
    origen: 'Respondió a tu historia',
    formato: 'mensaje',
    avatar: depoAvatar6Img,
    texto:
      'El recetario está súper bien explicado; tengo otros libros digitales de repostería, pero ninguno tan claro como este montaje paso a paso. Cada receta salió a la primera y con una presentación hermosa. ¡10 de 10! 🍰😍',
    tiempo: '19:24',
  },
];

export const PREGUNTAS_FRECUENTES = [
  {
    pergunta: '¿Cuál es la diferencia entre el Combo Esencial y el Combo Completo?',
    resposta:
      'El Combo Esencial (US$ 5) incluye 10 postres irresistibles para Navidad, montaje paso a paso y la guía de conservación y almacenamiento. El Combo Completo (US$ 9) incluye las 20 recetas de postres, montaje paso a paso, 12 cremas y rellenos, bases y coberturas, guía de conservación y almacenamiento, la guía de envases y presentación y el kit de precios, organización y promoción.',
  },
  {
    pergunta: '¿Cómo recibo los archivos después de comprar?',
    resposta:
      'La entrega es 100% digital. Una vez confirmado el pago, recibirás en tu correo electrónico el acceso para descargar los archivos y revisarlos desde tu celular, tableta o computadora, o imprimirlos si lo deseas.',
  },
  {
    pergunta: '¿Es un recetario escrito o incluye clases en video?',
    resposta:
      'Es un material 100% digital e ilustrado con explicaciones paso a paso por escrito y recursos descargables para consultar desde tus dispositivos o imprimir, sin clases en video ni soporte individual.',
  },
  {
    pergunta: '¿En qué formato vienen los materiales editables del Combo Completo?',
    resposta:
      'Los menús, posts, stories y demás plantillas editables del Kit de precios, organización y promoción se entregan en formato PPTX (listos para importar en Canva) acompañados de archivos en PNG. La guía de envases y presentación incluye etiquetas y tarjetas imprimibles.',
  },
  {
    pergunta: '¿Los postres sirven solo para Navidad?',
    resposta:
      'Están pensados especialmente para la temporada navideña, pero puedes adaptarlos y prepararlos durante todo el año para reuniones familiares y otras fechas especiales.',
  },
  {
    pergunta: '¿Cómo funciona la garantía de 7 días?',
    resposta:
      'Cuentas con 7 días de garantía desde la fecha de compra. Si dentro de ese plazo sientes que el material no es lo que buscabas, puedes solicitar el reembolso del 100% de tu compra.',
  },
];
