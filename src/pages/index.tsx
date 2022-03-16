import React, { useEffect, useMemo, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link'
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'

import TableContainer from '../components/TableContainer'
import { SelectColumnFilter } from '../components/filters';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Button,
} from 'reactstrap';

import { getDatas} from '../API'

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter()
  useEffect(() => {
    const doFetch = async () => {
      getDatas()
       .then(data => {
         setData(data)
         console.log("datas: ", data)
        })
       .catch(err => console.log(err))
    };
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: '_id', // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'First Name',
        accessor: 'firstname',
      },
      {
        Header: 'Last Name',
        accessor: 'lastname',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Occupation',
        accessor: 'occupation',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Latitude',
        accessor: 'latitude',
      },
      {
        Header: 'Longitude',
        accessor: 'longitude',
      },
    ],
    []
  );
  
  const handleOpen = () => {
    router.push('/add')
  }

  return (
    <Container style={{ marginTop: 100 }}>
      <Button
        color="primary"
        outline
        onClick={() => handleOpen()}
        style={{margin: '10px'}}
      >
        Add Data
      </Button>
      <TableContainer 
        columns={columns}
        data={data}
      />
    </Container>
  );
};

export default Home;
