# show all just recipes
default:
    just -l
        
# format sass files
fmt-sass:
    prettier --write ./src/**/*.scss
    stylelint --fix ./src/**/*.scss
        
# format all project files
fmt: fmt-sass
    deno fmt

# check sass formatting
check-sass:
    prettier --check ./src/**/*.scss
        
# check formatting
check: check-sass
    deno fmt --check
    
# run sass linter
lint-sass:
    stylelint ./src/**/*.scss
        
# run linter
lint: lint-sass
    deno lint

# run all tests
test: 
    deno test -A

# build documentation (static site)
build-docs:
    deno run docs/index.ts    

