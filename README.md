# Ng2BootstrapPagination

## Intro
The pagination is set so that it goes to page 1 whenever the dropdown list has been changed

## Setup
```
npm install
ng serve
```
goto ```http://localhost:4200```


## Steps to reproduce bug

1. select "item" in drop down list
2. select the **LAST** page
3. select "brand" in drop down list

### What I expect to happen &#10004;
 - Should go to page 1
### What it currently does &#10006;
 - Goes to last page in pagination list

### Current example of how pagination should work &#10004;
1. select "item" in drop down list
2. select page 3 (or any other page that exists within the limits of brand pagination length (e.g. up to page 6))
3. select "brand" in drop down list