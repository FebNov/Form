# Basic Form
This component hasn't use any UI library
### Form Detail
- Fill in email address
  - able to validation email format 
- Fill in idea 
- Unable to Click the Button until fill in all the info
## Tech Stack & Other Dependencies
- React
- prop-types
- styled-components
- Dotenv-Webpack etc
- Webpack etc
- MailGun
- SendMail
  
## Haven't Compelted
- SendMail API
  - Reason : Limited Time and sendgird not allow directly send mail via js
  - Solution: Build server
- AutoFill the Email Address
  - For user experience, email address will autofill while the user already login
    - Reason: Limited Time and a bit out of scope
    - Solution: Store userInfo into browse storage (encrypt/decrypt)
