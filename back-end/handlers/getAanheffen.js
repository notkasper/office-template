const { getConnection } = require('../db');
const asyncHandler = require('../middleware/async');

module.exports = asyncHandler(async (req, res) => {
  const aanheffen = await getConnection().models.aanhefs.findAll();

  res.status(200).send({ success: true, data: aanheffen });
});
