import {
  Button,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMenu } from "../../../../Hooks/useMenu";
export default function ManageMenu() {
  const { menu, deleteMenu } = useMenu();
  return (
    <>
      <Container sx={{ my: 3 }}>
        <Typography variant="h3">Manage menu</Typography>
        <Divider />
        <TableContainer>
          {" "}
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
