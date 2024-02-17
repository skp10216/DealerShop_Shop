import React from 'react';
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import { useNavigate } from 'react-router-dom';
import CommonLayout from './CommonLayout';

export default function ReceiptConfirm() {
  const navigate = useNavigate();

  const handleReceiptConfirm = () => {
    navigate('/main');
  };

  return (
    <div>
      <CommonLayout
        title="수거 최종 확인"
        icon={<ArrowBackIcon onClick={() => navigate(-1)} />}
      >
        <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <ScreenshotIcon color="warning" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="입력하신 정보가 맞는지 마지막으로 확인해주세요." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="신청자"
                secondary={<strong>서광필</strong>}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="전화번호"
                secondary={<strong>010-6876-7570</strong>}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="은행"
                secondary={<strong>국민은행</strong>}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="예금주"
                secondary={<strong>홍길동</strong>}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="계좌번호"
                secondary={<strong>014102-0406-9684</strong>}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="기기정보"
                secondary={<strong>갤럭시 S22 플러스</strong>}
              />
            </ListItem>                  
            <Divider />
          </List>
        </Box>
        <Box position="fixed" bottom={0} left={0} right={0}>
          <Button
            variant="contained"
            color="warning"
            size="large"
            fullWidth
            onClick={handleReceiptConfirm}
          >
            수거 완료하기
          </Button>
        </Box>
      </CommonLayout>
    </div>
  );
}
