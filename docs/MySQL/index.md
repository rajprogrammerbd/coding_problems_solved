# **MySQL Command Documentation Guide**

> In order to select a database, we can double click on it's name, or we can use the command **USE database_name** to select a database.

> If we want to select from a column, then we have to use this syntax **SELECT * or names_of_rows FROM columns_name**, for example **SELECT * from customers**.

> use **WHERE row_name = value** format to sort the list.

> use **ORDER BY row_name** to get data in order.

> use **--** command to make a comment.

> using **AS** keyword, we can define a return row name.

> using **DISTINCT** keyword, we can retrive all data which are not repeatedly comes multiple time. for example, **SELECT DISTINCT state FROM customers**.

> using **IN** operator, is a shorthand operator of **AND**, **OR** operator, for example, **SELECT * FROM customers WHERE state IN ("VA", "FL")**.

> using **BETWEEN** operator helps us to get value between two values, for example, **SELECT * FROM customers WHERE points BETWEEN 1000 AND 3000**.

> using **IS NULL** operator is to get the value which accociated with null, for example, **SELECT * FROM Customers WHERE phone IS NULL**.

> using **DESC** and **ASC** is to sort data in ascending and descending order.

> using **LIMIT** for limit the retrival data. for example **SELECT * FROM customers LIMIT 6 3**

> use of **INNER JOIN** examples are down below,

```
USE sql_store;

SELECT o.product_id, name
FROM order_items o
JOIN products p
 ON o.product_id = p.product_id
```

> use of ***USING*** cause can happen when two tables has the same name of match with, the above example is where we can use ***USING** clause. for ex

```
USE sql_store;

SELECT *
FROM products p
JOIN order_items oi
 USING (product_id);
```
