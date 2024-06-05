import { Vendor } from "./Vendor"

export class Regulation {
    regulation_id !: number
    regulation_name !: string
    regulation_description !: string
    regulation_frequency !: string
    regulation_issued_date !: string
    file_path !: string
    file_name !: string
    file !: File
    vendor !: Vendor ;

}