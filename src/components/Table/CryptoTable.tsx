import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th } from '@chakra-ui/react';

export const CryptoTable = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Criptomoneda</Th>
        <Th>Precio</Th>
        <Th isNumeric>Capitalizacion</Th>
        <Th>24h</Th>
      </Tr>
    </Thead>
    <Tbody />
    <Tfoot>
      <Tr />
    </Tfoot>
  </Table>
);
