import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import backgroundImage from '../images/book-library-with-open-textbook_1150-5920.jpg'; // Replace with your actual image path
import { Box } from '@mui/material';


export default function About() {

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ mt: 10, fontFamily: 'Calibr',color:"maroon"}}>
          ---אז מי אנחנו
        </Typography>
        <Typography variant="h3" align="justify" textAlign="center" sx={{fontFamily: 'Calibr',color:"maroon"}}>
          האתר שלנו מקל על הלקוחות שלנו בחיפוש אחרי הספרים הכי חדישים בספריה בדרך הקלה ביותר
        </Typography>
        <Typography variant="h3" align="justify" textAlign="center" sx={{fontFamily: 'Calibr',color:"maroon"}}>
          הוא מספק ללקוח אפשרות לקרא תגובות ולהגיב על כל ספר שנמצא במאגר הספרים שלנו
        </Typography>
        <Typography variant="h3" align="justify" textAlign="center" sx={{fontFamily: 'Calibr',color:"maroon"}}>
          והכי חשוב הוא מאפשר ללקוח ל"תפוס" לו ספר מהספרייה מבלי לצאת מהבית
        </Typography>
        <Typography variant="h4" align="justify" textAlign="center" sx={{ mt: 7 , fontFamily: 'Calibr' ,mb:20 ,color:"maroon"}}>
          ?איך זה עובד
          <br />.
          כל לקוח רשום יכול לשמור לו עד 3 ספרים
          <br />
          כל שמירה תתבטל אוטומטית אחרי 3 ימים, אם באת לספריה להשאיל את הספר הספר יוגדר כמושאל ותצטרך להחזירו עד שבוע ימים
        </Typography>
      </Container>
    </Box>
  );
}




