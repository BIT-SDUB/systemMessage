# System Message

Meta        | info
---|---
Copyright   | http://www.gnu.org/licenses/lgpl.txt LGPL version 3
Author      | Erik Bachmann <BIT@bib.sdu.dk>
Since       | 2022-11-11T15:43:14 / Erik Bachmann
Version     | 2022-11-16T12:28:50 / Erik Bachmann

Push out a collapsable system message that will display in from of all other content on the page.

System Message is a custom Javascript that can be:

- Scheduled to be active for a given periode (Default is always).
- In browsers local language.
- Mapped to specifig pages only


## Details

An enhancement of Joel Hahn's script: https://support.sirsidynix.com/dev/contrib/53967

Data for the message is stored in an associative array ( JSON like ).
A default array named systemMessage is created in the `systemmessage.js`

You can modify this directly or create a copy of your own.

When using multiple calls to `showSystemMessageJS()`, the latest call will appear on the 
top of content followed by previous calls in reverse order.

### Files

File | Content
---|---
`README.md`             | This documentation
`systemmessage.js`      | Javascript handling messages
`localmsg.js`           | Your local configuration
`systemmessage.css`     | CSS styling
`systemMessage.html`    | Test page
---                     | ---
`jquery.min.js`         | JQuery (if stand alone)
`jquery-3.6.0.min.js`   | JQuery (if stand alone)

### Messages

The structure `systemMessages` holds the predefined messages to be activated by a call to `systemMessageJS()` with a tag name.

The structure is sub devided by 

- *Message tag*             - The key to the message
     - *Function tags*      - The data for each message: Title, msg, class
        - *Language code*   - Used for translation in `title`, `msg` and `page`-title. `en` for English is default language.

Each message has a tag and the subfields like `title`, `msg`, `class` and optional tags `page`, `startDate`/`endDate`.

```javascript
var systemMessages = {
    beta: {
            title: {
            en: "Beta &#x1F9EA;",
            da: "Beta &#x1F9EA;",
        },
        msg: {
            en: "This is a beta version of the Library Catalogue. The test runs till launch January 23st 2023<br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Library%20Catalogue%20Beta&body=Describe%20errors%20here'>Sysadm</a>",
            da: "Dette er en beta version af bibliotekets katalog, som går i drift d. 23. januar 2023.<br>Meld venligst alle problemer til <a href='mailto:sysadm@somewhere.com?subject=Bibliotekskatalog%20Beta&body=Beskriv%20fejl%20her'>Sysadm</a>",
        },
:
    }
}
```

A message has the fields:

Tag         | Mandatory                     | Type      | Content
---|---|---|---
title       | Mandatory                     | String    | Short title for legend
msg         | Mandatory                     | String    | Text body for message
class       | Mandatory                     | List      | Defined types: info, ok, warning, error
page        | Optional                      | String    | Only active if page matching Document.title
startDate   | Optional, requires endDate    | Date      | Valid JS date
endDate     | Optional, startDate           | Date      | Valid JS date

Without `page`, `startDate` / `endDate` the message will allways be visible on any page.

A message like: 
```javascript
    beta: {
            title: {
            en: "Beta &#x1F9EA;",
            da: "Beta &#x1F9EA;",
        },
        msg: {
            en: "This is a beta version",
            da: "Dette er en beta version",
        },
        class:      "systemMsg_info",
    },
```
and activated by:

```javascript
showSystemMessageJS( systemMessages[ doclang ]['beta'] );
```    

should give you a message like:

> <fieldset id="systemMsg" class="systemMsg systemMsg_info">
>     <legend class="systemMsg_title systemMsg_info systemMsg_info_title">🛈 Beta</legend><br>
>     This is a beta version<span class="systemMsgHide" style="float:right;"><a onclick="javascript:hideSystemMsg( this.parentNode );">⌧</a></span>
> </fieldset>
>

Defined classes in `systemmessage.css`:

Class               | Function
---|---
`systemMsg_info`    | Simple information
`systemMsg_ok`      | Operation succeded
`systemMsg_warning` | System warning
`systemMsg_error`   | System failure

Each class should give you a sutable icon in title/legend and background color.


```javascript
var systemMessages = {
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
            en: "This is a beta version of the Library Catalogue. The test runs till launch January 23st 2023<br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Library%20Catalogue%20Beta&body=Describe%20errors%20here'>Sysadm</a>",
            da: "Dette er en beta version af bibliotekets katalog, som går i drift d. 23. januar 2023.<br>Meld venligst alle problemer til <a href='mailto:sysadm@somewhere.com?subject=Bibliotekskatalog%20Beta&body=Beskriv%20fejl%20her'>Sysadm</a>",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 31, 2023 00:01"
    },
}
```

## Instructions

To activate message on any page add the following to the page footer:

```html
    <script src="systemmessage.js">  // Activate System Messages
    <link rel="stylesheet" href="systemmessage.css"> // Styling for System Messages
```

By default a configuration `localmsg.js` file is loaded.

You can however load another direcly using:

```html
    <script>  // Activate System Messages
        loadLocalJS( getCurrentScriptPath() + "localmsg.js" );
    </script>
```


### Load individual messages

```javascript
showSystemMessageJS( systemMessages, 'alpha' );	// Out of scope = never displayed
showSystemMessageJS( systemMessages, 'beta', 'da' );  // In danish
```

### Load all messages (default)

```javascript
for (key in systemMessages ) {
    systemMessageDebug( "Setting msg:" + key );
    showSystemMessageJS( systemMessages, key, doclang );
}
```

## Configuration

