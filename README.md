# SPA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Pipes 
  `ng new pipes`
  
## Install Lodash 
    npm install lodash --save
    npm install @types/lodash --save-dev
    
Add the library to the angular-cli.json to list of global scripts (add "../node_modules/lodash/lodash.js"

and in your component where you want to use , try this way

    declare var _:any;

    @Component({
    })
    export class YourComponent {
      ngOnInit() {
         console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
      }
    }  

## De interes

· temp as number

      export class TempConverter {
      static convertFtoC(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
          value = temp;
        } else if ((temp as string).indexOf) {
          value = parseFloat(<string>temp);
        } else {
          value = 0;
        }
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
      }
    }
    
--

    import { Name as OtherName } from "./modules/DuplicateName";
    
--



      @Injectable()
      export class ProductRepository {
      private products: Product[] = [];
      private categories: string[] = [];
      constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
          this.products = data;
          this.categories = data.map(p => p.category)
            .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
      }
    }
    
 --
 
 
