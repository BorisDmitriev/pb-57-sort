# Array Methode .sort

#### 1. In absteigender Reihenfolge sortieren
* Erstelle eine Variable namens `arr` und weise ihr ein Array mit Zahlen zu.
* Schreibe einen Code, der dieses Array in absteigender Reihenfolge sortiert (von oben nach unten).
* Gib das sortierte Array auf der Konsole aus.

```js
let arr = [5, 2, 1, -10, 8];

// ... dein Code zum Sortieren in absteigender Reihenfolge

console.log( arr ); // 8, 5, 2, 1, -10
```

#### 2. Wir haben ein Array namens `array`, das Strings beinhaltet. Wir möchten eine alphabetisch sortierte Kopie davon erstellen, aber `array` unverändert lassen.

* Erstelle eine Funktion `copySorted(arr)`, die eine solche Kopie zurückgibt.

```js
let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (keine Änderungen)
```
