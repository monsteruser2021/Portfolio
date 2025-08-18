import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

// Filtros editables
const FILTERS = [
  { label: 'Todos', value: 'todos' },
  { label: 'Aplicaciones Web', value: 'web' },
  { label: 'Paginas web', value: 'pagina' },
  { label: 'UI/UX', value: 'uiux' },
  { label: 'Inventario', value: 'inventario' },
  { label: 'Wirefrane', value: 'wireframe' },
];

// Array de proyectos editables
const PROJECTS = [
  {
    id: 1,
    destacado: true,
    imagen: '/p1.png',
    tipo: 'uiux',
    tipoLabel: 'UI/UX',
    titulo: 'Diseño de UI/UX para aplicación de ferias de negocios',
    descripcion: 'Este proyecto muestra el diseño UI/UX de una aplicación web para ferias de negocios, concebida para mejorar la experiencia de expositores y visitantes. El objetivo principal fue desarrollar una interfaz intuitiva que facilitara la navegación por eventos, la reserva de expositores y el acceso a información relevante garantizando una experiencia fluida y eficiente antes, durante y después del evento.',
    tecnologias: ['Penpot'],
    enlace: 'https://design.penpot.app/#/view?file-id=4ab560d5-4b40-819e-8006-9259aaa8fd3e&page-id=242b3a97-6e1b-8096-8006-9265aae3266d&section=interactions&frame-id=242b3a97-6e1b-8096-8006-9265bf260e35&index=2&interactions-mode=show-on-click&zoom=fit&share-id=4ab560d5-4b40-819e-8006-9289a8445ec0',
  },
  {
    id: 2,
    destacado: false,
    imagen: '/p2.png',
    tipo: 'pagina',
    tipoLabel: 'Páginas Web',
    titulo: 'Catálogo digital de productos personalizados',
    descripcion: 'Proyecto web diseñado para la exhibición interactiva de artículos personalizados. Enfocado en una interfaz de usuario intuitiva y la presentación dinámica de productos, este desarrollo demuestra mi capacidad para crear soluciones visuales efectivas para el comercio de productos a medida.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    enlace: 'https://pk-catalog.netlify.app/',
  },
  {
    id: 3,
    destacado: true,
    imagen: '/p3.png',
    tipo: 'pagina',
    tipoLabel: 'Páginas Web',
    titulo: 'Página web para estilista profesional',
    descripcion: 'Este proyecto es el desarrollo de un sitio web profesional diseñado específicamente para un estilista, funcionando como un portafolio digital inmersivo.',
    tecnologias: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    enlace: 'https://ruxstylist.netlify.app/',
  },
  {
    id: 4,
    destacado: false,
    imagen: '/p4.png',
    tipo: 'inventario',
    tipoLabel: 'Inventario',
    titulo: 'Inventario simple para bienes públicos',
    descripcion: 'Este proyecto es un sistema de inventario simple para bienes públicos, desarrollado en C++ como parte de una práctica universitaria. Su objetivo principal fue aplicar y consolidar conceptos fundamentales de programación, como la gestión de datos (CRUD) y la implementación de estructuras de datos básicas.',
    tecnologias: ['C++'],
    enlace: 'https://github.com/monsteruser2021/cpp-inventory',
  },
  {
    id: 5,
    destacado: true,
    imagen: '/p5.png',
    tipo: 'uiux',
    tipoLabel: 'UI/UX',
    titulo: 'Diseño UI/UX para Portal de Apps Web',
    descripcion: 'Este proyecto se enfoca en el diseño UI/UX de un portal centralizado para aplicaciones web, concebido para ofrecer una experiencia de usuario optimizada en la gestión y acceso a diversas herramientas digitales. El objetivo principal fue crear una interfaz intuitiva y un flujo de navegación eficiente que permitiera a los usuarios descubrir, organizar y lanzar aplicaciones de manera sencilla.',
    tecnologias: ['Penpot'],
    enlace: 'https://design.penpot.app/#/view?file-id=6405ac36-95a1-80cf-8006-928a30351d66&page-id=78d81f28-a5e0-80d1-8006-92904fdbf63d&section=interactions&index=0&zoom=fit&share-id=4ab560d5-4b40-819e-8006-9290dde0b896',
  },
  {
    id: 6,
    destacado: false,
    imagen: '/p6.png',
    tipo: 'pagina',
    tipoLabel: 'Páginas Web',
    titulo: 'Página web para fanáticos de los Chevrolet Camaro',
    descripcion: 'Este proyecto es el desarrollo de una plataforma web dedicada a los entusiastas del Chevrolet Camaro. Diseñada para ser el punto de encuentro definitivo para la comunidad, la página ofrece un espacio interactivo donde los usuarios pueden explorar galerías de fotos, participar en foros de discusión, compartir información sobre modelos y generaciones, y mantenerse al día con las últimas noticias del universo Camaro.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://camaroworld.netlify.app/',
  },
  {
    id: 7,
    destacado: false,
    imagen: '/p7.png',
    tipo: 'uiux',
    tipoLabel: 'UI/UX',
    titulo: 'Portafolio para Artista 3D y Modder (Diseño UI/UX)',
    descripcion: 'Diseño UI/UX para un portafolio web de un creador de mods de videojuegos y modelador 3D. El proyecto se enfocó en una presentación visual estilo retro y una navegación intuitiva. Demuestra habilidades en la creación de interfaces atractivas y funcionales para la industria creativa, destacando trabajos de modelado y modificaciones de juegos.',
    tecnologias: ['Penpot'],
    enlace: 'https://design.penpot.app/#/view?file-id=2865325e-59a5-8115-8005-dbed3f647961&page-id=78d81f28-a5e0-80d1-8006-928aa93de8cf&section=interactions&frame-id=78d81f28-a5e0-80d1-8006-928aad5c96d8&index=1&share-id=6405ac36-95a1-80cf-8006-928b834ac17a',
  },
  {
    id: 8,
    destacado: false,
    imagen: '/p8.png',
    tipo: 'pagina',
    tipoLabel: 'Páginas Web',
    titulo: 'Página web para el cuidado de la salud mental',
    descripcion: 'Este proyecto es el desarrollo de una página web dedicada al cuidado de la salud mental, creada como parte de una práctica universitaria. Su principal objetivo es ofrecer un recurso accesible y de apoyo para usuarios interesados en el bienestar psicológico. La plataforma incorpora información relevante, recursos útiles y posiblemente funcionalidades interactivas.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://monsteruser2021.github.io/vital-mind/',
  },
  {
    id: 10,
    destacado: false,
    imagen: '/p10.png',
    tipo: 'wireframe',
    tipoLabel: 'Wireframe',
    titulo: 'Wireframes para Web Institucional',
    descripcion: 'Este proyecto es el diseño de los wireframes para una página web institucional. El objetivo principal fue establecer la arquitectura de información y la estructura básica del sitio, asegurando una navegación intuitiva y una jerarquía de contenido clara para los diferentes públicos. Se centró en la funcionalidad y la usabilidad para guiar el posterior desarrollo visual y de contenido del portal.',
    tecnologias: ['Penpot'],
    enlace: 'https://design.penpot.app/#/view?file-id=bbaed550-e65f-8192-8006-a1edcc85f616&page-id=e21d721b-b52f-80fd-8006-a1aa99ec95c4&section=interactions&index=0&share-id=bbaed550-e65f-8192-8006-a1ef450e851e',
  },
];

