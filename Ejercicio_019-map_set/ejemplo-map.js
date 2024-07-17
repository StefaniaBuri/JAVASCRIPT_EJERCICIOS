const alumnos = new Map([
    ["Alberto", 38],
    ["Óscar", 40],
    ["Lara", 29]
  ]);
  
  console.log(alumnos.get("Óscar"));
  
  //Definir un Map que tenga por clave el título de la película
  //y por valor un objeto con los atributos: director, género, año y duración
  //El Map tendrá tres películas
  
  let peli1 = {
      director : "Tarantino",
      genero : "Acción",
      anyo : 1992,
      duracion : 100
  }
  let peli2 = {
      director : "Damian Chazelle",
      genero : "Suspense",
      anyo : 2014,
      duracion : 110
  }
  
  let peliculas = new Map([
      ["Reservoir Dogs", peli1],
      ["Whiplash", peli2],
      ["Lalaland", {
          director : "Damian Chazelle",
          genero : "Drama",
          anyo : 2021,
          duracion : 130
      }],
      ["Batman", [1,3,4,5]]
  ]
  );
  
  console.log(peliculas.get("Reservoir Dogs").director);
  console.log(peliculas.get("Whiplash").genero);
  console.log(peliculas.get("Lalaland").duracion);
  console.log(peliculas.get("Batman"));