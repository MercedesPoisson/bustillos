import server from "./src/app";
import sequelize from "./src/db";

const PORT = 3001;

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
});
