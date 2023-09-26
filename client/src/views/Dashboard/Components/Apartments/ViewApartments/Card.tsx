
interface CardProps {
    id_apartment: number;
    title: string;
    price: number;
    images: string[];
    max_guests: number;
    weekly_discount: boolean;
    monthly_discount: boolean;
    allow_pets: boolean;
    accessibility: boolean;
    private_access: boolean;
    services: string[];
}


function Card() {
    return (
        <div>

        </div>
    )
}
export default Card;