var productos = [
    {
        codigo: "JM001",
        categoria: "juegos",
        nombre: "Catan",
        precio: 29990,
        descripcion: "Un clasico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
        fabricante: "Catan Studio",
        imagen: "assets/img/Catan.png"
    },
    {
        codigo: "JM002",
        categoria: "juegos",
        nombre: "Carcassonne",
        precio: 24990,
        descripcion: "Un juego de colocacion de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y facil de aprender.",
        fabricante: "Hans im Gluck",
        imagen: "assets/img/Carcassonne.png"
    },
    {
        codigo: "AC001",
        categoria: "accesorios",
        nombre: "Controlador Xbox Series X",
        precio: 59990,
        descripcion: "Ofrece una experiencia de juego comoda con botones mapeables y una respuesta tactil mejorada. Compatible con consolas Xbox y PC.",
        fabricante: "Microsoft",
        imagen: "assets/img/Controlador Xbox Series X.png"
    },
    {
        codigo: "AC002",
        categoria: "accesorios",
        nombre: "Auriculares HyperX Cloud II",
        precio: 79990,
        descripcion: "Proporcionan un sonido envolvente de calidad con un microfono desmontable y almohadillas de espuma viscoelastica para mayor comodidad durante largas sesiónes de juego.",
        fabricante: "HyperX",
        imagen: "assets/img/Auriculares HyperX Cloud II.png"
    },
    {
        codigo: "CO001",
        categoria: "consolas",
        nombre: "PlayStation 5",
        precio: 549990,
        descripcion: "La consola de ultima generacion de Sony, que ofrece graficos impresionantes y tiempos de carga ultrarrapidos para una experiencia de juego inmersiva.",
        fabricante: "Sony",
        imagen: "assets/img/PlayStation 5.png"
    },
    {
        codigo: "CG001",
        categoria: "computadores",
        nombre: "PC Gamer ASUS ROG Strix",
        precio: 1299990,
        descripcion: "Un potente equipo disenado para los gamers mas exigentes, equipado con los ultimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
        fabricante: "ASUS",
        imagen: "assets/img/PC Gamer ASUS ROG Strix.png"
    },
    {
        codigo: "SG001",
        categoria: "sillas",
        nombre: "Silla Gamer Secretlab Titan",
        precio: 349990,
        descripcion: "Diseñada para el maximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiónes de juego prolongadas.",
        fabricante: "Secretlab",
        imagen: "assets/img/Silla Gamer Secretlab Titan.png"
    },
    {
        codigo: "MS001",
        categoria: "mouse",
        nombre: "Mouse Logitech G502 HERO",
        precio: 49990,
        descripcion: "Con sensor de alta precision y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
        fabricante: "Logitech",
        imagen: "assets/img/Mouse Logitech G502 HERO.png"
    },
    {
        codigo: "MP001",
        categoria: "mousepad",
        nombre: "Mousepad Razer Goliathus Extended Chroma",
        precio: 29990,
        descripcion: "Ofrece un area de juego amplia con iluminacion RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
        fabricante: "Razer",
        imagen: "assets/img/Mousepad Razer Goliathus Extended Chroma.png"
    },
    {
        codigo: "PP001",
        categoria: "poleras",
        nombre: "Polera Gamer Personalizada Level-Up",
        precio: 14990,
        descripcion: "Una camiseta comoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseno favorito.",
        fabricante: "Level-Up Gamer",
        imagen: "assets/img/Polera.png"
    },
    {
        codigo: "PG001",
        categoria: "polerones",
        nombre: "Poleron Gamer Level-Up",
        precio: 24990,
        descripcion: "Poleron comodo para gamer con diseno exclusivo de Level-Up Gamer. Ideal para jugar en frio.",
        fabricante: "Level-Up Gamer",
        imagen: "assets/img/Poleron.png"
    },
    {
        codigo: "ST001",
        categoria: "servicio-tecnico",
        nombre: "Servicio Tecnico Basico",
        precio: 19990,
        descripcion: "Diagnostico y reparacion basica de consolas, computadores y accesorios gamer por tecnicos certificados.",
        fabricante: "Level-Up Gamer",
        imagen: "assets/img/Servicio_tecnico.jpg"
    }
];

