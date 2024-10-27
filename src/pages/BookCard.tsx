import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { bookType } from '../types/book.types';
import { categoryType } from '../types/category.types';
import { statusType } from '../types/status.types';
import ShowBook from './ShowBookPage'
import ourBooks from './OurBooksPage'


type Props = {
  book: bookType 
}

export default function BookCard({ book }: Props) {

   const image = require(`../images/${book.imagePath}`);
  const handleCardClick = () => {
    window.location.href = `/home/ourBooks/ShowBook/${book.bookId}`;
  };
  return (
          <Card sx={{ display: 'flex', flexDirection: 'row-reverse',flex: '1 0 33%', maxWidth: 345 }} onClick={handleCardClick}>
        <CardActionArea>
          <CardContent sx={{ textAlign: 'right' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
            <img src={image} alt="תמונה" style={{ width: '250px', height: '350px' }} />
              <br />
              {book.bookName}
              <br />
              סטטוס ספר: 
              {statusType[book.status]}
              <br />
              {categoryType[book.category]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
