import server from "./src/app";
import sequelize from "./src/db";
import createServices from "./src/controllers/services/createServices"; // Asegúrate de que la ruta sea correcta

const PORT = 3001;

async function startServer() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');

    await createServices(); 
    console.log('Services created');

    server.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();