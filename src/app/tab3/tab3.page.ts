import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items = [
    { 
      name: 'Kurczakowy Burger Sałatkowy (400 kcal)', 
      icon: 'assets/chickensaladburger.jpg', 
      ingredients: [
        'Grillowany kurczak (165 kcal/100g)', 
        'Sałata (5 kcal/100g)', 
        'Pomidory (18 kcal/100g)', 
        'Ogórek (16 kcal/100g)', 
        'Sos jogurtowy (60 kcal/100g)'
      ],
      instructions: [
        '1. Grilluj kawałki kurczaka.',
        '2. Przygotuj sałatkę z warzyw.',
        '3. Umieść kurczaka na bułce, dodaj warzywa i polej sosem jogurtowym.'
      ] 
    },
    { 
      name: 'Pieczone Ziemniaki Ziołowe (200 kcal)',
      icon: 'assets/bakedpotatoeswithherbs.jpg', 
      ingredients: [
        'Ziemniaki (77 kcal/100g)', 
        'Oliwa z oliwek (884 kcal/100g)'
      ],
      instructions: [
        '1. Pokrój ziemniaki.',
        '2. Wymieszaj ziemniaki z oliwą i ziołami.',
        '3. Piecz w piekarniku do uzyskania chrupiącej skórki.'
      ] 
    },
    { 
      name: 'Pizza z Pełnoziarnistym Ciastem (700 kcal)', 
      icon: 'assets/wholegrainpizza.jpg', 
      ingredients: [
        'Ciasto pełnoziarniste (285 kcal/100g)', 
        'Sos pomidorowy (30 kcal/100g)', 
        'Ser (400 kcal/100g)', 
        'Kurczak (165 kcal/100g)', 
        'Warzywa (według wyboru)'
      ],
      instructions: [
        '1. Rozwałkuj ciasto pełnoziarniste.',
        '2. Nałóż sos, ser i dodaj warzywa oraz kurczaka.',
        '3. Piecz w piekarniku zgodnie z instrukcjami na opakowaniu ciasta.'
      ] 
    },
    { 
      name: 'Pieczone Kawałki Kurczaka (300 kcal)', 
      icon: 'assets/bakedchickenpieces.jpg', 
      ingredients: [
        'Kawałki kurczaka (165 kcal/100g)', 
        'Panierka z płatków kukurydzianych (400 kcal/100g)'
      ],
      instructions: [
        '1. Obrób kawałki kurczaka.',
        '2. Umieść na blasze do pieczenia i piecz.'
      ] 
    },
    { 
      name: 'Kiełbasa Grillowana (350 kcal)', 
      icon: 'assets/hotdog.jpg', 
      ingredients: [
        'Grillowana kiełbaska (150 kcal/100g)', 
        'Bułka pełnoziarnista (150 kcal/100g)', 
        'Warzywa', 
        'Sosy (100 kcal/łyżka, łącznie)'
      ],
      instructions: [
        '1. Grilluj kiełbaskę.',
        '2. Umieść ją w bułce, dodaj warzywa i polej sosami.'
      ] 
    },
    { 
      name: 'Wrap Indyjski z Indykiem (450 kcal)', 
      icon: 'assets/Indianwrapwithturkey.jpg', 
      ingredients: [
        'Indyk (250 kcal/100g)', 
        'Tortilla pełnoziarnista (200 kcal/100g)', 
        'Warzywa', 
        'Sos jogurtowy lekki'
      ],
      instructions: [
        '1. Smaż kawałki indyka.',
        '2. Rozłóż indyka na tortilli, dodaj warzywa i polej sosem jogurtowym.'
      ] 
    },
    { 
      name: 'Burger Indyjski z Indykiem (400 kcal)', 
      icon: 'assets/Indian burger with turkey.jpg', 
      ingredients: [
        'Indyk (250 kcal/100g)', 
        'Bułka pełnoziarnista (150 kcal/100g)', 
        'Warzywa', 
        'Lekki sos'
      ],
      instructions: [
        '1. Smaż kawałki indyka.',
        '2. Umieść indyka w bułce, dodaj warzywa i polej sosem.'
      ] 
    },
    { 
      name: 'Mrożony Jogurt (150 kcal)', 
      icon: 'assets/icecream.jpg', 
      ingredients: [
        'Mrożony jogurt (42 kcal/100g)', 
        'Owoce'
      ],
      instructions: [
        '1. Podawaj mrożony jogurt w misce.',
        '2. Posyp świeżymi owocami.'
      ] 
    },
    { 
      name: 'Nachosy Pełnoziarniste (400 kcal)', 
      icon: 'assets/nachos.jpg', 
      ingredients: [
        'Tortille pełnoziarniste (500 kcal/100g)', 
        'Ser topiący się (300 kcal/100g)', 
        'Warzywa', 
        'Sos pomidorowy z czarnej fasoli'
      ],
      instructions: [
        '1. Pokrój tortille i upiecz.',
        '2. Posyp serem, dodaj warzywa i polej sosem.'
      ] 
    },
    { 
      name: 'Pączek Pełnoziarnisty (250 kcal/sztuka)', 
      icon: 'assets/wholegraindonut.jpg', 
      ingredients: [
        'Pączek pełnoziarnisty (150 kcal/sztuka)', 
        'Polewa owocowa (50 kcal/sztuka)', 
        'Orzechy (50 kcal/sztuka)'
      ],
      instructions: [
        '1. Podgrzej pączek.',
        '2. Polej polewą owocową i posyp orzechami.'
      ] 
    },
    { 
      name: 'Woda Gazowana z Owocami (0 kcal)', 
      icon: 'assets/sparklingwaterwithfruit.jpg', 
      ingredients: [
        'Woda gazowana', 
        'Owoce lub zioła'
      ],
      instructions: [
        '1. Dodaj owoce lub zioła do wody gazowanej.',
        '2. Zamieszaj i podawaj schłodzone.'
      ] 
    },
    { 
      name: 'Pieczone Ziemniaki (400 kcal)', 
      icon: 'assets/cheesypotatoes.jpg', 
      ingredients: [
        'Ziemniaki (77 kcal/100g)', 
        'Ser pleśniowy (400 kcal/100g)', 
        'Świeże zioła'
      ],
      instructions: [
        '1. Pokrój ziemniaki i upiecz.',
        '2. Posyp startym serem pleśniowym i świeżymi ziołami.'
      ] 
    },
    { 
      name: 'Smoothie Mleczne z Owocami (300 kcal)', 
      icon: 'assets/MilkSmoothiewithFruit.jpg', 
      ingredients: [
        'Mleko (42 kcal/100g)', 
        'Owoce', 
        'Jogurt naturalny'
      ],
      instructions: [
        '1. Włóż składniki do blendera.',
        '2. Blenduj do uzyskania gładkiego smoothie.'
      ] 
    },
    { 
      name: 'Frytki z Batatów (500 kcal)', 
      icon: 'assets/Sweetpotatofries.jpg', 
      ingredients: [
        'Frytki z batatów (365 kcal/100g)', 
        'Sos jogurtowy (300 kcal/100g)', 
        'Bekon z indyka (42 kcal/100g)'
      ],
      instructions: [
        '1. Piecz frytki z batatów.',
        '2. Podawaj z sosem jogurtowym i chrupiącym bekonem z indyka.'
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

  closeAllLists() {
    this.isOpen.forEach((value, index) => {
      this.isOpen[index] = false;
    });
  }
  

}
