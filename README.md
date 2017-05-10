# Ng2BootstrapPagination

## Setup
```
npm install
ng serve
```
goto ```http://localhost:4200```


## Steps to reproduce bug
1. select "item" in drop down list
2. select page 3
3. select "brand" in drop down list (changes to page 1 as expected) &#10004;

 

1. select "item" in drop down list
2. select the LAST page
3. select "brand" in drop down list (doesn't change to page 1) &#10006;
