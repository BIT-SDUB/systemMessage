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

- *Language code*             - Used for translation. `en` for English is default language.
    - *Message tag*            - The key to the message
        - *Function tags*    - The data for each message: Title, msg, class

Each message has a tag and the subfields like `title`, `msg`, `class` and optional tags `page`, `startDate`/`endDate`.

```javascript
var systemMessages = {
    en: {    // Default language: English
        alpha: { 
            title:      "Alpha",
            msg:        "This is an outdated alpha message. Should never be visible",
            class:      "systemMsg_info",
            page:       "Document.title"
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 01, 2002 00:01"
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
            title:  "Beta",
            msg:    "This is a beta version",
            class:  "systemMsg_info"
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
    en: {    // Default language
        alpha: { 
            title:      "Alpha",
            msg:        "This is an outdated alpha message. Should never be visible",
            class:      "systemMsg_info",
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 01, 2002 00:01"
        },
        beta: { 
            title:      "Beta",
            msg:        "This is a beta version",
            class:      "systemMsg_info"
        },
        info: {
            title:      "Info",
            msg:        "This is information",
            page:       "System Message - test page",   // Only visible in test
            class:      "systemMsg_info"
        },
        ok: { 
            title:      "OK",
            msg:        "This is OK",
            page:       "System Message - test page",   // Only visible in test
            class:      "systemMsg_ok"
        },
        warning: { 
            title:      "Warning",
            msg:        "This is a warning",
            page:       "System Message - test page",   // Only visible in test
            class:      "systemMsg_warning"
        },
        error: { 
            title:      "Error",
            msg:        "This is an Error",
            page:       "System Message - test page",   // Only visible in test
            class:      "systemMsg_error"
        }    
    }
    ,    // Additional languages
    da: {    // Danish
        alpha: { 
            title:      "Alfa",
            msg:        "Dette er en forældet alfa version, som aldrig må være synlig",
            class:      "systemMsg_info",
            // Active Date interval
            startDate:  "January 01, 2001 00:01",
            endDate:    "January 01, 2002 00:01"
        },
        beta: { 
            title:      "Beta",
            msg:        "Dette er en beta version Bingo",
            class:      "systemMsg_info"
        }
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

## Configuration

Configuration is stored in a multidimentional, assosiative structure named `systemMessages`  ( Sounds advanced- right?! ;-) )

Messages are grouped by language code (ISO 639-1 2 digits) and message name. Each message has a the attributes:
- `title`    Will be displayed in the legend
- `msg`     The body of the message. May contain HTML
- `class`   Styling class like:
    - `systemMsg_info`      Ordinary message (icon: 🛈). Cyan background.
    - `systemMsg_ok`        Status is OK (icon: 🗸). Light green background
    - `systemMsg_warning`   A warning (icon: ⚠). Light yellow background
    - `systemMsg_error`     Some kind of error has occured (icon: 💥). Light red background
- `startDate`   Start date and time (Syntax: Month 0D, YYYY hh:mm). If not defined = any date and time.
- `endDate`     End date and time (Syntax: Month 0D, YYYY hh:mm). If not defined = any date and time.


### Example
```javascript
var systemMessages = {
    en: {    // Default language: English
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
        }
    },  // <<< Messages in English
    da: {    // Language: Danish
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
        }
    }   // <<< Messages in Danish
}
```

If current date and time is between "January 01, 2001 00:01" and January 03, 2023 00:01" you should see:


> <fieldset id="systemMsg" class="systemMsg systemMsg_info">
>     <legend class="systemMsg_title systemMsg_info systemMsg_info_title">🛈 Beta</legend><br>
>     This is a beta version. Used for testing only! <span class="systemMsgHide" style="float:right;"><a onclick="javascript:hideSystemMsg( this.parentNode );">⌧</a></span>
>     <br>Please report any problems to <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>
> </fieldset>
>

Between January 03, 2023 00:02" and "January 03, 2028 00:01"

> <fieldset id="systemMsg" class="systemMsg systemMsg_ok">
>     <legend class="systemMsg_title systemMsg_ok systemMsg_info_title">🗸 Production</legend><br>
>     This system is in full production mode. <span class="systemMsgHide" style="float:right;"><a onclick="javascript:hideSystemMsg( this.parentNode );">⌧</a></span>
>     <br>Please report any problems to <a href='mailto:someone@somewhere.com?subject=Mail%20subject&body=Describe%20errors%20here'>admin</a>
> </fieldset>
>

---