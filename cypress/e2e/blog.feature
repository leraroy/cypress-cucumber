Feature: Blog page

    Background:
        Given A user opens telnyx website on the blog page

        Scenario: The page should contain the header "Resource Hub"
        Then Page contain the header "Resource Hub"
    
    Scenario Outline: Contain title <header>, after click <guide>
        When Click <guide> button
        Then See <header> guide page

        Examples:
            | guide                             | header                      |
            | "SMS Guide"                       | "SMS"                       |
            | "VoIP Guide"                      | "VoIP"                      |
            | "SIP Trunk Guide"                 | "SIP Trunking"              |
            | "WebRTC Guide"                    | "WebRTC"                    |
            | "IoT Guide"                       | "IoT"                       |
            | "Two-Factor Authentication Guide" | "Two-Factor Authentication" |
            | "Fax Guide"                       | "Fax"                       |
            | "SHAKEN/STIR Guide"               | "SHAKEN/STIR"               |

