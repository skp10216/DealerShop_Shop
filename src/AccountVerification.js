import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Chip,
  TextField ,
  Autocomplete 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import CommonLayout from './CommonLayout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ListIcon from '@mui/icons-material/List';
import CollectTable from './CollectTable';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function AccountVerification() {
  const navigate = useNavigate();
  const [price, setPrice] = useState('');
  const [acountName, setAcountName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneInfo, setPhoneInfo] = useState('');
  
  const bankList =  ['카카오뱅크', '농협', '국민은행','신한은행','우리은행','IBK기업','하나은행','대구은행'];

  const handleSettingsClick = () => {
    // MainPage에서의 환경설정 기능
    console.log('Main Page Setting Click');
  };

  const handleAccountVerification = () => {
    navigate('/ReceiptConfirm');
  };


  return (
    <div>
      <CommonLayout
        title="계좌번호 인증"
        icon={<ArrowBackIcon onClick={() => navigate(-1)} />}
        onSettingsClick={handleSettingsClick}
      >
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <nav aria-label="main Purchase list">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddCardIcon color="warning" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="입금 받으실 계좌번호를 입력해주세요." />
                </ListItemButton>
              </ListItem>
              <ListItem>
              <Autocomplete
                disablePortal
                id="combo-box-bank"
                options={bankList}
                sx={{ width: '100%' }}
                onChange={(event, newValue) => {
                }}
                renderInput={(params) => (
                  <TextField {...params} label="은행 선택" />
                )}
              />
            </ListItem>
            <ListItem>
                <TextField
                  label="계좌전호 입력"
                  placeholder="'-'없이 숫자만 입력"
                  value={price}
                  fullWidth // 전체 너비를 사용하도록 설정
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="예금주 입력"
                  placeholder="예금주를 정확히 입력해주세요"
                  value={acountName}
                  fullWidth // 전체 너비를 사용하도록 설정
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="전화번호 입력"
                  placeholder="전화번호를 정확히 입력해주세요."
                  value={phone}
                  fullWidth // 전체 너비를 사용하도록 설정
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="모델 정보 입력"
                  placeholder="ex) 갤럭시 S22 울트라 512G"
                  value={phoneInfo}
                  fullWidth // 전체 너비를 사용하도록 설정
                />
              </ListItem>
          
            </List>
          </nav>
        </Box>
        <Box position="fixed" bottom={0} left={0} right={0}>
          <Button
            variant="contained"
            color="warning"
            size="large"
            fullWidth
            onClick={handleAccountVerification}
          >
            입력하고 다음
          </Button>
        </Box>
      </CommonLayout>
    </div>
  );
}
