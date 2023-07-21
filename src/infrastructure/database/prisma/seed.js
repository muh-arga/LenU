const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

async function main() {
  console.log(`Strat seeding ...`);

  const admin = await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      password: hash("admin123"),
      role: "admin",
      nama: "Admin LenU",
    },
  });

  console.log(`created admin with id ${admin.id}`);
  console.log(`Seeding finished`);
}

main()
  .then(async () => {
    await prisma.$disconnect;
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
    process.exit(1);
  });
