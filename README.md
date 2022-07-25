![AltSchool Africa Logo](https://github.com/tuyojr/AltSchool-Assignments-1/blob/master/AltSchool.svg)
# 01 - Phonie: Identify the telecoms carrier from a phone number
## Scenario
A user is filling a form in your web application and they are required to enter their phone number into a form field.

### Outcome
After typing the phone number into the form field, the UI indicates that it is an MTN or GLO or Airtel or Etisalat number e.t.c (e.g if its an MTN line, display the MTN icon/logo somewhere beside the form field).

#### Advanced features (OPTIONAL- build any, some or all if you feel up to it)
- Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier, e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid.

- Support +XYZ country codes (e.g +234 for Nigeria) - Still detect the carrier even if the user prefixed the number with their +XYZ country code.

- Show auto-completion - Show suggestions as the user starts typing the phone number. E.g once they type 080, show them that 0803 and 0806 and other possible matching variants of the carrier.
