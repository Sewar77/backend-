import {
  Button,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useMenu } from "../../../../Hooks/useMenu";
import AddMenuForm from "./AddMenuForm";
import { useState } from "react";
export default function ManageMenu() {
  const { menu, deleteMenu } = useMenu();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container sx={{ my: 3 }}>
        <Typography variant="h3">Manage menu</Typography>
        <Button
          variant="contained"
          sx={{ my: 3 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Cancel" : "Add New Item"}
        </Button>
        {isOpen && <AddMenuForm />}
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>number</TableCell>
                <TableCell>name</TableCell>
                <TableCell>description</TableCell>
                <TableCell>is publish</TableCell>
                <TableCell>price</TableCell>
                <TableCell>action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((item, idx) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      {item.is_publish ? "publish" : "not puclish"}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteMenu(item._id)}
                      >
                        Delete
                      </Button>
                      <Button variant="contained" color="warning">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
