var TILES = {
    //ground tiles
    // 0: '2588', // █ - empty space
    // 1: '00B7', // · - neutral ground
    ' ': '·',
    0: '█', // █ - empty space
    1: '·', // · - neutral ground
    2: '2588',
    3: '2588',
    4: '2588',
    5: '2588',
    6: '2588',
    7: '2588',
    8: '2588',
    9: '2588',

    //walls
    d: '╣', // ╣ - box drawings double vertical and left
    v: '║', // ║ - vertical
    e: '╗', // ╗ - down and left
    c: '╝', // ╝ - up and left
    z: '╚', // ╚ - up and right
    q: '╔', // ╔ - down and right
    x: '╩', // ╩ - up and horizontal
    w: '╦', // ╦ - box drawings double down and horizontal
    a: '╠', // ╠ - box drawings double vertical and right
    h: '═', // ═ - box drawings double horizontal
    s: '╬', // ╬ -box drawings double vertical and horizontal

    //character tiles
    o: '@', // @ - character entity
    // o: '0040', // @ - character entity

    //paths
    j: '░',
    k: '▒',
    l: '▓',

    '/': '/',
    '|': '|',
    '\\': '\\',
    '(': '(',
    ')': ')',
    '[': '[',
    ']': ']',
    '{': '{',
    '}': '}',
    //trees
    //t: '005E', // ^ - tree
    t: '^', // ^ - tree
    '#': '#',

    r: '≈', // river
    '~': '~',

    '≡': '≡', //info

    //key
    '∞': '∞'
};

var TILE_SEQUENCE = {
    '/': ['/', '|', '\\', '|'],
    '|': ['|', '\\', '|', '/'],
    '\\': ['\\', '|', '/', '|'],
    '(': ['(', '|', ')', '|'],
    ')': [')', '|', '(', '|'],
    ']': [']', '|', '[', '|'],
    '[': ['[', '|', ']', '|']
};



