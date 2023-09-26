export interface Apartments {
    id_apartment: number
    // id_price: number
    ap_number: number
    title: string
    floor: number
    room_number: number
    bath_number: number
    bed_number: number
    sofabed_number: number
    room_one_bed: string
    room_two_bed: string
    room_three_bed:string
    estar_bed: string
    property_type: string
    description: string
    price_per_night: number
    images: string[]
    // rating?: number
    is_active: boolean
    max_guests: number
    min_nights:number
    weekly_discount: boolean
    monthly_discount: boolean
    allow_pets: boolean
    accessibility: boolean
    private_access: boolean
    services: Services[]
}

export interface Services {
    id: number
    name: string
    icon: string
}

export interface State {
    services: Services[],
    apartments: Apartments[],
    detail: Partial<Apartments>
    user: Partial<Users>
    favorites: Apartments[]
    rents: Rents[],
    price: Price[],
}

export interface Rents {
    id_rent: number
    id_user?: number
    name: string
    surname: string
    phone: string
    mail: string
    id_apartment: number
    start_date: Date
    end_date: Date
    guests_number: number
    adults_number: number
    kids_number: number
    babies_number: number
    amount: number
    pre_viaje: boolean
    total_amount: number
    senia: boolean
    senia_amount: number
    saldo: number    
    payment_status: boolean
    payment_date?: Date
    review_status: boolean
    creation_date: Date
    is_active: boolean
    source: string
    // bed_type
    room_one: string
    room_two: string
    room_three: string
    room_estar: string
}

export interface Users {
    id_user: string
    name?: string
    surname?: string
    documento: string
    email: string
    address?: string
    number?: number
    date?: Date
    gender?: 'Male' | 'Female' | 'Other'
    image?: string
    is_active: boolean
}

export interface Price {
    id_price: number
    id_apartment: number
    key_word: string
    guests_number: number
    price_per_night: number
    start_date: Date
    end_date: Date
}

export interface Action {
    type: string;
    payload: any;
}