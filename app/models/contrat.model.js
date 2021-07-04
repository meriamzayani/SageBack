module.exports = (sequelize, Sequelize) => {
    const Contrat = sequelize.define("contrats", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nom: {
        type: Sequelize.STRING
      },
  
      type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      pourcentage: {
        type: Sequelize.FLOAT
      },
      plafond: {
        type: Sequelize.FLOAT
      }
     
    });
  
    return Contrat;
  };
  