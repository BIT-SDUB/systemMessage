/**
 *  @file      systemmessage.js
 *  @brief     Insert system messages in front of content on any given page.
 *  
 *  @details   An enhancement of Joel Hahn's script https://support.sirsidynix.com/dev/contrib/53967
 *  
 *  Data for the message is stored in an associative array ( JSON like ).
 *  
 *  A default array named systemMessage is created in the systemmessage.js
 *
 *  You can modify this directly or create a copy of your own.
 *  
 *  When using multiple calls to showSystemMessageJS(), the latest call will appear on the 
 *  top of content followed by previous calls in reverse order.
 *  
 *  Documentation in README.md
 *  
 *  Examples can be found in systemMessage.html
 *
 *  @copyright http://www.gnu.org/licenses/lgpl.txt LGPL version 3
 *  @author    Erik Bachmann <ErBa@bib.sdu.dk>
 *  @since     2022-08-25T12:25:52 / ErBa
 *  @version   2022-11-15T15:55:51 / ErBa
 */

//var systemMessageDebugLevel = true;

/**
 *  @fn        systemMessageDebug
 *  @brief     Print debug info to console.log if active
 *  
 *  @param [in] debug	Debug string
 *  @return    Return VOID
 *  
 *  @details   If systemMessageDebugLevel is defined then print debug info
 *  
 *  
 *  @example    var systemMessageDebugLevel = true;
 *              systemMessageDebug( "Debug info");
 *  
 *  @todo      
 *  @bug       
 *  @warning   
 *  
 *  @see       https://
 *  @since     2022-11-15T17:33:56 / erba
 */
function systemMessageDebug( debug )  {
    if ( typeof systemMessageDebugLevel !== 'undefined' ) {
        console.log( debug );
    }
}

systemMessageDebug( "debug on" ) ;


// Examples of messages with translation to other languages
/*
var systemMessages = {
    en: {	// Default language
		info: {
			title:	"Info", 	
			msg:	"This is information",
			class:	"systemMsg_info"
		},
		ok: { 
			title:	"OK", 	
			msg:	"This is OK",
			class:	"systemMsg_ok"
		},
		warning: { 
			title:	"Warning", 	
			msg:	"This is a warning",
			class:	"systemMsg_warning"
		},
		error: { 
			title:	"Error", 	
			msg:	"This is an Error",
			class:	"systemMsg_error"
		}
	},
    da: {	// Danish
		alpha: { 
			title:	"Alfa",
			msg:	"Dette er en forældet alfa version, som aldrig bør være synlig",
			class:	"systemMsg_info",
			// Active Date interval
			startDate:	"January 01, 2001 00:01",
			endDate:	"January 01, 2002 00:01"
		},
		beta: { 
			title:	"Beta",
			msg:	"Dette er en beta",
			class:	"systemMsg_info"
		},
		info: {
			title:	"Info", 	
			msg:	"Dette er en information",
			class:	"systemMsg_info"
		},
		ok: { 
			title:	"OK", 	
			msg:	"Dette virker OK",
			class:	"systemMsg_ok"
		},
		warning: { 
			title:	"Advarsel", 	
			msg:	"Dette er en advarsel",
			class:	"systemMsg_warning"
		},
		error: { 
			title:	"Fejl", 	
			msg:	"Dette er en fejl",
			class:	"systemMsg_error"
		}
	}
}
*/

/**
 *  @fn        showSystemMessageJS()
 *  @brief     Display a system wide message for a given periode of time
 *  
 *  @details   Insert system message (default or local message) on top of content
 *  
 *  @example   
 *  
 *  @todo      
 *  @bug       
 *  @warning   
 *  
 *  @see       https://support.sirsidynix.com/dev/contrib/53967
 *  @since     2022-08-25T12:22:09 / erba
 */
