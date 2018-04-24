function template () {
  return `
  <tr>
    <td>${cfbstats[i].Team}</td>
    <td>${(cfbstats[i].PassOff / cfbstats[i].PassOffAtt).toFixed(2)}</td>
    <td>${(cfbstats[i].RushOff / cfbstats[i].RushOffAtt).toFixed(2)}</td>
    <td>${(cfbstats[i].PassDef / cfbstats[i].PassDefAtt).toFixed(2)}</td>
    <td>${(cfbstats[i].RushDef / cfbstats[i].RushDefAtt).toFixed(2)}</td>
    <td>${(cfbstats[i].TotalPts / cfbstats[i].Games).toFixed(1)}</td>
    <td>${cfbstats[i].Conference}</td>
  </tr>

  `
}

for (var i = 0; i < cfbstats.length; i++) {
  $('tbody').append(template())
}

$(function() {
  $("#teamStats").tablesorter();
});

function filterTeams() {
  // Declare variables
  var input, filter, table, tr, conference, i, team;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("teamStats");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    conference = tr[i].getElementsByTagName("td")[6];
    team = tr[i].getElementsByTagName("td")[0];
    if (conference) {
      if (conference.innerHTML.toUpperCase().indexOf(filter) > -1 || team.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
