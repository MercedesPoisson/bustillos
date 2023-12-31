export interface Apartments {
  id_apartment: number | any;
  ap_number: number | any;
  title: string | any;
  floor: string | any;
  room_number: number | any;
  bath_number: number | any;
  bed_number: number | any;
  sofabed_number: number | any;
  room_one_bed: string | any;
  room_two_bed: string | any;
  room_three_bed: string | any;
  estar_bed: string | any;
  property_type: string | any;
  description: string | any;
  price_per_night: number | any;
  images: string[] | any;
  is_active: boolean | any;
  max_guests: number | any;
  min_nights: number | any;
  weekly_discount: boolean | any;
  monthly_discount: boolean | any;
  allow_pets: boolean | any;
  accessibility: boolean | any;
  private_access: boolean | any;
  services: Services[] | any;
}

export interface Services {
    id_service: number | any;
    name: string | any;
    }

export interface Prices {
  id_price: number
    id_apartment: number
    title: string
    price_per_night_pesos: number
    price_per_night_dolar: number
    season: string
}

export interface Guests {
  pax_name: string
  pax_surname: string
  pax_dni: string
  id_rent: number
}