function toggleMenu() {
    var menu = document.getElementById('menu-enlaces');
    if (menu) {
        menu.classList.toggle('activo');
    }
}

var reseñasBase = [
    { codigo: "JM001", usuario: "Carlos M.", estrellas: 5, texto: "Juego muy entretenido, perfecto para jugar en familia." },
    { codigo: "JM001", usuario: "Ana R.", estrellas: 4, texto: "Muy buen juego pero demora un poco en aprenderlo." },
    { codigo: "CO001", usuario: "Pedro S.", estrellas: 5, texto: "La mejor consola que he tenido, graficos increibles." },
    { codigo: "CO001", usuario: "Maria L.", estrellas: 5, texto: "Excelente, los juegos se ven spectaculares." },
    { codigo: "AC002", usuario: "Jorge P.", estrellas: 5, texto: "Sonido brutalo y muy comodos para sesiónes largas." },
    { codigo: "CG001", usuario: "Luis F.", estrellas: 5, texto: "PC potente, corre todo en ultra sin problemas." },
    { codigo: "SG001", usuario: "Carla V.", estrellas: 4, texto: "Muy comoda pero el ensamblaje toma tiempo." },
    { codigo: "MS001", usuario: "Roberto D.", estrellas: 5, texto: "Precision perfecta, ideal para FPS." },
    { codigo: "PP001", usuario: "Francisco G.", estrellas: 4, texto: "Buena calidad de tela y estampa." },
    { codigo: "MP001", usuario: "Daniela S.", estrellas: 5, texto: "La iluminacion RGB queda genial en el escritorio." }
];

function obtenerTodasReseñas() {
    var guardadas = localStorage.getItem('reseñas');
    var usuarioGuardadas = guardadas ? JSON.parse(guardadas) : [];
    return reseñasBase.concat(usuarioGuardadas);
}

function guardarReseña(codigo, usuario, estrellas, texto) {
    var guardadas = localStorage.getItem('reseñas');
    var lista = guardadas ? JSON.parse(guardadas) : [];
    lista.push({ codigo: codigo, usuario: usuario, estrellas: estrellas, texto: texto });
    localStorage.setItem('reseñas', JSON.stringify(lista));
}

var codigosReferidos = ["LEVELUP2026", "GAMER100", "CHILEPLAY", "NIVELES50"];

function obtenerCarrito() {
    var carrito = localStorage.getItem('carrito');
    if (carrito) {
        return JSON.parse(carrito);
    } else {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(codigo) {
    var carrito = obtenerCarrito();
    var producto = null;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].codigo === codigo) {
            producto = productos[i];
            break;
        }
    }
    if (!producto) return;

    var existe = false;
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].codigo === codigo) {
            carrito[i].cantidad = carrito[i].cantidad + 1;
            existe = true;
            break;
        }
    }
    if (existe === false) {
        var nuevo = {
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            icono: producto.icono,
            imagen: producto.imagen || null,
            cantidad: 1
        };
        carrito.push(nuevo);
    }
    guardarCarrito(carrito);
    actualizarContador();
    console.log('Producto agregado: ' + producto.nombre);
    alert('Agregado al carrito!');
}

function eliminarDelCarrito(codigo) {
    var carrito = obtenerCarrito();
    var nuevo = [];
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].codigo !== codigo) {
            nuevo.push(carrito[i]);
        }
    }
    guardarCarrito(nuevo);
    actualizarContador();
    mostrarCarrito();
}

function cambiarCantidad(codigo, cambio) {
    var carrito = obtenerCarrito();
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].codigo === codigo) {
            carrito[i].cantidad = carrito[i].cantidad + cambio;
            if (carrito[i].cantidad <= 0) {
                eliminarDelCarrito(codigo);
                return;
            }
            break;
        }
    }
    guardarCarrito(carrito);
    actualizarContador();
    mostrarCarrito();
}

