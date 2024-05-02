db.products.insertMany([
  { _id: 'product1', sku: 'PROD001', name: 'Product 1', price: 50 },
  { _id: 'product2', sku: 'PROD002', name: 'Product 2', price: 25 },
  { _id: 'product3', sku: 'PROD003', name: 'Product 3', price: 30 },
  { _id: 'product4', sku: 'PROD004', name: 'Product 4', price: 20 }
]);

db.customers.insertMany([
  {
    _id: 'customer1',
    name: 'John Doe',
    email: 'john@example.com',
    orders: [
      {
        _id: 'order1',
        total_amount: 100,
        productLineItems: [
          { _id: 'item1', product_id: 'product1', quantity: 2 },
          { _id: 'item2', product_id: 'product2', quantity: 1 }
        ]
      },
      {
        _id: 'order2',
        total_amount: 50,
        productLineItems: [
          { _id: 'item3', product_id: 'product2', quantity: 1 }
        ]
      }
    ]
  },
  {
    _id: 'customer2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    orders: [
      {
        _id: 'order3',
        total_amount: 80,
        productLineItems: [
          { _id: 'item4', product_id: 'product1', quantity: 1 },
          { _id: 'item5', product_id: 'product3', quantity: 2 }
        ]
      }
    ]
  },
  {
    _id: 'customer3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    orders: [
      {
        _id: 'order4',
        total_amount: 120,
        productLineItems: [
          { _id: 'item6', product_id: 'product1', quantity: 3 },
          { _id: 'item7', product_id: 'product2', quantity: 2 },
          { _id: 'item8', product_id: 'product4', quantity: 1 }
        ]
      },
      {
        _id: 'order5',
        total_amount: 40,
        productLineItems: [
          { _id: 'item9', product_id: 'product4', quantity: 2 }
        ]
      }
    ]
  }
]);
