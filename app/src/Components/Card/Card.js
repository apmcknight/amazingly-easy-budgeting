import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

export default function Card({ budgetItem }) {
    return (
        <div>
            {budgetItem.map(budgetItem => (
                 <a key={budgetItem.id} href="/budget-item">
                 <Pane
                 elevation={2}
                 float="left"
                 width={345}
                 height={120}
                 margin={25}
                 padding={30}
                 display="flex"
                 justifyContent="center"
                 alignItems="flex-start"
                 flexDirection="column"
                 >
                     <Heading size={800}>${budgetItem.amount}</Heading>
                     <Heading style={{marginTop: "10px"}} size={500}>{budgetItem.name}</Heading>
                 </Pane>
             </a>
            ))}
        </div>
    );
}