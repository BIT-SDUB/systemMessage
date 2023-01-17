/**
 *  @file localmsg.js (TEST)
 *  @brief Local configuration for Systemmessage
 * Defined classes:
 *    - systemMsg_info      Text info
 *    - systemMsg_ok        Success
 *    - systemMsg_warning   Warning
 *    - systemMsg_error     Error
 *
 *  @copyright http://www.gnu.org/licenses/lgpl.txt LGPL version 3
 *  @author    Erik Bachmann <ErBa@bib.sdu.dk>
 *  @since     2022-08-25T12:25:52 / ErBa
 *  @version   2023-01-09T17:08:17 / ErBa
 */

var systemMessageDebugLevel = true; // use along with: Debugger;
systemMessageDebug( "debug on" ) ;

// Local messages overwriting standard
var systemMessages = {
    "enterprise_pre": {
        title: {
            en: "Library System maintenance 11/1",
            da: "Bibliotekssystemet opdateres 11/1",
        },
        msg: {
            en: "The Library TEST System can be off-line for up till two hours due to maintenans on January 11th from 12:00 to 14:00",
            da: "Biblioteks TEST system kan være utilgængeligt i op til to times varighed pga. vedligehold i tidsrummet 11. januar 2023 kl.12.00 til 14.00",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2023 00:01",
        endDate:    "January 11, 2023 12:01"
    },
    "enterprise_": {
        title: {
            en: "Library System is being updated 11/1",
            da: "Bibliotekssystemet er under opdatering 11/1",
        },
        msg: {
            en: "The Library TEST System can be off-line for up till two hours due to maintenans on January 11th from 12:00 to 14:00",
            da: "Biblioteks TEST system kan være utilgængeligt i op til to times varighed pga. vedligehold i tidsrummet 11. januar 2023 kl.12.00 til 14.00",
        },
        class:      "systemMsg_warning",
        //page:     "",
        startDate:  "January 01, 2023 12:00",
        endDate:    "January 11, 2023 14:00"
    },
    oracle: {
        title: {
            en: "Library System maintenance 25/1",
            da: "Bibliotekssystemet opdateres 25/1",
        },
        msg: {
            en: "The Library TEST System can be off-line for up till an hour due to maintenans on January 25th from 08:00 to 16:00",
            da: "Bibliotekets TEST system kan være utilgængeligt i op til en times varighed pga. vedligehold i tidsrummet 25. januar 2023 kl.08.00 til 16.00",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 23, 2023 12:01",
        endDate:    "January 25, 2023 08:01"
        },
    "oracle ": {
        title: {
            en: "Library System maintenance 25/1",
            da: "Bibliotekssystemet opdateres 25/1",
        },
        msg: {
            en: "The Library TEST System can be off-line for up till an hour due to maintenans on January 25th from 08:00 to 16:00",
            da: "Bibliotekets TEST system kan være utilgængeligt i op til en times varighed pga. vedligehold i tidsrummet 25. januar 2023 kl.08.00 til 16.00",
        },
            class:      "systemMsg_warning",
            //page:     "",
            startDate:  "January 25, 2023 08:00",
            endDate:    "January 25, 2023 16:01"
        },
// Global messages
    alpha: {
         title: {
            en: "Alpha &#x1F9EB;",
            da: "Alfa &#x1F9EB;",
        },
        msg: {
            en: "This is an outdated alpha message. Should never be visible",
            da: "Dette er en forældet alfa version, som aldrig må være synlig",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 01, 2002 00:01"
    },
    beta: {
            title: {
            en: "Beta &#x1F9EA;",
            da: "Beta &#x1F9EA;",
        },
        msg: {
            en: "This is a beta version of the Library Catalogue. The test runs till launch January 23st 2023<br>Please report any problems to <a href='mailto:bit@sdu.dk?subject=Library%20Catalogue%20Beta&body=Describe%20errors%20here'>BIT</a>",
            da: "Dette er en beta version af bibliotekets katalog, som går i drift d. 23. januar 2023.<br>Meld venligst alle problemer til <a href='mailto:bit@sdu.dk?subject=Bibliotekskatalog%20Beta&body=Beskriv%20fejl%20her'>BIT</a>",class:      "systemMsg_info",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 31, 2023 00:01"
    },
// Page specific messages
    "My lists": {
        title: {
            en: "My Lists",
            da: "Mine lister",
        },
        msg: {
            en: "<i>My lists</i> requires login",
            da: "<i>Mine lister</i> kræver login",
        },
        class:      "systemMsg_warning",
        page: {
            en: "My Lists",
            da: "Mine lister",
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 31, 2030 00:01"
    },
    "Onlineregistrering": {
        title: {
            en: "Online Registration",
            da: "Onlineregistrering",
        },
        msg: {
            en: "If you are student or employee at SDU, then you already have a profile and you should <b>not</b> create a new one",
            da: "Hvis du er studerende eller ansat ER du allerede oprettet og du skal <b>IKKE</b> oprette en profil",
        },
        class:      "systemMsg_warning",
        page: {
            en: "Online Registration",
            da: "Online registrering",
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
    },
    test: {
        title: {
            en: "Test server &#x1F9EA;",
            da: "Test server &#x1F9EA;",
        },
        msg: {
            en: "<h1>Test server &#x1F9EA;</h1> This is for testing only with data from production server <strong><tt>odin6-bib.sdu.dk</tt></strong>. Changes here will NOT affect the production Enterprise web.",
            da: "<h1>Test server &#x1F9EA;</h1> Dette er et testsystem, som viser data fra produktionsserveren <strong><tt>odin6-bib.sdu.dk</tt></strong>. Ændringer her vil ikke påvirke produktion Enterprise web.",
        },
        class:      "systemMsg_warning"
    },

/* >>> System Message - test >>> */
    info: {
        title: {
            en: "Info",
            da: "Info",
        },
        msg: {
            en: "System Information. Used for test only.",
            da: "Information. Bør kun anvendes til test.",
        },
        class:      "systemMsg_info",
        page: {
            en:       "System Message - test", 
            da:       "System Message - test", 
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
    },
    ok: {
        title: {
            en: "OK",
            da: "OK",
        },
        msg: {
            en: "It' just OK. Used for test only.",
            da: "Det er bare OK. Bør kun anvendes til test.",
        },
        class:      "systemMsg_ok",
        page: {
            en:       "System Message - test", 
            da:       "System Message - test", 
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
    },
    warning: {
        title: {
            en: "Warning",
            da: "Advarsel",
        },
        msg: {
            en: "This is a warning. Used for test only.",
            da: "Det er en advarsel. Bør kun anvendes til test.",
        },
        class:      "systemMsg_warning",
        page: {
            en:       "System Message - test", 
            da:       "System Message - test", 
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
    },
    error: {
        title: {
            en: "Error",
            da: "Fejl",
        },
        msg: {
            en: "This is an error. Used for test only.",
            da: "Dette er en fejl. Bør kun anvendes til test.",
        },
        class:      "systemMsg_error",
        page: {
            en:       "System Message - test", 
            da:       "System Message - test", 
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
/* <<< System Message - test <<< */
    }
}


doclang = 'en';


    if ( 'da' == doclang ) {
        document.title  = 'Mine lister';  // Hard coded title for test only
    } else {
        document.title  = 'My lists';  // Hard coded title for test only
    }

console.log(doclang +" : "+document.title);

// Load individual messages
//showSystemMessageJS( systemMessages, 'alpha' );	// Out of scope = never displayed
//showSystemMessageJS( systemMessages, 'beta', 'da' );  // In danish


//debugger; //declaring debugger keyword
// Load all messages
for (key in systemMessages ) {
    systemMessageDebug( "Setting msg:" + key );
    showSystemMessageJS( systemMessages, key, doclang );
    //showSystemMessageJS( systemMessages, key );
}

/*
if ( 'System Message - test' == document.title ) {
    showSystemMessageJS( systemMessages[ doclang ]['info'] );
    showSystemMessageJS( systemMessages[ doclang ]['ok'] );
    showSystemMessageJS( systemMessages[ doclang ]['warning'] );
    showSystemMessageJS( systemMessages[ doclang ]['error'] );
}
*/
systemMessageDebug("localsystemMessages.js loaded");