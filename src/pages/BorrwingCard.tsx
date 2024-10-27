import React, { useState, useEffect } from "react";
import { BorrowingType } from "../types/borrowing.types";
import { getById } from "../services/book.service";
import BookCard from "./BookCard";
import { bookType } from "../types/book.types";
import { LinearProgress } from "@mui/material";

type Props = {
  borrowing: BorrowingType;
};

const BorrowingCard: React.FC<Props> = ({ borrowing }: Props) => {
  const [book, setBook] = useState<bookType | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        console.log(borrowing)
        console.log("before borrowing get book")
        const bookFromServer = await getById(borrowing.bookId);
        console.log("after borrowing get book")
        setBook(bookFromServer);
      } catch (error) {
        console.log("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [borrowing.bookId]);
  return (
    <div style={{ textAlign: 'center' ,border:'1px, solid, black'}}>
      <h3>תאריך לקיחה: {borrowing.dateTake.toString().slice(0, 10)}</h3>
      <br />
      {book ? (
        <BookCard book={book} />
      ) : (
        <LinearProgress />
      )}

    </div>
  );
};

export default BorrowingCard;
