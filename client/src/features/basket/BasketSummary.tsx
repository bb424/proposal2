import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";

export default function BasketSummary() {
    const {basket} = useStoreContext();
    var subtotal:number = 0;
    var deliveryFee:number = 1599; //$15.99

    //Check to see if the basket is empty, if not return the subtotal
    // This can be rewritten as const subtotal = basket?... ?? 0
    if(!basket){
        subtotal=0;
    }
    else{
        subtotal = basket?.items.reduce((sum, item) => sum + (item.price*item.quantity), 0);
    }

    //Check to see if the subtotal is greater than $100, if so shipping is free
    // This can be rewritten as const deliveryFee = subtotal > 10000 ? 0 : 1499
    if(subtotal > 10000) deliveryFee = 0;
    
    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}