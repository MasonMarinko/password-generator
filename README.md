# Password Generator Starter Code

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security



# GIVEN I need a new, secure password
    - Once loaded the website presents with a title "Password Generator", a secondary header "Generate a Password", a box with text that reads "Your Secure Password" then a button labeled "Generate Password". Once the Generate Password button is selected it will lead you through a series of questions that will decide the criteria of your password. This includes letters by default, so they will have some password if they say no to all. Questions include length, characters (Yes/No), uppercase letters (Yes/No) and Numbers (Yes/No). In the end, once all questions have been exhausted a new password will be shown in the box.

## WHEN I click the button to generate a password
## THEN I am presented with a series of prompts for password criteria
    - Questions again include length, characters, uppercase letters, numbers.

## WHEN prompted for password criteria
## THEN I select which criteria to include in the password
    - As stated above the criteria is asked throughout the prompts, this will determine if you want these different items or not.

## WHEN prompted for the length of the password
## THEN I choose a length of at least 8 characters and no more than 128 characters
    - The first question is how long you would like the password. You need to choose between 8 and 128 characters. If you don't select a valid number it will keep looping until you select a correct answer.

## WHEN prompted for character types to include in the password
## THEN I choose lowercase, uppercase, numeric, and/or special characters
    - All of these are options, the only acception is lowercase. By default, lowercase letters will always be included so the user will be guranteed to have a baseline password.

## WHEN I answer each prompt
## THEN my input should be validated and at least one character type should be selected
    - When selecting items, validations are as follows. When choosing a number, if you don't select a number between 8 and 128 it will let you know this is invalid and to choose another number that is within range. When selecting for the (Yes/No) questions if you select yes you proceed, however if you select no, it will verify you don't want to have this on your password, if you decide you actually do then you select cancel and it will allow you to select again.

## WHEN all prompts are answered
## THEN a password is generated that matches the selected criteria
    - After all of the criteria is answered, a new password will be displayed exactly to the criteria you set by answering the questions.

## WHEN the password is generated
## THEN the password is either displayed in an alert or written to the page
    - The password appears on the page inside the box above Generate Password. If you were to select Generate Password again it would loop to the beginning and start over and allow you to create a new password.
