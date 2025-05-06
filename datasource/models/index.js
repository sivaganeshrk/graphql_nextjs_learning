import { Author } from "./author.js";
import { Book } from "./book.js";

Author.hasMany(Book, {
  foreignKey: "author_id",
  as: "books",
  onDelete: "CASCADE",
});
Book.belongsTo(Author, { foreignKey: "author_id", as: "author" });

export { Author, Book };
