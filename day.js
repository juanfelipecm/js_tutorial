
// Return day of the week for a given date
function dayName(date) {
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves","Viernes", "Sábado"];
    return diasDeLaSemana[date.getDay()];
}

// Returns a greeting for the given date.
function greeting(date) {
    return `Hello, world! Happy ${dayName(date)}—now from a file!`
  }