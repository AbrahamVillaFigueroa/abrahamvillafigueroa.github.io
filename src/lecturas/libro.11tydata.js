// A book gets its own page at /lecturas/<slug>/ only when its org file has a
// commentary body and no #+ENLACE: pointing somewhere else. Everything else is
// just a row in the table at /lecturas/, so it is filtered out before
// pagination and no page is generated for it.
const tieneComentario = (libro) =>
  !libro.data.enlace && String(libro.content || "").trim().length > 0;

module.exports = {
  pagination: {
    data: "collections.orgLibros",
    size: 1,
    alias: "libro",
    before: (libros) => libros.filter(tieneComentario),
  },
  eleventyComputed: {
    title: (data) => (data.libro ? data.libro.title : ""),
    permalink: (data) =>
      data.libro
        ? `/lecturas/${String(data.libro.data.slug).replace(/^\//, "")}/`
        : false,
  },
};
