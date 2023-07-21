const Joi = require("joi");

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    next();
  };
}

const createMahasiswaSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  nama: Joi.string().required(),
  nim: Joi.string().required(),
  jurusan: Joi.string().required(),
});

const createBukuSchema = Joi.object({
  judul: Joi.string().required(),
  penulis: Joi.string().required(),
  kuantitas: Joi.number().required(),
  tempat: Joi.string().required(),
});

const createPeminjamSchema = Joi.object({
  bukuId: Joi.number().required(),
  mahasiswaId: Joi.number().required(),
  batasPengembalian: Joi.date().required(),
});

const updatePeminjamSchema = Joi.object({
    
})

module.exports = {
  validate,
  createMahasiswaSchema,
  createBukuSchema,
  createPeminjamSchema
};
