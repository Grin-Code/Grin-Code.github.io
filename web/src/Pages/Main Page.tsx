import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardData from '../Data/CardData.json';
import Search from '../components/Search';
import StyledCard from '../components/StyleCard';



export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  //const handleClick = () => {
  //  console.info('You clicked the filter chip.');
  //};

    const cardData = CardData.CardData;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <>
        <Typography variant="h1" gutterBottom>
            Dylan Burgess's portfolio
        </Typography>
        <Typography>The previous work created by Dylan burgess solo or as a team</Typography>
      </>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
        {/*<Chip onClick={handleClick} size="medium" label="All categories" />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Software"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Games"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Design"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />*/}
        </Box>   
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <StyledCard  onFocus={() => handleFocus(0)} onBlur={handleBlur} tabIndex={0} cardData={cardData[0]} focusedCardIndex={focusedCardIndex} hasMedia={true}/>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
           <StyledCard  onFocus={() => handleFocus(1)} onBlur={handleBlur} tabIndex={0} cardData={cardData[1]} focusedCardIndex={focusedCardIndex} hasMedia={true}/>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <StyledCard  onFocus={() => handleFocus(2)} onBlur={handleBlur} tabIndex={0} cardData={cardData[2]} focusedCardIndex={focusedCardIndex} hasMedia={true}/>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
             <StyledCard  onFocus={() => handleFocus(3)} onBlur={handleBlur} tabIndex={0} cardData={cardData[3]} focusedCardIndex={focusedCardIndex} hasMedia={true}/>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
           <StyledCard  onFocus={() => handleFocus(4)} onBlur={handleBlur} tabIndex={0} cardData={cardData[4]} focusedCardIndex={focusedCardIndex} hasMedia={true}/>
        </Grid>
      </Grid>
    </Box>
  );
}
