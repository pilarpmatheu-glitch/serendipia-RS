controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estadoJuego == "SELECCION") {
        opcionSeleccionada = 2
    }
})
// 4. NAVEGACIÓN CON FLECHAS
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estadoJuego == "SELECCION") {
        opcionSeleccionada = 1
    }
})
// 5. CONFIRMAR ELECCIÓN (BOTÓN A)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (estadoJuego == "SELECCION") {
        estadoJuego = "JUGANDO"
        // Limpiar menú
        opcion1Sprite.destroy()
        opcion2Sprite.destroy()
        // Crear personaje definitivo
        if (opcionSeleccionada == 1) {
            // 2. DIBUJAR OPCIONES DE PERSONAJES
            opcion1Sprite = sprites.create(img`
                . . . . f f f f f f f f . . . . 
                . . . f 1 1 1 2 2 1 1 1 f . . . 
                . . f 1 1 1 1 2 2 1 1 1 1 f . . 
                . . f 1 1 9 9 9 9 9 9 1 1 f . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
                . f 6 9 f f e e e e f f 9 9 f . 
                . f 6 6 f b 8 e e 8 b f 6 6 f . 
                . f 6 6 e 1 6 4 4 6 1 e 6 6 f . 
                f f 6 6 f 4 4 4 4 4 4 f 6 6 f f 
                f 6 6 f f f e e e e f f f 6 6 f 
                . f e e f d d 8 8 d d f e e f . 
                . . e 4 d d d 2 2 d d d 4 e . . 
                . . e f f d d 2 2 d d f f e . . 
                . . . . . f d 2 2 d f . . . . . 
                . . . . . f f b b f f . . . . . 
                `, SpriteKind.Food)
            game.splash("¡Elegiste al Doctora!")
        } else {
            jugador = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f e e e e e e f f . . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b 5 4 4 5 b f e f f . 
                . f e e 4 1 5 d d 5 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . f 1 f f b f f b f f 1 f . . 
                . . 4 1 f f b 1 1 b f f 1 4 . . 
                . . 4 4 f f b 1 1 b f f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
            game.splash("¡Elegiste a alex!")
        }
        // Configurar movimiento del jugador
        jugador.setPosition(80, 60)
        controller.moveSprite(jugador, 100, 100)
        jugador.setStayInScreen(true)
    }
})
let jugador: Sprite = null
let opcion2Sprite: Sprite = null
let opcion1Sprite: Sprite = null
let opcionSeleccionada = 0
let estadoJuego = ""
// 1. VARIABLES DE ESTADO Y MENÚ
estadoJuego = "SELECCION"
opcionSeleccionada = 1
// Variables propias para controlar la visibilidad del parpadeo
let opcion1Visible = true
let opcion2Visible = true
// Título e instrucciones iniciales
game.splash("ELIGE TU HEROE", "< Flechas > | A: Elegir")
// 2. DIBUJAR OPCIONES DE PERSONAJES
opcion1Sprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f 1 1 1 2 2 1 1 1 f . . . 
    . . f 1 1 1 1 2 2 1 1 1 1 f . . 
    . . f 1 1 9 9 9 9 9 9 1 1 f . . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
    . f 6 9 f f e e e e f f 9 9 f . 
    . f 6 6 f b 8 e e 8 b f 6 6 f . 
    . f 6 6 e 1 6 4 4 6 1 e 6 6 f . 
    f f 6 6 f 4 4 4 4 4 4 f 6 6 f f 
    f 6 6 f f f e e e e f f f 6 6 f 
    . f e e f d d 8 8 d d f e e f . 
    . . e 4 d d d 2 2 d d d 4 e . . 
    . . e f f d d 2 2 d d f f e . . 
    . . . . . f d 2 2 d f . . . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Food)
opcion1Sprite.setPosition(50, 60)
opcion2Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f e e e e e e f f . . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b 5 4 4 5 b f e f f . 
    . f e e 4 1 5 d d 5 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . f 1 f f b f f b f f 1 f . . 
    . . 4 1 f f b 1 1 b f f 1 4 . . 
    . . 4 4 f f b 1 1 b f f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Food)
opcion2Sprite.setPosition(110, 60)
// 3. EFECTO VISUAL (PARPADEO USANDO VARIABLES PROPIAS)
game.onUpdateInterval(250, function () {
    if (estadoJuego == "SELECCION") {
        if (opcionSeleccionada == 1) {
            // Aseguramos que la opción 2 esté siempre visible
            opcion2Visible = true
            opcion2Sprite.setFlag(SpriteFlag.Invisible, false)
            // Alternamos la opción 1 usando nuestra variable
            opcion1Visible = !(opcion1Visible)
            opcion1Sprite.setFlag(SpriteFlag.Invisible, !(opcion1Visible))
        } else {
            // Aseguramos que la opción 1 esté siempre visible
            opcion1Visible = true
            opcion1Sprite.setFlag(SpriteFlag.Invisible, false)
            // Alternamos la opción 2 usando nuestra variable
            opcion2Visible = !(opcion2Visible)
            opcion2Sprite.setFlag(SpriteFlag.Invisible, !(opcion2Visible))
        }
    }
})
