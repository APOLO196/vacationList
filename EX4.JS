function vacationList(input) {
      let totalPages = Number(input [0])
      let pagesPerhour = Number(input [1])
      let  days = Number(input [2])

        let hoursNeeded = totalPages / pagesPerhour;
        let hoursPerDay = hoursNeeded / days;
      console.log(hoursPerDay);

 }
 vacationList(["212 ",
 "20 ",
 "2 "]);