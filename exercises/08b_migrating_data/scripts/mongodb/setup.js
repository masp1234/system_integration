db.customers.drop();
db.products.drop();

db.createCollection('customers');
db.createCollection('products');

db.products.insertMany([
  { _id: 'product1', name: 'Product 1', price: 50 },
  { _id: 'product2', name: 'Product 2', price: 25 }
]);

db.customers.insertOne({
  _id: 'customer1',
  name: 'John Doe',
  email: 'john@example.com',
  orders: [
    {
      _id: 'order1',
      total_amount: 100,
      productLineItems: [
        {
          _id: 'item1',
          product_id: 'product1',
          quantity: 2
        },
        {
          _id: 'item2',
          product_id: 'product2',
          quantity: 1
        }
      ]
    },
    {
      _id: 'order2',
      total_amount: 50,
      productLineItems: [
        {
          _id: 'item3',
          product_id: 'product2',
          quantity: 1
        }
      ]
    }
  ]
});
