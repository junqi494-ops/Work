# Feature: Prepare payment details

## 1. User goal
Who needs this feature? What do they want to achieve?
Pet owners want to view the service details and amount before making payment.
## 2. Scope
What will the feature do? What will it NOT do?
The feature prepares payment details and will not charge money
## 3. Request
What HTTP method and URL are used? What input is needed?
Method: GET
URL: /payments/prepare/:serviceId
Input: Service ID from the URL.
## 4. Service catalogue
What are the available service IDs, names and prices?
1,2,3 Service 1 is Vaccination at SGD 35 etc
## 5. Successful response
What HTTP status, JSON fields, values and types are required?
HTTP 200 with JSON containing exactly five fields:
serviceId (number)
serviceName (string)
amount (number)
currency (string, "sgd")
status (string, "READY_FOR_PAYMENT")
## 6. Unsuccessful response
What happens when the requested service does not exist?
Return HTTP 404 and an error message when the service cannot be found.
## 7. Acceptance criteria
AC1: Service 1 returns HTTP 200 with Vaccination and amount 35.
AC2: Service 2 returns HTTP 200 with its correct catalogue details.
AC3: Service 3 returns HTTP 200 with its correct catalogue details.
AC4: Service 999 returns HTTP 404.
AC5: Successful responses contain exactly five fields with correct data types and values. The amount comes from the catalogue.
## 8. Open questions
What has not yet been agreed? Do not silently invent an answer.