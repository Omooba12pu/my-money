import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const tableData = [
  { id: 1, investment: 'Tesouro Selic', broker: 'Easynvest', value: 1000 },
  { id: 2, investment: 'Ações ITSA4', broker: 'Clear', value: 750 },
  { id: 3, investment: 'Fundo Alaska', broker: 'BTG Pactual', value: 1200 },
];

const StyledContainer = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px 0;
`;

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const InvestmentsPage: React.FC = () => {
  return (
    <StyledContainer>
      <StyledPaper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Investimento</TableCell>
              <TableCell>Corretora</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.investment}</TableCell>
                <TableCell>{row.broker}</TableCell>
                <TableCell align="right">
                  {currencyFormatter.format(row.value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledPaper>
    </StyledContainer>
  );
};

export default InvestmentsPage;
