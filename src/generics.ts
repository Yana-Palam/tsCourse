//Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

//------------------------------------
//Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType.
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "position">,
  bottom: Pick<AllType, "color" | "weight">
): AllType {
  return {
    name: top.name,
    position: top.position,
    color: bottom.color,
    weight: bottom.weight,
  };
}
//-----------------------------------------
//Вкажіть дженерики для функції об'єднання об'єктів.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}
//-----------------------------------------
//Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.
interface IProps {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
