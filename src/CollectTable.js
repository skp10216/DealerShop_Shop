import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, phone, status, grade, date) {
  return { name, phone, status, grade, date };
}

const rows = [
  createData(
    '서광필',
    '010-6876-7570',
    '수거',
    '갤럭시 22 512G',
    '2024-01-29-12:00'
  ),
  createData(
    '서광필',
    '010-6876-7570',
    '수거',
    '갤럭시 22 512G',
    '2024-01-29-12:00'
  ),
  createData(
    '서광필',
    '010-6876-7570',
    '수거',
    '갤럭시 22 512G',
    '2024-01-29-12:00'
  ),
  createData(
    '서광필',
    '010-6876-7570',
    '수거',
    '갤럭시 22 512G',
    '2024-01-29-12:00'
  ),
  createData(
    '서광필',
    '010-6876-7570',
    '수거',
    '갤럭시 22 512G',
    '2024-01-29-12:00'
  ),

  // ... 나머지 데이터
];

export default function CollectTable() {
  const navigate = useNavigate();
  const handlePurchaseClick = (row) => {
    navigate('/EnterIMEI'); // 이동할 경로
  };

  const handleCancelClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmCancel = () => {
    // 취소 확인 로직
    setOpenModal(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>이름</StyledTableCell>
            <StyledTableCell align="right">전화번호</StyledTableCell>
            <StyledTableCell align="right">상태</StyledTableCell>
            <StyledTableCell align="right">모델</StyledTableCell>
            <StyledTableCell align="right">등록일</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
