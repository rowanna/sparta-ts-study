"use strict";
// enum Role {
//   LIBRARIAN, // 사서
//   MEMBER, // 멤버
// }
// abstract class User {
//   constructor(public name: string, public age: number) {} // public : 접근제한자
//   abstract getRole(): Role; //
// }
// class Member extends User {
//   constructor(name: string, age: number) {
//     super(name, age)
//   }
//   getRole(): Role { // 반환타입이 Role이라는것을 명시
//     return Role.MEMBER;
//   }
// }
// class Librarian extends User {
//   constructor(name: string, age: number) {
//     super(name, age)
//   }
//   getRole(): Role {
//     return Role.LIBRARIAN;
//   }
// }
// class Book {
//   constructor(
//     public name: string,
//     public author: string,
//     public title: string,
//     public publishedDate: Date
//   ) {}
// }
// // 구조와 타입 정의 (어떤 메서드와 속성이 있어야 하는지 선언)
// interface RentManager {
//   getBooks(): Book[]; // 도서관에서 현재 도서 목록을 확인하는 함수
//   addBook(user: User, book: Book): void; // 사서가 도서관에서 새로운 도서를 입고할 때 호출하는 하수
//   removeBook(user: User, book: Book): void; // 사서가 도서관에서 도서를 폐기할 때 호출하는 함수
//   rentBook(user: Member, book: Book): void; // 사용자가 책을 빌릴 때 호출하는 함수
//   returnBook(user: Member, book: Book): void; // 사용자가 책을 반납할 때 호출하는 함수
// }
// class Library implements RentManager { // implements: 클래스가 특정 인터페이스를 구현한다는 것을 선언.(해당 인터페이스에서 정의한 모든 메서드와 속성을 반드시 구현해야함을 의미)
//   private books: Book[] = [];
//   // rentedBooks는 유저의 대여 이력을 관리해요!
//   private rentedBooks: Map<string, Book> = new Map<string, Book>();
//   getBooks(): Book[] {
//     // 깊은 복사를 하여 외부에서 books를 수정하는 것을 방지합니다.
//     return JSON.parse(JSON.stringify(this.books));
//   }
//   addBook(user: User, book: Book): void {
//     if (user.getRole() !== Role.LIBRARIAN) {
//       console.log("사서만 도서를 추가할 수 있습니다.");
//       return;
//     }
//     this.books.push(book);
//   }
//   removeBook(user: User, book: Book): void {
//     if (user.getRole() !== Role.LIBRARIAN) {
//       console.log("사서만 도서를 삭제할 수 있습니다.");
//       return;
//     }
//     const index = this.books.indexOf(book);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//     }
//   }
//   rentBook(user: User, book: Book): void {
//     if (user.getRole() !== Role.MEMBER) {
//       console.log("유저만 도서를 대여할 수 있습니다.");
//       return;
//     }
//     if (this.rentedBooks.has(user.name)) {
//       console.log(
//         `${user.name}님은 이미 다른 책을 대여중이라 빌릴 수 없습니다.`
//       );
//     } else {
//       this.rentedBooks.set(user.name, book);
//       console.log(`${user.name}님이 [${book.title}] 책을 빌렸습니다.`);
//     }
//   }
//   returnBook(user: User, book: Book): void {
//     if (user.getRole() !== Role.MEMBER) {
//       console.log("유저만 도서를 반납할 수 있습니다.");
//       return;
//     }
//     if (this.rentedBooks.get(user.name) === book) {
//       this.rentedBooks.delete(user.name);
//       console.log(`${user.name}님이 [${book.title}] 책을 반납했어요!`);
//     } else {
//       console.log(`${user.name}님은 [${book.title}] 책을 빌린적이 없어요!`);
//     }
//   }
// }
