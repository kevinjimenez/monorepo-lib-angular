# crear workspcae
ng new kj-workspace --no-create-application

# create projecto (este caso lib)
ng g library kj-side-menu

# build del projecto dev
ng build kj-side-menu --configuration development

# build del projecto prod
ng build kj-side-menu


# test
ng test kj-side-menu

# lint
ng lint kj-side-menu


# crreacion de apliucacion dentro del monorepo
ng g application kj-testbed-app

# levantar application dentro del monorepo
ng s kj-testbed-app