function actualizarContador() {
    var carrito = obtenerCarrito();
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total = total + carrito[i].cantidad;
    }
    var el = document.getElementById('contador-carrito');
    if (el) {
        el.textContent = total;
    }
}

function filtrarProductos() {
    var contenedor = document.getElementById('lista-productos');
    if (contenedor) {
        var cat = document.getElementById('filtro-categoria').value;
        var busqueda = document.getElementById('busqueda-nombre').value.toLowerCase();
        var html = '';
        for (var i = 0; i < productos.length; i++) {
            var coincideCategoria = (cat === 'todos' || productos[i].categoria === cat);
            var coincideNombre = (productos[i].nombre.toLowerCase().indexOf(busqueda) > -1);
            if (coincideCategoria && coincideNombre) {
                html += crearHTMLProducto(productos[i]);
            }
        }
        contenedor.innerHTML = html;
    }
}

function crearHTMLProducto(p) {
    var precio = p.precio.toString();
    var html = '<div class="col-md-4 col-lg-3 mb-4">';
    html += '<div class="producto-card">';
    if (p.imagen) {
        html += '<img src="' + p.imagen + '" alt="' + p.nombre + '" class="producto-imagen">';
    } else {
        html += '<div class="producto-imagen">' + p.icono + '</div>';
    }
    html += '<div class="producto-info">';
    html += '<div class="producto-categoria">' + p.categoria + '</div>';
    html += '<h5 class="producto-nombre">' + p.nombre + '</h5>';
    html += '<p class="producto-fabricante">Fabricante: ' + p.fabricante + '</p>';
    html += '<p class="producto-descripcion">' + p.descripcion + '</p>';
    html += '<div class="producto-precio">$' + precio + ' CLP</div>';

    var estrellas = obtenerPromedioEstrellas(p.codigo);
    html += '<div class="producto-estrellas">';
    for (var s = 1; s <= 5; s++) {
        if (s <= estrellas) {
            html += '<span class="estrella-llena">&#9733;</span>';
        } else {
            html += '<span class="estrella-vacia">&#9733;</span>';
        }
    }
    html += ' <span class="estrellas-cantidad">(' + contarReseñas(p.codigo) + ')</span>';
    html += '</div>';

    html += '<div class="producto-redes">';
    html += '<a href="https://www.facebook.com/sharer/sharer.php?u=levelupgamer.cl" target="_blank" class="red-social"><i class="bi bi-facebook"></i></a>';
    html += '<a href="https://twitter.com/intent/tweet?text=Mira este producto en Level-Up Gamer" target="_blank" class="red-social"><i class="bi bi-twitter-x"></i></a>';
    html += '<a href="https://wa.me/?text=Mira este producto en Level-Up Gamer" target="_blank" class="red-social"><i class="bi bi-whatsapp"></i></a>';
    html += '</div>';
    html += '<button class="producto-btn-carrito" onclick="agregarAlCarrito(\'' + p.codigo + '\')">Agregar</button>';
    html += '<div class="producto-reseñas">';
    html += '<button class="boton-secundario" onclick="toggleReseñas(\'' + p.codigo + '\')">Ver Reseñas (' + contarReseñas(p.codigo) + ')</button>';
    html += '<div id="reseñas-' + p.codigo + '" class="reseñas-container oculto">';
    html += mostrarReseñas(p.codigo);
    html += '</div>';
    html += '</div>';
    html += '</div></div></div>';
    return html;
}

function obtenerPromedioEstrellas(codigo) {
    var res = obtenerTodasReseñas();
    var suma = 0;
    var cantidad = 0;
    for (var i = 0; i < res.length; i++) {
        if (res[i].codigo === codigo) {
            suma = suma + res[i].estrellas;
            cantidad = cantidad + 1;
        }
    }
    if (cantidad === 0) return 0;
    return Math.round(suma / cantidad);
}

