/**
 * Function to tag all target="_blank" or target="blank" tags with rel="noopener"
 * 
 * See this article for more information https://dev.to/ben/the-targetblank-vulnerability-by-example
 * 
 * @returns void
 */
function noOpener(){
    // Get elements
    var e = document.querySelectorAll('a[target="_blank"]:not([rel~="noopener"]), a[target="blank"]:not([rel~="noopener"])');
    if(e.length){
        // Loop through
        for (i = 0; i < e.length; ++i){
            //check for existing rel
            var rel = e[i].getAttribute('rel');
            if(rel){
                // Prevent double noreferrer
                rel = rel.replace('noreferrer','');
                e[i].setAttribute('rel',rel+' noopener noreferrer');
            }else{
                e[i].setAttribute('rel','noopener noreferrer');   
            }
            
        }
    }
}
