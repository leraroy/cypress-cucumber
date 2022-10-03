Feature: Blog page

    Background:
        Given A user opens telnyx website on the blog page

    Scenario: The page should contain the header "Resource Hub"
        Then Page contain the header "Resource Hub"

    Scenario Outline: Contain title <header>, after click <guide>
        When Click <guide> button
        Then See <header> guide page

        Examples:
            | guide                             | header                                                         |
            | "SMS Guide"                       | "SMS \| Complete Guide to Sending Text Messages"                |
            | "VoIP Guide"                      | "VoIP \| Complete Guide to Voice over Internet Protocol"        |
            | "SIP Trunk Guide"                 | "SIP Trunking \| Complete Guide to Session Initiation Protocol" |
            | "WebRTC Guide"                    | "WebRTC \| Complete Guide to Web Real-Time Communication"       |
            | "IoT Guide"                       | "IoT \| Complete Guide to the Internet of Things"               |
            | "Two-Factor Authentication Guide" | "Two-Factor Authentication \| Complete Guide to 2FA"            |
            | "Fax Guide"                       | "Fax \| Complete Guide to Fax"                                  |
            | "SHAKEN/STIR Guide"               | "SHAKEN/STIR \| Complete Guide to Combatting Illegal Robocalls" |