function showSystemMessageJS( sysMsg ) {
    
    if (typeof sysMsg === 'undefined') {
        systemMessageDebug('sysMsg is undefined. Please check localmsg.js');
        //alert('sysMsg is undefined. Please check localmsg.js');
		return;
    } else {
        systemMessageDebug('sysMsg is defined:' + sysMsg['msg'] );
    }

    sysMsg["now"] =  (new Date()).getTime();

	if ( typeof sysMsg['page'] !== 'undefined' ) { // Check page: If defined but not matching current = skip
        if ( sysMsg['page']!= document.title ) {
            systemMessageDebug( "Page title does not match page: [" +  document.title +  "] != [" + sysMsg["page"] +"]" );
            return;
        }
    }
    
	// Test if message should be active
	if ( typeof sysMsg['startDate'] !== 'undefined' && typeof sysMsg['endDate'] !== 'undefined' ) {
		// Start and end date defined
		// Get numeric values of start and end
		startDate	= ( new Date( sysMsg['startDate'] )).getTime();	// Numeric value of start
		endDate		= ( new Date( sysMsg['endDate'] )).getTime();	// Numeric value of end

		/** /
		systemMessageDebug('// Start and end date defined: '+ sysMsg['startDate'] + " - " + sysMsg['endDate']);
		systemMessageDebug('// Start and end date defined: '+ startDate + " - " + endDate );
		systemMessageDebug('// Testing now: ' + sysMsg['now'] );
		
		if ( sysMsg["now"] < startDate ) {
			systemMessageDebug('// Too soon: ' + sysMsg['now'] );
		}
		if ( sysMsg["now"] > endDate ) {
			systemMessageDebug('// Too late: ' + sysMsg['now'] );
		}
		/* */
		
		if ( sysMsg["now"] < startDate  
        || sysMsg["now"] > endDate ) {	// Out of scope?
			systemMessageDebug( "Out of scope: ["+sysMsg['title']+"]" + sysMsg['startDate'] + " - " + sysMsg['endDate'] );
			return;
		}
	}
	if (jQuery('#content').length) { // Test if jQuery is used
        var wrappedmsg = '<fieldset id="systemMsg" class="systemMsg '+sysMsg['class'] + '">'
		+		'<legend class="systemMsg_title '+ sysMsg['class'] + ' ' + sysMsg['class'] +'_title" >'
		+			sysMsg['title'] 
		+		'</legend>'
		+		'<span class="systemMsgHide">'
		+			'<a onClick="javascript:hideSystemMsg( this.parentNode );">&#x2327;</a>'
		+		'</span>'
		+		sysMsg['msg']
		+	'</fieldset>';

		jQuery('#content').prepend(wrappedmsg);  // Insert in front of content
		systemMessageDebug( "System Message inserted: " + sysMsg["msg"] );
	} else {    // No jQuery: 
		systemMessageDebug( "System Message as alert: " + sysMsg["msg"] );
		// Don't use modal windows. Might be blocked by browser
		alert(  sysMsg['title'] + "\n" + sysMsg['msg'] );
	}
}   // showSystemMessageJS()

//---------------------------------------------------------------------

/**
 *  @fn        hideSystemMsg()
 *  @brief     Hide the system message
 *  
 *  
 *  @example   `<a onClick="javascript:hideSystemMsg();">[hide]</a>`
 *  
 *  
 *  @see       https://support.sirsidynix.com/dev/contrib/53967
 *  @since     2022-08-25T12:22:09 / erba
 */
function hideSystemMsg( x ) {
    //jQuery('#systemMsg').hide();
    jQuery( x.parentNode ).hide();  // Hide entire field - not just the [x]
}   // hideSystemMsg()

//--------------------------------------------------------------------

/**
 *  @brief Load and include external JS
 *  
 *  @param [in] loadfile	Name of file to be loaded
 *  @return Return description
 *  
 *  @details More details
 */
function loadLocalJS( loadfile ) {
	// https://stackoverflow.com/a/14521482 Dynamically load JS inside JS [duplicate]
	// Load local messages
	var script = document.createElement('script');
	script.onload = function () {
		//do stuff with the script
	};
	script.src = loadfile;

	document.head.appendChild(script); //or something of the likes
}	// loadLocalJS()

//---------------------------------------------------------------------

/**
 *  @fn        getCurrentScriptPath
 *  @brief Get path for current script
 *  
 *  @return scripts path
 *  
 *  
 *  @details   Works like:
 *      var script = document.currentScript;
 *      even for IE and Edge
 *  
 *  @example   var scriptPath = getCurrentScriptPath();
 *  
 *  @todo      
 *  @bug       
 *  @warning   
 *  
 *  @see       https://
 *  @since     2022-11-11T14:37:32 / erba
 */
function getCurrentScriptPath() {
    //var script = document.currentScript;
    var scripts = document.getElementsByTagName("script"),
    currentScript = scripts[scripts.length-1].src;
    //systemMessageDebug("Current script: " + currentScript );
    var currentScriptChunks = currentScript.split( '/' );
    var currentScriptFile   = currentScriptChunks.pop();
    var currentScriptPath   = currentScriptChunks.join('/') + '/';
    //systemMessageDebug("Current path: " + currentScriptPath );
    return( currentScriptPath );
}   //*** getCurrentScriptPath() ***

//---------------------------------------------------------------------

loadLocalJS( getCurrentScriptPath() + "localmsg.js" );

// Find document language
var userLang = navigator.language || navigator.userLanguage; 
systemMessageDebug("The browser language is: " + userLang);

// Get document language
var doclang = 'en';	// Default language
if (typeof document.documentElement.lang !== 'undefined') {
	doclang =  document.documentElement.lang;
}

systemMessageDebug("The document language is: " + doclang );

// Load your local messages
systemMessageDebug( "Load local messages: " 
    +   getCurrentScriptPath()  
    +   "localmsg.js" 
);


//*** End of File *****************************************************