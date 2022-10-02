Feature: Contact Us page

    Background:
        Given A user opens telnyx website on the contact us page

    Scenario: Form "contact us" with empty credentials
        When Click submit button
        Then The user should see an error message "This field is required."

    Scenario Outline: Fill out the "contact us" form 
        When Choose <reason> for contact
        And Enter "First Name" is <first_name>
        And Enter "Last Name" is <last_name>
        And Enter "Email" is <email>
        And Choose <country> for phone number
        And Enter "Phone_Number" is <phone>
        And Enter "Website" is <website>
        And Choose receive emails
        And Click Submit button
        Then The message should be given to user as "Thanks for Reaching Out!"

        Examples:
            | reason          | first_name | last_name | email                | country | phone    | website                         |
            | "Legal"         | "Kate"     | "Smith"   | "ournews@att.net"    | "+1242" | "123456" | "https://telnyx.com/contact-us" |
            | "Support"       | "Samantha" | "Brown"   | "qwerty@gmail.com"   | "+44"   | "789456" | "https://www.toolsqa.com/"      |
