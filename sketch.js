var squares = [];
var rook_w,rook_w_1,knight_w,knight_w_1,bishop_w,bishop_w_1,queen_w,king_w;
var rook_b,rook_b_1,knight_b,knight_b_1,bishop_b,bishop_b_1,queen_b,king_b;
pieces_b=[];
pieces_w=[];
var knight_w_img;

function preload(){
  knight_w_img = loadImage("Knight(Horse)_White.jfif");
}

function setup() {
  createCanvas(400, 400);

  // Create the squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      squares.push(square);
    }
  }

  rook_w = createSprite();
  rook_w.addImage(knight_w_img);
  rook_w.scale= 0.3;
  knight_w = createSprite();
  bishop_w = createSprite();
  queen_w = createSprite();
  king_w = createSprite();
  bishop_w_1 = createSprite();
  knight_w_1 = createSprite();
  rook_w_1 = createSprite();

  rook_w.x = square[0];
  rook_w_1.x = square[7];

  bishop_w.x = square[2];
  bishop_w_1.x = square[5];

  knight_w.x = square[1];
  knight_w_1.x = square[6];

  queen_w.x = square[3];
  king_w.x = square[4];



  for (i = 8; i < 16; i++) {
    pawn = new Pawn(squares[i], 1);
    pieces_w.push(pawn);
  }

  for (i = 48; i < 56; i++) {
    pawn = new Pawn(squares[i], 2);
    pieces_b.push(pawn);
  }

  rook_b = new Rook(squares[56], 0);
  knight_b = new Knight(squares[57], 0);
  bishop_b = new Bishop(squares[58], 0);
  queen_b = new Queen(squares[59], 0);
  king_b = new King(squares[60], 0);
  bishop_b_1 = new Bishop(squares[61], 0);
  knight_b_1 = new Knight(squares[62], 0);
  rook_b_1 = new Rook(squares[63], 0);
  pieces_b.push(rook_b,rook_b_1,knight_b,knight_b_1,bishop_b,bishop_b_1,king_b,queen_b);

}

function draw() {
  background(255);
  
  black = 220;
  white = 30;
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(black);
        }
        if (y % 100 == 50) {
          fill(white);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(black);
        }
        if (y % 100 == 0) {
          fill(white);
        }
      }

      rect(x, y, 50, 50);
    }
  }
  drawSprites();
}