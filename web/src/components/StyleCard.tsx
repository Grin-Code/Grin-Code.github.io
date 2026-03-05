import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

const CardStyling = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

interface StyledCardProps 
{ 
    onFocus: () => void;
    onBlur: () => void; 
    tabIndex: number;
    cardData: { img: string; tag: string; title: string; description: string;};
    focusedCardIndex: number | null;
    hasMedia: boolean;
};

export default  function StyledCard(props: StyledCardProps){
    const {onFocus, onBlur, tabIndex, cardData, focusedCardIndex, hasMedia} = props;

    return(
        <CardStyling
        variant="outlined"
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
        >
            {hasMedia?
                <CardMedia
                component="img"
                image={cardData.img}
                sx={{
                    aspectRatio: '16 / 9',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
                /> :
                <></>
            }
            <StyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                    {cardData.tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {cardData.title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {cardData.description}
                </StyledTypography>
            </StyledCardContent>
        </CardStyling>
    );
}
