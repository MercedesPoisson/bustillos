import sequelize from "../../db";
import fs from 'fs';

async function createServices() {
    const { Services } = sequelize.models;
    try {
        const filePath = 'src/json/services.json';
        const fileData = await fs.promises.readFile(filePath, 'utf-8');
        const data: any[] = JSON.parse(fileData);
        
        // Usamos Promise.all() para esperar a todas las operaciones de findOrCreate()
        await Promise.all(data.map(async (service) => {
            await Services.findOrCreate({
                where: service,
                defaults: service
            });
        }));
        
        console.log('Services created successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

export default createServices;