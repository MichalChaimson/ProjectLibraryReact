import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { bookType } from '../types/book.types';
import { getById } from '../services/book.service';
import { AuthorType } from '../types/author.types';
import { getByAuthorId } from '../services/author.service';
import { addRequest } from '../services/requeste.service';
import { selectUser } from '../redux/user/user.selectors';
import { ResponseeType } from '../types/response.types';
import { addResponse } from '../services/response.service';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

export default function ShowBook() {
    const [author, setAuthor] = useState<AuthorType | null>(null);
    const [book, setBook] = useState<bookType>();
    const user = useAppSelector(selectUser);
console.log(user)
    const [responseText, setResponseText] = useState<string>('');
    const { param } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookFromServer: bookType = await getById(param ? parseInt(param) : 1);
                setBook(bookFromServer);

                const authorFromServer: AuthorType = await getByAuthorId(bookFromServer?.authorId);
                setAuthor(authorFromServer);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, book?.responses);

    const imageSrc = book?.imagePath ? require(`../images/${book.imagePath}`) : null;

    const handleSaveBookClick = async () => {
        try {
            if (book) {
                const response = await addRequest(new Date(), book.bookId, user.user.id);

                if (response.id !== -1) {
                    alert('הספר נשמר לך ל-3 ימים, גש לספריה להשאילו');
                } else {
                    alert('בעיה בשמירה, נשלח אליך מייל הסבר!');

                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleResponseClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            if (book) {
                const response = await addResponse(new Date(), responseText, user.user.id, book.bookId);
                setResponseText("")
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    const ScrollableContent = () => {
        const containerStyle = {
            width: '20rem', // רוחב של הקונטיינר
            height: '30rem', // גובה של הקונטיינר
            overflow: 'auto', // הפעלת גלילה
            border: '1px solid #ccc', // גבולות לקונטיינר
            padding: '10px' // ריפוד לתוכן
            // ניתן להוסיף סגנונות נוספים לפי הצורך
        }
    }
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', height: '100%', paddingBottom: '200px', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CardContent sx={{ flex: '1', textAlign: 'right' }}>
                    <div style={{ width: "100%" }} >
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 5, fontSize: '3rem' }}>
                            {book?.bookName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2, nb: 5, fontSize: '2.5rem' }}>
                            {author?.authorName}
                        </Typography>
                        <div style={{ paddingLeft: "800px" }}>
                            <div style={{ overflow: "scroll", height: "200px", width: "500px", fontSize: "large" }}>
                                {book?.description}
                            </div>
                        </div>
                    </div>
                    <Box sx={{ mt: 5 }}>
                        <Button variant="contained" size="large" onClick={handleSaveBookClick}>אני רוצה לשמר לי את הספר</Button>
                        <div style={{paddingTop:"20px"}}>
                            <Link to="/home/About">?לשמור על ספר" מה זה אומר"</Link>
                        </div>
                    </Box >
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 5, ml: 5, fontSize: '2.5rem' }}>
                        {"---הקוראים שלנו מגיבים"}
                    </Typography>
                    <div style={{ width: "50%", marginTop: "50px", textAlign: "center", marginLeft: "800px" }}  >
                        {book?.responses.map((response: ResponseeType, index) => (
                            <Typography key={index} gutterBottom variant="body1" sx={{ border: "1px black solid", height: "60px", width: "100%", fontWeight: 'bold', fontSize: '1rem' }}>
                                {"\"" + response.description + "\""}
                                <br />
                                {"תאריך תגובה: "}
                                {response.date.toString().slice(0, 10)}
                            </Typography>
                        ))}
                        <Box sx={{ mt: 5, display: 'flex', alignItems: 'right', justifyContent: 'flex-end' }}>
                            <Button variant="contained" size="large" onClick={handleResponseClick} sx={{ mr: 2 }}>שליחה</Button>
                            <TextField label="התגובה שלך...." variant="outlined" sx={{ mr: 10 }} value={responseText} onChange={(e) => setResponseText(e.target.value)} />
                        </Box>

                    </div>
                </CardContent>
                <div style={{ paddingRight: "100px" }}>
                    <img src={imageSrc} alt="תמונה" style={{ width: '400px', height: '500px', objectFit: 'cover', alignSelf: 'flex-start' }} />
                </div>

            </div >
        </Card >
    );

}
