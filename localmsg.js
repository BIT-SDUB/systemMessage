/**
 *  @file localmsg.js
 *  @brief Local configuration for Systemmessage
 * Defined classes:
 *    - systemMsg_info    Text info
 *    - systemMsg_ok        Success
 *    - systemMsg_warning    Warning
 *    - systemMsg_error    Error
 *
 *  @copyright http://www.gnu.org/licenses/lgpl.txt LGPL version 3
 *  @author    Erik Bachmann <ErBa@bib.sdu.dk>
 *  @since     2022-08-25T12:25:52 / ErBa
 *  @version   2022-11-15T21:02:19 / ErBa
 */

var systemMessageDebugLevel = true;
systemMessageDebug( "debug on" ) ;

// Local messages overwriting standard
var systemMessages = {
    en: {    // Default language
    // Global messages
        alpha: { 
            title:      "Alpha",
            msg:        "This is an outdated alpha message. Should never be visible",
            class:      "systemMsg_info",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 01, 2002 00:01"
        },
        beta: { 
            title:      "Beta", 
            msg:        "This is a beta version. Used for testing only! <br>Please report any problems to <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>",
            class:      "systemMsg_info",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2023 00:01"
        },
        prod: { 
            title:      "Production", 
            msg:        "This system is in full production mode.<br>Please report any problems to <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>",
            class:      "systemMsg_ok",
            startDate:  "January 03, 2023 00:02",
            endDate:    "January 03, 2028 00:01"
        },
    // Page specific messages
        "My lists": {
            title:      "My Lists",
            msg:        "<i>My lists</i> requires login",
            class:      "systemMsg_warning",
            page:       "My Lists",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2023 00:01"
        },
    /* >>> System Message - test >>> */
        info: {
            title:      "Info",
            msg:        "System Information. Used for test only.",
            class:      "systemMsg_info",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        ok: {
            title:      "OK",
            msg:        "It' just OK. Used for test only.",
            class:      "systemMsg_ok",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        warning: {
            title:      "Warning",
            msg:        "This is a warning. Used for test only.",
            class:      "systemMsg_warning",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        error: {
            title:      "Error",
            msg:        "This is an error. Used for test only.",
            class:      "systemMsg_error",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        }
    /* <<< System Message - test <<< */
    },  // <<< Messages in English
    da: {    // Language: Danish
    // Global messages
        alpha: { 
            title:      "Alfa",
            msg:        "Dette er en forældet alfa version, som aldrig må være synlig",
            class:      "systemMsg_info",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 01, 2002 00:01"
        },
        beta: { 
            title:      "Beta",
            msg:        "Dette er en beta version af løsningen. Bør kun anvendes til test.<br>Meld venligst alle fejl til <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>",
            class:      "systemMsg_info",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2023 00:01"
        },
        prod: { 
            title:      "Produktion", 
            msg:        "Dette system er i fuld produktion.<br>.<br>Meld venligst alle fejl til <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>",
            class:      "systemMsg_ok",,
            startDate:  "January 03, 2023 00:02",
            endDate:    "January 03, 2028 00:01"
        },
    // Page specific messages
        "Mine lister": {
            title:      "Mine lister",
            msg:        "<i>Mine lister</i> kræver login",
            class:      "systemMsg_warning",
            page:       "Mine lister",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2023 00:01"
        },
        "Onlineregistrering": {
            title:      "Onlineregistrering",
            msg:        "Hvis du er studerende eller ansat ER du allerede oprettet og du skal <b>IKKE</b> oprette en profil",
            class:      "systemMsg_warning",
            page:       "Onlineregistrering",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2023 00:01"
        },
    // >>> System Message - test >>>/
       info: {
            title:      "Info",
            msg:        "Information. Bør kun anvendes til test.",
            class:      "systemMsg_info",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        ok: {
            title:      "OK",
            msg:        "Det er bare OK. Bør kun anvendes til test.",
            class:      "systemMsg_ok",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        warning: {
            title:      "Advarsel",
            msg:        "Det er en advarsel. Bør kun anvendes til test.",
            class:      "systemMsg_warning",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        },
        error: {
            title:      "Fejl",
            msg:        "Dette er en fejl. Bør kun anvendes til test.",
            class:      "systemMsg_error",
            page:       "System Message - test page", 
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 03, 2030 00:01"
        }
    // <<< System Message - test <<<
    }   // <<< Messages in Danish
}


//document.title  = 'Mine lister';  // Hard coded title for test only

// Load individual messages
//showSystemMessageJS( systemMessages[ doclang ]['alpha'] );	// Out of scope = never displayed
//showSystemMessageJS( systemMessages[ doclang ]['beta'] );

// Load all messages (default)
for (key in systemMessages[ doclang ]) {
    systemMessageDebug( "Setting msg:" + key );
    showSystemMessageJS( systemMessages[ doclang ][key] );
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