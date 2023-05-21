/*


██████╗░██████╗░███████╗███╗░░██╗██████╗░░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔════╝████╗░██║██╔══██╗██╔══██╗████╗░██║
██████╦╝██████╔╝█████╗░░██╔██╗██║██║░░██║███████║██╔██╗██║ 
██╔══██╗██╔══██╗██╔══╝░░██║╚████║██║░░██║██╔══██║██║╚████║
██████╦╝██║░░██║███████╗██║░╚███║██████╔╝██║░░██║██║░╚███║
╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝

*/

$(document).ready(function() {
    $("#lHidden").animate({
      opacity: 1,
      left: "0"
    }, 800); // Adjust the duration (in milliseconds) as needed
  });
$(document).ready(function() {
    $("#rHidden").animate({
      opacity: 1,
      right: "0"
    }, 800).animate({
      transition: "0.4s" 
    }) // Adjust the duration (in milliseconds) as needed
  });
  