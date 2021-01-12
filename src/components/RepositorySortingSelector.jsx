import React, { useState } from 'react';

import { Menu, Button } from 'react-native-paper';

const RepositorySortingSelector = ({ order, setOrder }) => {
  const [visible, setVisible] = useState(false);

  const onPress = (status) => {
    setVisible(false);
    setOrder(status);
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
        items.map(
          item =>
            <Menu.Item key={item} icon={orders[item].icon} title={orders[item].label} onPress={orders[item].func} />
        )
      }
    </Menu>
  );
};

export default RepositorySortingSelector;