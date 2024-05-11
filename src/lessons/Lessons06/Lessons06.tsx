import { log } from "console";

function Lesson06() {
  // Типизация строк - string
  let username: string = "Tom";
  console.log(username);

  username = "2";
  console.log(username);

  const message: string = `Hello, ${username}`;

  // Типизация чисел - number
  let luckyNumber: number = 23;
  luckyNumber = 24.5;

  // Типизация boolean - boolean
  let isAdmin: boolean = true;
  isAdmin = false;

  // Типизация null and undefined
  let emptyVar: null = null;

  let exampleUnd: undefined = undefined;

  // Типизация массивов
  const colors: string[] = ["red", "green", "black"];
  colors.push("blue");
  colors[0] = "Grey";

  // автоматическое определеие типа
  const numbersArray = [3, 5, 4];
  console.log(numbersArray);

  // тип tupel (кортеж)
  const fruits: [string, number, string] = ["apple", 3, "grape"];

  // Типизация функций
  // Функция не возвращает значение
  const showMessage = (): void => {
    console.log("Hi");
  };
  showMessage();

  // типизация функции с параметрами
  const showMessageWithName = (
    age: number,
    firstName: string = "Tom"
  ): void => {
    console.log(`Hello ${firstName} ${age}`);
  };
  showMessageWithName(24);

  // типизация функции, которая возвращает значение
  //const showMessageWithReturnName = (
  //firstName: string = "Tom",
  //age: number
  //): string => {
  //return `Hello ${firstName} ${age}`;
  //};

  const showMessageWithReturnName = (
    firstName: string = "Tom",
    age: number
  ): [string, number] => {
    //const userData: [string, number] = [firstName, age];
    return [firstName, age];
  };
  console.log(showMessageWithReturnName("Bob", 45));

  // Тип any
  let city: any = 23;
  city = "Berlin";

  // Типизация обьектов с помощью interface и type
  //interface
  interface User {
    name: string;
    age: number;
  }

  interface User {
    job: string;
  }
  const userData: User = { name: "Mary", age: 32, job: "developer" };
  console.log(userData);

  interface Admin extends User {
    isAdmin: boolean;
  }
  const adminData: Admin = {
    name: "John",
    age: 45,
    job: "developer",
    isAdmin: false,
  };

// type
type Animal = {
  name: string,
  weight?: number // необязательный параметр
}

const animal: Animal = {
  name: 'Lion',
  // weight: 200
}

type NewAnimal = Animal & {country:string}

const newAnimal: NewAnimal = {
  name: 'Zebra',
  weight: 150,
  country: 'Afrika'
}

type CustomType = string | number;
let number: CustomType = '23';
number = 'Number1';

  return <div>Lesson06 - {message}</div>;
}

export default Lesson06;
