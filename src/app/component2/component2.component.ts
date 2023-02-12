import { Component,Output,EventEmitter } from '@angular/core';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  products=[
    {
      id:1,
      price:100,
      name:'colgate',
      Image:'/assets/col.jpg'
  
  },
{
  id:2,
  price:35,
  name:'Ponds',
  Image:'/assets/f1.jpg'
},
{
  id:3,
  price:70,
  name:'Hair Brush',
  Image:'/assets/f2.jpg'
},
{
  id:4,
  price:58,
  name:'Tata Salt',
  Image:'/assets/f5.jpg'
},
{
  id:5,
  price:28,
  name:'ToothBrush',
  Image:'/assets/f3.jpg'
},
{
  id:6,
  price:350,
  name:'Ashirwad Ata',
  Image:'/assets/f6.jpg'
},

{
  id:7,
  price:220,
  name:'Horlicks',
  Image:'/assets/f7.jpg'
},
{
  id:8,
  price:60,
  name:'Coffiee',
  Image:'/assets/f8.jpg'
},
{
  id:9,
  price:89,
  name:'Tata Tea',
  Image:'/assets/f9.jpg'
},
{
  id:10,
  price:700,
  name:'Fortune Oil',
  Image:'/assets/f10.jpg'
},
{
  id:11,
  price:56,
  name:'Nidhi',
  Image:'/assets/f11.jpg'
},
{
  id:12,
  price:90,
  name:'Harpic',
  Image:'/assets/f12.jpg'
},
{
  id:13,
  price:80,
  name:'Pears Soap',
  Image:'/assets/f13.jpg'
},
{
  id:14,
  price:50,
  name:'Detol Soap',
  Image:'/assets/f14.jpg'
},
{
  id:15,
  price:70,
  name:'cintol Soap',
  Image:'/assets/f15.jpg'
}
]

name(){
  alert("Product Added Sucessfully!!!!!!")
}
id=this.products
happy(){
  if(this.id==this.products){
    console.log(this.products)
}
}
}

