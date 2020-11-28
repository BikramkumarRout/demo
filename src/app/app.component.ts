import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  capsOn: any;
  title = 'Bikram COde';
  public products = ['TV', '1', 'Mobile', 'Shoe', '2', 'TV', 'Watch', '99', 'Mobile', '1as003'];

   employees: any = [ {
  code: '001', name: 'Ajeet', gender: 'male', salary: 55000
  },
{
  code: '002', name: 'soni', gender: 'female', salary: 45000
},
{
  code: '003', name: 'Akash', gender: 'male', salary: 39000
},
{
  code: '004', name: 'Rita', gender: 'female', salary: 98000
},
{
  code: '005', name: 'Bikram', gender: 'male', salary: 89900
}
];

}