Configuration is stored in a multidimentional, assosiative structure named `systemMessages`  ( Sounds advanced - right?! ;-) )

Messages are grouped by language code (ISO 639-1 2 digits) and message name. Each message has a the attributes:
- `title`    Will be displayed in the legend (Array of localised strings).
- `msg`     The body of the message (Array of localised strings). May contain HTML.
- `page`    Array of localised page titles
- `class`   Styling class (defined in `systemmessage.css`) like:
    - `systemMsg_info`      Ordinary message (icon: 🛈). Cyan background.
    - `systemMsg_ok`        Status is OK (icon: 🗸). Light green background
    - `systemMsg_warning`   A warning (icon: ⚠). Light yellow background
    - `systemMsg_error`     Some kind of error has occured (icon: 💥). Light red background
- `startDate`   Start date and time (Syntax: Month 0D, YYYY hh:mm). If not defined = any date and time.
- `endDate`     End date and time (Syntax: Month 0D, YYYY hh:mm). If not defined = any date and time.


### Examples

These messages are examples of the four default types of messages:
1. info
2. ok
3. warning
4. error

```javascript
var systemMessages = {
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
            en:       "System Message - test page", 
            da:       "System Message - test page", 
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
            en: "It's just OK. Used for test only.",
            da: "Det er bare OK. Bør kun anvendes til test.",
        },
        class:      "systemMsg_ok",
        page: {
            en:       "System Message - test page", 
            da:       "System Message - test page", 
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
            en:       "System Message - test page", 
            da:       "System Message - test page", 
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
            en:       "System Message - test page", 
            da:       "System Message - test page", 
        },
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 03, 2030 00:01"
/* <<< System Message - test <<< */
    },
    beta: {
            title: {
            en: "Beta &#x1F9EA;",
            da: "Beta &#x1F9EA;",
        },
        msg: {
            en: "This is a beta version. Used for testing only!<br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Library%20Catalogue%20Beta&body=Describe%20errors%20here'>Sysadm</a>",
            da: "Dette er en beta version kun til test!<br>Meld venligst alle problemer til <a href='mailto:sysadm@somewhere.com?subject=Bibliotekskatalog%20Beta&body=Beskriv%20fejl%20her'>Sysadm</a>",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 31, 2023 00:01"
    },
    prod: {
            title: {
            en: "Production",
            da: "Production",
        },
        msg: {
            en: "This system is in full production mode.<br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Library%20Catalogue%20Beta&body=Describe%20errors%20here'>Sysadm</a>",
            da: "Dette er en fuld produktionsversion.<br>Meld venligst alle problemer til <a href='mailto:sysadm@somewhere.com?subject=Bibliotekskatalog%20Beta&body=Beskriv%20fejl%20her'>Sysadm</a>",
        },
        class:      "systemMsg_info",
        //page:     "",
        startDate:  "January 01, 2001 00:01",
        endDate:    "January 31, 2023 00:01"
    },
}
```

If current date and time is between "January 01, 2001 00:01" and January 31, 2023 00:01" you should see:


> <fieldset id="systemMsg" class="systemMsg systemMsg_info">
>     <legend class="systemMsg_title systemMsg_info systemMsg_info_title">🛈 Beta</legend><br>
>     This is a beta version. Used for testing only! <span class="systemMsgHide" style="float:right;"><a onclick="javascript:hideSystemMsg( this.parentNode );">⌧</a></span>
>     <br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>Sysadm</a>
> </fieldset>
>

Between January 31, 2023 00:02" and "January 03, 2028 00:01"

> <fieldset id="systemMsg" class="systemMsg systemMsg_ok">
>     <legend class="systemMsg_title systemMsg_ok systemMsg_ok_title">🗸 Production</legend><br>
>     This system is in full production mode. <span class="systemMsgHide" style="float:right;"><a onclick="javascript:hideSystemMsg( this.parentNode );">⌧</a></span>
>     <br>Please report any problems to <a href='mailto:sysadm@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>Sysadm</a>
> </fieldset>
>



#### Show test examples

```javascript
document.title  = 'System Message - test page';  // Hard coded title for test only

// Show examples
if ( 'System Message - test page' == document.title ) {
    showSystemMessageJS( systemMessages, 'info' );
    showSystemMessageJS( systemMessages, 'ok' );
    showSystemMessageJS( systemMessages, 'warning' );
    showSystemMessageJS( systemMessages, 'error' );
}
```

> <fieldset id="systemMsg" class="systemMsg systemMsg_info">
>     <legend class="systemMsg_title systemMsg_info systemMsg_info_title">Info</legend><br>
>     System Information. Used for test only.
> </fieldset>
> <fieldset id="systemMsg" class="systemMsg systemMsg_ok">
>     <legend class="systemMsg_title systemMsg_ok systemMsg_info_title">OK/legend><br>
>     It's just OK. Used for test only.
> </fieldset>
> <fieldset id="systemMsg" class="systemMsg systemMsg_warning">
>     <legend class="systemMsg_title systemMsg_warning systemMsg_warning_title">Warning</legend><br>
>     This is a warning. Used for test only.
> </fieldset>
> <fieldset id="systemMsg" class="systemMsg systemMsg_error">
>     <legend class="systemMsg_title systemMsg_error systemMsg_error_title">Error</legend><br>
>     This is an error. Used for test only.
> </fieldset>
>



#### Testing specific page

```javascript
// Test setup
doclang = 'en';

if ( 'da' == doclang ) {
    document.title  = 'Mine lister';  // Hard coded title for test only
} else {
    document.title  = 'My lists';  // Hard coded title for test only
}
```

---