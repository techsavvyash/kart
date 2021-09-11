import React from "react";

import { ProdTable, KartContainer, ColHeading, 
         TableRow, TableItem, KartHeading, CheckOutBtn } from "./KartElements";

const Kart = () => {
    return (
        <KartContainer>
            <KartHeading> Your order Summary is given below </KartHeading>
            <ProdTable>
                <TableRow>
                    <ColHeading>Item</ColHeading>
                    <ColHeading>Qty</ColHeading>
                    <ColHeading>Price</ColHeading>
                    <ColHeading>Total</ColHeading>
                </TableRow>
                
                <TableRow>
                    <TableItem> Samsung Galaxy S21+ (Coral Blue) | 12GB </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem> Rs. 750/- </TableItem>
                    <TableItem> Rs. 1500/- </TableItem>
                </TableRow>
                
                <TableRow>
                    <TableItem> Samsung Galaxy S21+ (Coral Blue) | 12GB </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem> Rs. 750/- </TableItem>
                    <TableItem> Rs. 1500/- </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem> Samsung Galaxy S21+ (Coral Blue) | 12GB </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem> Rs. 750/- </TableItem>
                    <TableItem> Rs. 1500/- </TableItem>
                </TableRow>
                <TableRow>
                     <TableItem> Samsung Galaxy S21+ (Coral Blue) | 12GB </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem> Rs. 750/- </TableItem>
                    <TableItem> Rs. 1500/- </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem> Samsung Galaxy S21+ (Coral Blue) | 12GB </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem> Rs. 750/- </TableItem>
                    <TableItem> Rs. 1500/- </TableItem>
                </TableRow> 
                
                <TableRow>
                    <TableItem> Total Qty </TableItem>
                    <TableItem> 2 </TableItem>
                    <TableItem>Grand Total: </TableItem>
                    <TableItem> Rs. 150000/-</TableItem>
                </TableRow>
            </ProdTable>
            <CheckOutBtn> Check Out </CheckOutBtn> 
        </KartContainer>
    )
}

export default Kart ;