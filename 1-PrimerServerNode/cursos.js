const infoCursos = {
    'programacion': [
      { 
           id:1,
           titulo: 'Aprende Python',
           lenguaje: 'Python',
           vistas: 15000,
           nivel: 'basico'
      },
      { 
           id:2,
           titulo: 'Aprende Intermedio',
           lenguaje: 'Python',
           vistas: 13553,
           nivel: 'intermedio'
      },
      { 
           id:3,
           titulo: 'Aprende JavaScript',
           lenguaje: 'JavaScript',
           vistas: 102223,
           nivel: 'basico'
      }
    ],
    'matamaticas': [
       {
           id: 1,
           titulo:'Aprende Calculo',
           tema: 'Calculo',
           vistas: '12427',
           nivel: 'basico'
       },
       {
           id: 2,
           titulo:'Aprende Algebra',
           tema: 'Algebra',
           vistas: '12427',
           nivel: 'basico'
       }
   ]
   }
   
   //EXPORTAMOS 
   module.exports.cursos = infoCursos;