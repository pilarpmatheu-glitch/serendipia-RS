function tile (relleno: number, borde: number) {
    i = image.create(16, 16)
    i.fill(relleno)
    i.drawRect(0, 0, 16, 16, borde)
    return i
}
// # pared | . piso | X peligro | K llave | D salida | S interruptor | V vapor | P inicio
function mapa (n: number) {
    if (n == 1) {
        return [
        "################",
        "#P...#K.......K#",
        "#....#.XXXXX...#",
        "#..X.#.........#",
        "#....#####.#####",
        "#..............#",
        "#.#####.#####.##",
        "#.#K........#..#",
        "#.#.####.##.#..#",
        "#...#..X...#.D.#",
        "#..............#",
        "################"
        ]
    }
    if (n == 2) {
        return [
        "################",
        "#P..#.....#....#",
        "#.#.#.###.#.##.#",
        "#.#..S#...#..#.#",
        "#.######.##.##.#",
        "#..X...V...X..D#",
        "################"
        ]
    }
    return [
    "################",
    "#P.............#",
    "#.XX...##..XX..#",
    "#.XX...##..XX..#",
    "#..............#",
    "#...XXX...XXX.D#",
    "#..............#",
    "################"
    ]
}
let i: Image = null
let c = ""
let t = 0
tiles.setCurrentTilemap(tilemap`nivel4`)
// Cambiá este número (1, 2 o 3) para ver cada mapa
let NIVEL = 1
// 0 piso, 1 pared, 2 peligro, 3 llave, 4 salida, 5 interruptor, 6 vapor
let imagenes = [
tile(15, 12),
tile(14, 4),
tile(2, 4),
tile(5, 4),
tile(7, 1),
tile(10, 1),
tile(1, 9)
]
let filas = mapa(NIVEL)
let w = filas[0].length
let h = filas.length
let datos = control.createBuffer(4 + w * h)
datos.setNumber(NumberFormat.UInt16LE, 0, w)
datos.setNumber(NumberFormat.UInt16LE, 2, h)
let paredes = image.create(w, h)
for (let y = 0; y <= h - 1; y++) {
    for (let x = 0; x <= w - 1; x++) {
        c = filas[y].charAt(x)
        if (c == "#") {
            t = 1
            paredes.setPixel(x, y, 1)
        } else if (c == "X") {
            t = 2
        } else if (c == "K") {
            t = 3
        } else if (c == "D") {
            t = 4
        } else if (c == "S") {
            t = 5
        } else if (c == "V") {
            t = 6
            paredes.setPixel(x, y, 1)
        }
        datos.setNumber(NumberFormat.UInt8LE, 4 + y * w + x, t)
    }
}
tiles.setCurrentTilemap(tiles.createTilemap(datos, paredes, imagenes, TileScale.Sixteen))
let jugador = sprites.create(image.create(10, 10), SpriteKind.Player)
jugador.image.fill(9)
controller.moveSprite(jugador)
scene.cameraFollowSprite(jugador)
for (let y2 = 0; y2 <= h - 1; y2++) {
    for (let x2 = 0; x2 <= w - 1; x2++) {
        if (filas[y2].charAt(x2) == "P") {
            tiles.placeOnTile(jugador, tiles.getTileLocation(x2, y2))
        }
    }
}
