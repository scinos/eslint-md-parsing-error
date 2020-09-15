# eslint-md-parsing-error

Example repo.

1. Run `npm install`

2. Run `./node_modules/.bin/eslint example.md`, note how prettier complains a lot about missing indentation:

         3:3  error  Insert `··`                              prettier/prettier
         4:1  error  Insert `··`                              prettier/prettier
         5:1  error  Insert `··`                              prettier/prettier
         6:1  error  Insert `··`                              prettier/prettier
         7:1  error  Insert `··`                              prettier/prettier
         8:1  error  Insert `··`                              prettier/prettier
         9:1  error  Insert `··`                              prettier/prettier
        10:1  error  Insert `··`                              prettier/prettier
        11:1  error  Insert `··`                              prettier/prettier
         5:3  error  Parsing error: Unexpected character '`'
   
3. Run `./node_modules/.bin/eslint example.md --fix`, note how the file is all broken now:

                  -   list
        
            ```js
            foo()
          ```
        
        ---
          
        ```js
        bar()
        ```





