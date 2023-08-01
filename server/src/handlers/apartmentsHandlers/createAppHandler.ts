import { Request, Response, Express } from "express";
import createAppController from "../../controllers/apartmentControllers/createAppController";
import { ApartmentsAttributes } from "../../models/interfaces";
import formBodyCheck from "../../controllers/apartmentControllers/formBodyCheck";
import fs from "fs";
import { imageUpdate } from "../../utils/cloudinary";

const createAppHandler = async(req: Request, res: Response) => {
    console.log('Handling createAppHandler...');
    const apartmentsArray: string[] = [
        "id_apartment",
        "ap_number",
        "title",
        "floor",
        "room_number",
        "bath_number",
        "bed_number",
        "sofabed_number",
        "room_one_bed",
        "room_two_bed",
        "room_three_bed",
        "estar_bed",
        "property_type",
        "description",
        "price_per_night",
        // "images",
        "rating",
        "is_active",
        "max_guests",
        "min_nights",
        "weekly_discount",
        "monthly_discount",
        "allow_pets",
        "accessibility",
        "private_access",
    ]
    const result: string|boolean = formBodyCheck(apartmentsArray, req.body)
    console.log('formBodyCheck result:', result);
    const newApp = req.body as ApartmentsAttributes;
    console.log('newApp:', newApp);
    
    const multerArray = req.files as Express.Multer.File[];
    let pathsArray: string[] = [];
    if(multerArray?.length) {
        pathsArray = await Promise.all(multerArray.map(async(obj: Express.Multer.File) => {
            const uploadResult = await imageUpdate(obj.path);
            fs.unlink(obj.path, (err) => {
                if (err) {
                    console.error("Error deleting local file:", err);
                }
            });
            return uploadResult.url;
        }));
    }
    newApp.images = pathsArray

    try {
        if(result === true){
            const response = await createAppController(newApp)
            return res.status(200).json(response)
        }
        else throw new Error(`${result}`)
    } catch (error) {
        const errorMessage = (error as Error).message
        console.log(errorMessage);
        return res.status(400).send({error: errorMessage})
        
    }
}
export default createAppHandler;