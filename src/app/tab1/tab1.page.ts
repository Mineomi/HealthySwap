import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = [
    { 
      name: 'Hamburger (250-400 kcal)', 
      icon: 'assets/hamburger.jpg', 
      ingredients: [
        'Bułka (150 kcal)', 
        'Mięso mielone (250 kcal/100g)', 
        'Ser (400 kcal/100g)', 
        'Sałata (5 kcal/100g)', 
        'Sos (zależy od sosu)'
      ] 
    },
    { 
      name: 'Frytki (314 kcal/100g)', 
      icon: 'assets/fries.jpg', 
      ingredients: [
        'Ziemniaki (77 kcal/100g)', 
        'Olej do smażenia (884 kcal/100g)'
      ] 
    },
    { 
      name: 'Pizza Pepperoni (285 kcal/porcja)', 
      icon: 'assets/pizza.jpg', 
      ingredients: [
        'Ciasto (285 kcal/100g)', 
        'Sos pomidorowy (30 kcal/100g)', 
        'Ser (400 kcal/100g)', 
        'Pepperoni (494 kcal/100g)'
      ] 
    },
    { 
      name: 'Nuggetsy kurczakowe (47 kcal/nugget)', 
      icon: 'assets/nuggets.jpg', 
      ingredients: [
        'Mięso kurczaka (165 kcal/100g)', 
        'Panierka (400 kcal/100g)', 
        'Sos (zależy od sosu)'
      ] 
    },
    { 
      name: 'Hot Dog (150-200 kcal)', 
      icon: 'assets/hotdog.jpg', 
      ingredients: [
        'Kiełbaska (150 kcal)', 
        'Bułka (150 kcal)', 
        'Sosy (100 kcal/łyżka)'
      ] 
    },
    { 
      name: 'Kebab (500-800 kcal)', 
      icon: 'assets/kebab.jpg', 
      ingredients: [
        'Mięso (250 kcal/100g)', 
        'Chleb (200 kcal)', 
        'Warzywa (zależy od warzyw)', 
        'Sosy (zależy od sosu)'
      ] 
    },
    { 
      name: 'Cheeseburger (300-500 kcal)', 
      icon: 'assets/cheeseburger.jpg', 
      ingredients: [
        'Bułka (150 kcal)', 
        'Mięso mielone (250 kcal/100g)', 
        'Ser (400 kcal/100g)', 
        'Sosy (zależy od sosu)'
      ] 
    },
    { 
      name: 'Lody (200-300 kcal/porcja)', 
      icon: 'assets/icecream.jpg', 
      ingredients: [
        'Mleko (42 kcal/100g)', 
        'Cukier (400 kcal/100g)', 
        'Aromaty (zależy od aromatów)'
      ] 
    },
    { 
      name: 'Nachos z sosem serowym (300-500 kcal)', 
      icon: 'assets/nachos.jpg', 
      ingredients: [
        'Chipsy nachos (500 kcal/100g)', 
        'Sos serowy (300 kcal/100g)'
      ] 
    },
    { 
      name: 'Donut (200-300 kcal/sztuka)', 
      icon: 'assets/donut.jpg', 
      ingredients: [
        'Ciasto (300 kcal/sztuka)', 
        'Polewa (200 kcal/sztuka)', 
        'Posypka (100 kcal/sztuka)'
      ] 
    },
    { 
      name: 'Soda (150-200 kcal/puszka)', 
      icon: 'assets/soda.jpg', 
      ingredients: [
        'Woda gazowana (0 kcal)', 
        'Cukier (400 kcal/100g)', 
        'Aromaty (zależy od aromatów)'
      ] 
    },
    { 
      name: 'Kurczak w panierce (300-400 kcal/porcja)', 
      icon: 'assets/chicken.jpg', 
      ingredients: [
        'Mięso kurczaka (165 kcal/100g)', 
        'Panierka (400 kcal/100g)', 
        'Sosy (zależy od sosu)'
      ] 
    },
    { 
      name: 'Kartofle z serem (300-500 kcal)', 
      icon: 'assets/cheesypotatoes.jpg', 
      ingredients: [
        'Ziemniaki (77 kcal/100g)', 
        'Ser (400 kcal/100g)', 
        'Sosy (zależy od sosu)'
      ] 
    },
    { 
      name: 'Mleczny koktajl (300-500 kcal)', 
      icon: 'assets/milkshake.jpg', 
      ingredients: [
        'Mleko (42 kcal/100g)', 
        'Lody (200 kcal/100g)', 
        'Syropy (zależy od syropu)'
      ] 
    },
    { 
      name: 'Bekon z frytkami w serze (400-600 kcal)', 
      icon: 'assets/baconfries.jpg', 
      ingredients: [
        'Frytki (365 kcal/100g)', 
        'Sos serowy (300 kcal/100g)', 
        'Bekon (42 kcal/100g)'
      ] 
    },
  ];
  isOpen: boolean[] = [];

  
  constructor() {
    this.items.forEach(() => this.isOpen.push(false));
  }

  toggleIngredients(index: number) {
    
    this.isOpen[index] = !this.isOpen[index];
  }

}
