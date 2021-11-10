
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> .____                  .__  .__  .__                            
|    |   _____ __  _  _|  | |  | |__|_____   ____ ______  ______
|    |   \__  \\ \/ \/ /  | |  | |  \____ \ /  _ \\____ \/  ___/
|    |___ / __ \\     /|  |_|  |_|  |  |_> >  <_> )  |_> >___ \ 
|_______ (____  /\/\_/ |____/____/__|   __/ \____/|   __/____  >
        \/    \/                    |__|          |__|       \/   </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