function contarReseñas(codigo) {
    var res = obtenerTodasReseñas();
    var cantidad = 0;
    for (var i = 0; i < res.length; i++) {
        if (res[i].codigo === codigo) {
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}

function mostrarReseñas(codigo) {
    var res = obtenerTodasReseñas();
    var html = '';
    for (var i = 0; i < res.length; i++) {
        if (res[i].codigo === codigo) {
            html += '<div class="reseña-item">';
            html += '<strong class="reseña-usuario">' + res[i].usuario + '</strong> ';
            for (var s = 1; s <= 5; s++) {
                if (s <= res[i].estrellas) {
                    html += '<span class="reseña-estrella-llena">&#9733;</span>';
                } else {
                    html += '<span class="reseña-estrella-vacia">&#9733;</span>';
                }
            }
            html += '<p class="reseña-texto">' + res[i].texto + '</p>';
            html += '</div>';
        }
    }
    html += '<div class="reseña-formulario">';
    html += '<h6 class="reseña-form-titulo">Dejar una reseña:</h6>';
    html += '<div class="reseña-estrellas-input" id="estrellas-input-' + codigo + '">';
    for (var e = 1; e <= 5; e++) {
        html += '<span class="estrella-input" data-codigo="' + codigo + '" data-estrella="' + e + '" onclick="seleccionarEstrella(\'' + codigo + '\', ' + e + ')">&#9733;</span>';
    }
    html += '</div>';
    html += '<textarea id="texto-reseña-' + codigo + '" class="reseña-textarea" placeholder="Escribe tu reseña..." rows="3"></textarea>';
    html += '<button class="boton-principal" onclick="enviarReseña(\'' + codigo + '\')">Enviar Reseña</button>';
    html += '</div>';
    return html;
}

var estrellasSeleccionadas = {};

function seleccionarEstrella(codigo, estrella) {
    estrellasSeleccionadas[codigo] = estrella;
    var container = document.getElementById('estrellas-input-' + codigo);
    if (container) {
        var estrellas = container.querySelectorAll('.estrella-input');
        for (var i = 0; i < estrellas.length; i++) {
            if (i < estrella) {
                estrellas[i].style.color = '#FFD700';
            } else {
                estrellas[i].style.color = '#666666';
            }
        }
    }
}

function enviarReseña(codigo) {
    var usuario = obtenerUsuario();
    if (!usuario) {
        alert('Debes iniciar sesión para dejar una reseña!');
        return;
    }
    var estrellas = estrellasSeleccionadas[codigo];
    if (!estrellas) {
        alert('Selecciona una calificacion con estrellas!');
        return;
    }
    var texto = document.getElementById('texto-reseña-' + codigo).value;
    if (texto === '') {
        alert('Escribe algo en tu reseña!');
        return;
    }
    guardarReseña(codigo, usuario.nombre, estrellas, texto);
    alert('Reseña enviada!');
    estrellasSeleccionadas[codigo] = 0;
    mostrarDestacados();
    mostrarRecomendados();
    mostrarRecomendaciones();
}

function toggleReseñas(codigo) {
    var el = document.getElementById('reseñas-' + codigo);
    if (el) {
        el.classList.toggle('oculto');
    }
}

function mostrarDestacados() {
    var el = document.getElementById('productos-destacados');
    if (el) {
        var html = '';
        for (var i = 0; i < 4; i++) {
            html += crearHTMLProducto(productos[i]);
        }
        el.innerHTML = html;
    }
}

function mostrarRecomendados() {
    var el = document.getElementById('recomendados');
    if (el) {
        var html = '';
        for (var i = 4; i < 8; i++) {
            html += crearHTMLProducto(productos[i]);
        }
        el.innerHTML = html;
    }
}

function mostrarRecomendaciones() {
    var el = document.getElementById('recomendaciones-usuario');
    if (el) {
        var usuario = localStorage.getItem('usuario');
        if (usuario) {
            var u = JSON.parse(usuario);
            var html = '<div class="recomendaciones-bienvenida">';
            html += '<strong>Hola ' + u.nombre + '!</strong> Basado en tu perfil te recomendamos:';
            html += '</div>';
            html += '<div class="row g-4">';
            for (var i = 0; i < 4; i++) {
                html += crearHTMLProducto(productos[i]);
            }
            html += '</div>';
            el.innerHTML = html;
        } else {
            el.innerHTML = '<p class="recomendaciones-vacio">Registrate para recibir recomendaciones personalizadas.</p>';
        }
    }
}

function mostrarCarrito() {
    var carrito = obtenerCarrito();
    var lista = document.getElementById('carrito-lista');
    var vacio = document.getElementById('carrito-vacio');
    var resumen = document.getElementById('carrito-resumen');

    if (carrito.length === 0) {
        lista.style.display = 'none';
        vacio.style.display = 'block';
        resumen.style.display = 'none';
    } else {
        lista.style.display = 'block';
        vacio.style.display = 'none';
        resumen.style.display = 'block';

        var html = '';
        var subtotal = 0;
        for (var i = 0; i < carrito.length; i++) {
            var item = carrito[i];
            subtotal = subtotal + (item.precio * item.cantidad);
            html += '<div class="carrito-item">';
            html += '<div class="carrito-item-contenido">';
            if (item.imagen) {
                html += '<img src="' + item.imagen + '" alt="' + item.nombre + '" class="carrito-item-imagen">';
            } else {
                html += '<span class="carrito-item-icono">' + item.icono + '</span>';
            }
            html += '<div class="carrito-item-info">';
            html += '<h5 class="carrito-item-nombre">' + item.nombre + '</h5>';
            html += '<div class="carrito-item-precio">$' + item.precio + '</div>';
            html += '</div>';
            html += '<div class="carrito-item-cantidad">';
            html += '<button class="carrito-btn-menos" onclick="cambiarCantidad(\'' + item.codigo + '\',-1)">-</button>';
            html += '<span class="carrito-item-numero">' + item.cantidad + '</span>';
            html += '<button class="carrito-btn-mas" onclick="cambiarCantidad(\'' + item.codigo + '\',1)">+</button>';
            html += '</div>';
            html += '<button class="carrito-btn-quitar" onclick="eliminarDelCarrito(\'' + item.codigo + '\')">X</button>';
            html += '</div></div>';
        }
        lista.innerHTML = html;

        var porcentajeDescuento = 0;
        var usuario = obtenerUsuario();
        if (usuario) {
            var descuentoDuoc = usuario.descuento || 0;
            var nivel = obtenerNivel(usuario.puntos);
            var descuentoNivel = obtenerDescuentoNivel(nivel);
            if (descuentoDuoc > descuentoNivel) {
                porcentajeDescuento = descuentoDuoc;
            } else {
                porcentajeDescuento = descuentoNivel;
            }
        }
        var descuento = Math.round(subtotal * porcentajeDescuento / 100);
        var total = subtotal - descuento;
        document.getElementById('resumen-subtotal').textContent = '$' + subtotal;
        document.getElementById('resumen-descuento').textContent = '-$' + descuento;
        document.getElementById('resumen-total').textContent = '$' + total;
    }
}

function vaciarCarrito() {
    var respuesta = confirm('Vaciar carrito?');
    if (respuesta) {
        localStorage.removeItem('carrito');
        actualizarContador();
        mostrarCarrito();
    }
}

function obtenerUsuario() {
    var usuario = localStorage.getItem('usuario');
    if (usuario) {
        return JSON.parse(usuario);
    }
    return null;
}

function guardarUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

function obtenerNivel(puntos) {
    if (puntos >= 1000) return 'Platino';
    if (puntos >= 500) return 'Oro';
    if (puntos >= 200) return 'Plata';
    return 'Bronce';
}

function obtenerDescuentoNivel(nivel) {
    if (nivel === 'Platino') return 15;
    if (nivel === 'Oro') return 10;
    if (nivel === 'Plata') return 5;
    return 0;
}

function mostrarPerfil() {
    var usuario = obtenerUsuario();
    var el = document.getElementById('info-perfil');
    if (el && usuario) {
        var nivel = obtenerNivel(usuario.puntos);
        var descNivel = obtenerDescuentoNivel(nivel);
        var html = '';
        html += '<div class="perfil-dato"><strong>Nombre:</strong> ' + usuario.nombre + '</div>';
        html += '<div class="perfil-dato"><strong>Email:</strong> ' + usuario.email + '</div>';
        html += '<div class="perfil-dato"><strong>Puntos LevelUp:</strong> ' + usuario.puntos + '</div>';
        html += '<div class="perfil-dato"><strong>Nivel:</strong> <span class="perfil-nivel-badge">' + nivel + '</span></div>';
        html += '<div class="perfil-dato"><strong>Descuento por nivel:</strong> ' + descNivel + '%</div>';
        if (usuario.esDuoc) {
            html += '<div class="perfil-duoc-alert">Tienes 20% de descuento por correo Duoc!</div>';
        }
        html += '<button class="boton-secundario" style="margin-top:15px;" onclick="editarPerfil()">Editar Perfil</button>';
        el.innerHTML = html;
    }

    var elPrefs = document.getElementById('preferencias-usuario');
    if (elPrefs && usuario && usuario.preferencias) {
        var prefs = usuario.preferencias;
        for (var i = 0; i < prefs.length; i++) {
            var check = document.getElementById('pref-' + prefs[i]);
            if (check) {
                check.checked = true;
            }
        }
    }
}

function editarPerfil() {
    var usuario = obtenerUsuario();
    if (!usuario) return;
    document.getElementById('info-perfil').style.display = 'none';
    document.getElementById('editar-perfil').style.display = 'block';
    document.getElementById('editar-nombre').value = usuario.nombre;
    document.getElementById('editar-email').value = usuario.email;
}

function cancelarEdicion() {
    document.getElementById('info-perfil').style.display = 'block';
    document.getElementById('editar-perfil').style.display = 'none';
}

function guardarPerfilEditado() {
    var usuario = obtenerUsuario();
    if (!usuario) return;
    var nombre = document.getElementById('editar-nombre').value;
    var email = document.getElementById('editar-email').value;
    var password = document.getElementById('editar-password').value;
    if (nombre === '' || email === '') {
        alert('Nombre y email son obligatorios!');
        return;
    }
    usuario.nombre = nombre;
    usuario.email = email;
    if (password !== '') {
        usuario.password = password;
    }
    if (email.indexOf('@duoc.cl') > -1 || email.indexOf('@duocuc.cl') > -1) {
        usuario.esDuoc = true;
    } else {
        usuario.esDuoc = false;
    }
    guardarUsuario(usuario);
    cancelarEdicion();
    mostrarPerfil();
    alert('Perfil actualizado!');
}

function guardarPreferencia(categoria, activa) {
    var usuario = obtenerUsuario();
    if (!usuario) {
        alert('Debes iniciar sesión primero!');
        return;
    }
    if (!usuario.preferencias) {
        usuario.preferencias = [];
    }
    if (activa) {
        var existe = false;
        for (var i = 0; i < usuario.preferencias.length; i++) {
            if (usuario.preferencias[i] === categoria) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            usuario.preferencias.push(categoria);
        }
    } else {
        var nuevaLista = [];
        for (var i = 0; i < usuario.preferencias.length; i++) {
            if (usuario.preferencias[i] !== categoria) {
                nuevaLista.push(usuario.preferencias[i]);
            }
        }
        usuario.preferencias = nuevaLista;
    }
    guardarUsuario(usuario);
}

function canjearPuntos(costo, premio) {
    var usuario = obtenerUsuario();
    if (!usuario) {
        alert('Debes iniciar sesión primero!');
        return;
    }
    if (usuario.puntos < costo) {
        alert('No tienes suficientes puntos! Tienes ' + usuario.puntos + ' puntos.');
        return;
    }
    var respuesta = confirm('Canjear ' + costo + ' puntos por ' + premio + '?');
    if (respuesta) {
        usuario.puntos = usuario.puntos - costo;
        guardarUsuario(usuario);
        alert('Canje exitoso! Ganaste: ' + premio);
        mostrarPerfil();
        mostrarCanje();
    }
}

function mostrarCanje() {
    var el = document.getElementById('canje-puntos');
    if (el) {
        var usuario = obtenerUsuario();
        var puntos = usuario ? usuario.puntos : 0;
        var html = '';
        html += '<div class="perfil-puntos-card">';
        html += '<div class="perfil-puntos-contenido">';
        html += '<h5 class="perfil-puntos-titulo">Tus Puntos: <span class="perfil-puntos-numero">' + puntos + '</span></h5>';
        html += '</div></div>';

        html += '<div class="row g-3">';
        html += '<div class="col-md-4">';
        html += '<div class="perfil-canje-card">';
        html += '<div class="perfil-canje-contenido">';
        html += '<div class="perfil-canje-icono">&#127873;</div>';
        html += '<h6>10% Descuento</h6>';
        html += '<p class="perfil-canje-puntos">200 puntos</p>';
        html += '<button class="boton-canje" onclick="canjearPuntos(200, \'10% de descuento\')">Canjear</button>';
        html += '</div></div></div>';

        html += '<div class="col-md-4">';
        html += '<div class="perfil-canje-card">';
        html += '<div class="perfil-canje-contenido">';
        html += '<div class="perfil-canje-icono">&#127874;</div>';
        html += '<h6>Polera Gratis</h6>';
        html += '<p class="perfil-canje-puntos">500 puntos</p>';
        html += '<button class="boton-canje" onclick="canjearPuntos(500, \'Polera Level-Up gratis\')">Canjear</button>';
        html += '</div></div></div>';

        html += '<div class="col-md-4">';
        html += '<div class="perfil-canje-card">';
        html += '<div class="perfil-canje-contenido">';
        html += '<div class="perfil-canje-icono">&#127942;</div>';
        html += '<h6>20% Descuento</h6>';
        html += '<p class="perfil-canje-puntos">800 puntos</p>';
        html += '<button class="boton-canje" onclick="canjearPuntos(800, \'20% de descuento\')">Canjear</button>';
        html += '</div></div></div>';
        html += '</div>';
        el.innerHTML = html;
    }
}

function validarCodigoReferido() {
    var codigo = document.getElementById('referido').value.toUpperCase();
    var el = document.getElementById('error-referido');
    if (!el) return;
    if (codigo === '') {
        el.textContent = '';
        return;
    }
    var encontrado = false;
    for (var i = 0; i < codigosReferidos.length; i++) {
        if (codigosReferidos[i] === codigo) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        el.textContent = 'Codigo valido! Ganaras 50 puntos extra.';
        el.className = 'text-success small';
    } else {
        el.textContent = 'Codigo no valido';
        el.className = 'text-danger small';
    }
}

function darPuntosPorReferido() {
    var usuario = obtenerUsuario();
    if (usuario) {
        var codigo = document.getElementById('referido');
        if (codigo && codigo.value !== '') {
            usuario.puntos = usuario.puntos + 50;
            guardarUsuario(usuario);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina cargada');
    actualizarContador();
    mostrarDestacados();
    mostrarRecomendados();
    mostrarRecomendaciones();
    aplicarFiltroURL();
    filtrarProductos();
    mostrarCarrito();
    mostrarPerfil();
    mostrarCanje();
});

function aplicarFiltroURL() {
    var parametros = new URLSearchParams(window.location.search);
    var cat = parametros.get('cat');
    if (cat) {
        var select = document.getElementById('filtro-categoria');
        if (select) {
            for (var i = 0; i < select.options.length; i++) {
                if (select.options[i].value === cat) {
                    select.value = cat;
                    break;
                }
            }
        }
    }
}
