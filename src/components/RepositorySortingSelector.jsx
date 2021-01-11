import React, { useState } from 'react';

import { Menu, Button } from 'react-native-paper';

const RepositorySortingSelector = () => {
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState("latest");

  const onPress = (status) => {
    setOrder(status);
    setVisible(false);
  };

  const orders = {
    "latest": {
      label: "Latest repositories",
      func: () => onPress('latest'),
      icon: 'calendar-range'
    },
    "descending": {
      label: "By rating descending",
      func: () => onPress('descending'),
      icon: 'sort-descending'
    },
    "ascending": {
      label: "By rating ascending",
      func: () => onPress('ascending'),
      icon: 'sort-ascending'
    }
  };

  const items = Object.keys(orders);
  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <Button icon={orders[order].icon} onPress={() => setVisible(true)}>
          sort
        </Button>

      }
    >
      {
        items.map(item =>
          <Menu.Item icon={orders[item].icon} key={item} title={orders[item].label} onPress={orders[item].func} />
        )
      }
    </Menu>
  );
};

export default RepositorySortingSelector;