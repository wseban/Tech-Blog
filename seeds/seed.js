const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');

const UserSeedData = require('./UserSeedData.json');
const PostSeedData = require('./PostSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of PostSeedData) {
   await Post.create({
      ...post,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit();
};

seedDatabase();
