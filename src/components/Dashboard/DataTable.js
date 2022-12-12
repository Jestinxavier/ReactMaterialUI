import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Grid,
  styled,
  Card,
  useTheme,
  Button,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box mr={3}>
              <Avatar src={params.value.avatar} />
            </Box>
            <Stack>
              <Typography sx={{ display: "flex", justifyContent: "center",fontWeight: 600,fontSize: 14 }}>
                {params.value.username}
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center",fontSize: 14 }}>
                {params.value.username}
              </Typography>
            </Stack>
          </Box>
        );
      },
    },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 90,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
   
    {
      field: "Edit",
      headerName: "",
      width: 100,
    },
    {
        field: "status",
        headerName: "",
        width: 90,
      },
  ];

  const rows = [
    {
      id: 1,
      user: {
        username: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
      },
      description: "ss ss ddf description ",
      email: "Harry@gmail.com",
      status: "Active",
      Edit: "$120",
    },
  ];

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </>
  );
}
