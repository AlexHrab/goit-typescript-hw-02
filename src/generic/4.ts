/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// done

interface PageComponent {
  title: string;
}

class Component<T extends PageComponent> {
  constructor(public props: T) {}
}

class Page extends Component<PageComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
