module.exports = (sequelize, DataTypes) => {
  const SavedNews = sequelize.define("SavedNews", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  SavedNews.associate = (models) => {
    SavedNews.belongsTo(models.User, { foreignKey: "userId" });
  };

  return SavedNews;
};
