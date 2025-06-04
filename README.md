# Dmoney-Rest-API-integration-testing

D-money is a transactional system where send money, transaction, withdrawal and deposit methods can be perform. This project contains integration tests for the Dmoney REST API.
Portal link: http://dmoneyportal.roadtocareer.net/
### Scenario

 1. Admin creates an agent and random 2 customers. Admin email: admin@roadtocareer.net/ Pass: 1234
 2. Deposit some money from SYSTEM account to the agent. System account: SYSTEM (range 10 tk to 10000 tk)
 3. Agent deposit to any of 1 customer
 4. Check agent balance
 5. Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
 6. Then the customer checks balance
 7. Then send money to the other customer
 8. Then from the another customer payment to this merchant: 01712121212
 9. Then the second customer will check both balance and statement
10. Then the merchant will check his own balance

## Technology and Tool Used
1. Postman
2. Newman

### Pre-requisites

- Node.js 
- npm 

### How to run this project

  1. Clone this project
  2.  Hit the following command:
     
       i. npm init -y  
      ii. npm i newman  
     iii. npm i newman-reporter-htmlextra
      iv. npm i  
       v. npm test
      

### Running Tests

To execute the integration tests, use:
```bash
npm test
```

## API documentation 

https://documenter.getpostman.com/view/24475549/2sB2qi9yKq

## Test Case

https://docs.google.com/spreadsheets/d/1dsrqpbot0cuSk_tWO_xmUPFdXCKTuup_/edit?usp=drive_link&ouid=101380230312201130628&rtpof=true&sd=true

## Bug Report

https://docs.google.com/spreadsheets/d/1ve4Sz9SUPLZovuWmutpbhVwVMiIYbR2y/edit?usp=drive_link&ouid=101380230312201130628&rtpof=true&sd=true

## Newman Summary Report
![image](https://github.com/user-attachments/assets/20a0873b-a37f-4088-af59-375f2ce9b838)

