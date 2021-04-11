import React, { useEffect, useState } from 'react';
import { Pane, Spinner } from 'evergreen-ui';


function LocalStorage() {   

  const [loading, setLoading] = useState(true);
  const [budgetItem] = useState([]);

  useEffect(() => {
    setLoading(false)
    localStorage.setItem("budgetItem", JSON.stringify(budgetItem));
  }, [budgetItem])

  if (loading) return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={650}>
      <Spinner style={{marginRight: "10px"}}/>
      We're crunching the numbers...
    </Pane>
  )
}

export default LocalStorage;
