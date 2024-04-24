/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/
// done

interface KeyValuePair<V, K extends keyof V> {
  key: K;
  value: V;
}

export {};