{/**
  // Opciones para buscar tecnologías
const getTechList = (projects: typeof PROJECTS) =>
Array.from(new Set(projects.flatMap((p) => p.tecnologias)));
 */}

const PROJECTS_PER_PAGE = 9;

// Card de proyecto
const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => (
  <div className="bg-[#130000] border border-[#ececec] hover:border-[#e27231] hover:-translate-y-2.5 transition-all duration-300 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
    <div className="relative">
      {project.destacado && (
        <span className="absolute top-2 left-2 bg-[#e84624] text-white text-xs font-bold px-2 py-1 rounded z-10 shadow">
          Destacado
        </span>
      )}
      <Image
        src={project.imagen}
        alt={project.titulo}
        width={400}
        height={160}
        className="w-full h-40 object-cover"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="flex flex-col flex-grow p-4">
      <span className="text-xs font-semibold text-[#e84624] mb-1">{project.tipoLabel}</span>
      <h3 className="text-lg font-bold text-gray-100 mb-1">{project.titulo}</h3>
      <p className="text-gray-300 text-sm mb-2 flex-grow">{project.descripcion}</p>
      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {project.tecnologias.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800 text-xs text-gray-100 px-2 py-1 rounded border border-gray-300 "
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-[#e84624] text-white py-1 px-3 rounded-md hover:bg-[#e27231] transition-colors duration-200 text-xs font-semibold w-max"
      >
        Ver proyecto
      </a>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  // Estados de búsqueda, filtro y página
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('todos');
  const [page, setPage] = useState(1);

  // Proyectos filtrados y buscados
  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS;
    // Filtro por tipo
    if (filter !== 'todos') {
      filtered = filtered.filter((p) => p.tipo === filter);
    }
    // Filtro por búsqueda en nombre o tecnología
    if (search.trim()) {
      const term = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.titulo.toLowerCase().includes(term) ||
          p.tecnologias.some((t) => t.toLowerCase().includes(term))
      );
    }
    return filtered;
  }, [filter, search]);

  // Paginación
  const total = filteredProjects.length;
  const totalPages = Math.ceil(total / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  // Si cambio búsqueda o filtro, regreso a la pag 1
  React.useEffect(() => {
    setPage(1);
  }, [search, filter]);

  return (
    <div className="bg-zinc-900 min-h-screen w-full pb-10">
      {/* Botón regresar */}
      <div className="flex items-center pt-10 pl-10">
        <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-[#e84624] font-semibold text-sm transition-colors duration-200">
          <FaArrowLeft className="text-lg" />
          Regresar
        </Link>
      </div>
      {/* Título y subtítulo */}
      <div className="mt-2 mb-8 ml-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Todos los proyectos</h1>
        <p className="text-gray-400 text-base">Explora mi portafolio completo de desarrollo web de proyectos</p>
      </div>
      {/* Navegación */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        {/* Barra de búsqueda */}
        <div className="flex-1 w-full md:w-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar por nombre o tecnología..."
            className="w-full md:w-[350px] p-2 rounded bg-zinc-800 border border-zinc-700 text-gray-100 focus:outline-none focus:border-[#e84624] transition-all duration-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Filtros */}
        <div className="flex gap-2 flex-wrap mt-2 md:mt-0">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200
                ${filter === f.value
                  ? 'bg-[#e84624] border-[#e84624] text-white'
                  : 'bg-zinc-800 border-zinc-700 text-gray-200 hover:bg-[#e27231] hover:border-[#e27231] hover:text-white'
                }`}
              onClick={() => setFilter(f.value)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {/* Galería */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProjects.length ? (
          paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-12">
            No se encontraron proyectos con esos criterios.
          </div>
        )}
      </div>
      {/* Paginación */}
      <div className="w-[90%] mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-gray-400 text-sm mb-2 sm:mb-0">
          Mostrando {paginatedProjects.length} de {total} proyectos
        </div>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`px-4 py-1 rounded border border-gray-100 text-gray-200 font-semibold transition-all duration-200 ${page === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#e84624] hover:text-white'}`}
          >
            Anterior
          </button>
          <span className="px-2 text-gray-300 font-medium">{page} / {totalPages || 1}</span>
          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className={`px-4 py-1 rounded border border-gray-100 text-gray-200 font-semibold transition-all duration-200 ${(page === totalPages || totalPages === 0) ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#e84624] hover:text-white'}`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;