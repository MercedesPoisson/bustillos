import Cloudinary from "cloudinary";

const cloudinary = Cloudinary.v2;
          
cloudinary.config({ 
  cloud_name: 'diorhiegf', 
  api_key: '629189645738161', 
  api_secret: 'FoJqIqo4hkf1iBV5YwZHWulytbg',
  secure: true 
});

export const imageUpdate = async (filePath: any) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "Bustillos"
    })
}

export const imageDestroy = async (id: string) => {
    return await cloudinary.uploader.destroy(id)
}