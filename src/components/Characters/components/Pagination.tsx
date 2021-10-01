import { DataGrid, GridColDef, GridRenderEditCellParams } from '@mui/x-data-grid';
import { escapeRegExp } from '../functions/escapeRegExp';
import { useEffect, useState } from 'react';
import { QuickSearchToolbar } from './Search';
import { image } from '../functions/image';
import { Button } from '@material-ui/core';
import { ICharacter } from '../Models/Character';
import '../Characters.css';

interface IProps {
  characters: ICharacter[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  rowCount: number;
  openMoreInformation: (char: ICharacter) => void;
}

export const Pagination: React.FC<IProps> = ({characters, setPage, loading, rowCount, openMoreInformation}): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState<ICharacter[]>([]);

  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: `image`, headerName: 'Image', width: 100,
      renderCell : (params) => {; return image(params.row.image, params.row.name)},
      align: 'center',
      sortable: false,
    },
    {field: 'name', headerName: 'Name', width: 180},
    {field: 'status', headerName: 'Status', width: 130},
    {field: 'origin', headerName: 'Origin', width: 300,
      renderCell: (params) => `${params.row.origin.name}`
    },
    {field: 'location', headerName: 'Location', width: 300,
      renderCell: (params) => `${params.row.location.name}`
    },
    {field: 'species', headerName: 'Species', width: 130},
    {field: 'gender', headerName: 'Gender', width: 130},
    {field: `info`, headerName: 'Info', width: 90,
      renderCell : (params: GridRenderEditCellParams) => <Button 
                                                            onClick={() => openMoreInformation(params.row)} 
                                                            color='primary' 
                                                            variant='contained'>Info</Button>,
      align: 'center',
      sortable: false,
    },
  ];

  const requestSearch = (searchValue: string): void => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = characters.filter((row: any) => {
      return Object.keys(row).some((field: string) => searchRegex.test(row[field].toString()));
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(characters);
  },[characters]);

  return (
    <div className='pagination'>
      <div className='pagination__container'>
        <DataGrid
          pagination
          components={{ Toolbar: QuickSearchToolbar }}
          columns={columns} 
          rows={rows}
          pageSize={20}
          loading={loading}
          rowsPerPageOptions={[20]}
          rowCount={rowCount}
          paginationMode='server'
          onPageChange={(newPage) => setPage(newPage + 1)}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
          }}
        />
      </div>
    </div>
  );
};