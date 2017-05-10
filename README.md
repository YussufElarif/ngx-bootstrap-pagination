# Ng2BootstrapPagination

## Setup
```
npm install
ng serve
```
goto ```http://localhost:4200```


## Steps to reproduce bug

### What I expect to happen &#10004;
1. select "item" in drop down list
2. select the LAST page
3. select "brand" in drop down list
 - SHOULD go to Page 1;

### What it currently does &#10006;
1. select "item" in drop down list
2. select the LAST page
3. select "brand" in drop down list
 - Doesn't go to Page 1

 ### Example of what works and how it should interact
1. select "item" in drop down list
2. select page 3
3. select "brand" in drop down list 
