import { useEffect, useState } from "react"
import { getAllBooks } from "../services/book.service"
import { bookType } from "../types/book.types"
import BookCard from "./BookCard"
import { LinearProgress } from "@mui/material"


export default function OurBooks() {
    const [books, setBooks] = useState<bookType[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const books = await getAllBooks();
                setBooks(books);
            } catch (error) {
                console.log("not load books")    
            }
        };
    
        fetchData();
    }, []);

    //from teacher

    // useEffect(() => {
    //     async () => {
    //         try {
    //             const books = await getAllBooks()
    //             setBooks(books)
    //         } catch (error) {
    //         }
    //    }
    // }, [])

    return <>
<div style={{ paddingTop: '20px', paddingBottom: '120px' }}>
            {books ? (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    {books.map((book, index) => (
                        <div key={book.bookId} >
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            ) : (
                <LinearProgress />
            )}
        </div>
  
    </>

}