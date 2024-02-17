import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import CommonLayout from './CommonLayout';

export default function MainPage() {
  const navigate = useNavigate();

  const handleDealerManagementClick = () => {
    navigate('/DealerShopListPage');
  };

  const handleSettingsClick = () => {
    console.log('Main Page Setting Click');
  };

  const handleDealerPurchaseClick = () => {
    navigate('/AccountVerification');
  };

  const handleDealerPurchaseListClick = () => {
    navigate('/DealerShopCollectList');
  };

  return (
    <div>
      <CommonLayout
        title="딜러마켓 (대리점 전용)"
        icon={<HomeIcon />}
        onSettingsClick={handleSettingsClick}
      >
        <Container>
          {/* 새로 추가된 영역 */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Card
              style={{
                margin: '10px',
                borderRadius: '20px',
                background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 152, 0, .3)',
                transition: 'transform 0.15s ease-in-out',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  padding="20px"
                  style={{ color: '#fff', fontWeight: 'bold' }}
                >
                  홍대점
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ color: '#fff' }}
                  padding="5px"
                >
                  매입: 1건
                </Typography>

              </CardContent>
            </Card>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            {/* 기존 버튼 영역 */}
            <Button
              variant="contained"
              color="warning"
              size="large"
              fullWidth
              style={{ marginBottom: '20px' }}
              onClick={handleDealerPurchaseClick}
            >
              수거하기
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="large"
              fullWidth
              onClick={handleDealerPurchaseListClick}
              style={{ marginBottom: '20px' }}
            >
              수거내역
            </Button>
          </Box>
        </Container>
      </CommonLayout>
    </div>
  );
}
