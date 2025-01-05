// Import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Associations
// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Product belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Tag belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
