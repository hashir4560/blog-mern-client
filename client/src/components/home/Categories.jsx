import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


const Categories=()=>{
    return(
        <>
        <Button> Create Blog</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Music</TableCell>
                </TableRow>
            </TableBody>

        </Table>
        </>

    )

}
export default Categories;