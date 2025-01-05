const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// GET all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single product by its `id`
router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a product by its `id`
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedProduct[0]) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json({ message: "Product updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a product by its `id`
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedProduct) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
