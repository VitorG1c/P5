
 configuração de função () {
2
  criarCanvas ( 600 , 600 );
3
}
4
​
5
função  draw () {
6
  se ( mouseIsPressed ) {
7
     preencher ( 0 );
8
  } outro {
9
     preencher ( 255 );
10
  }
11
  elipse ( mouseX , mouseY , 80 , 80 );
12
}
13
    
