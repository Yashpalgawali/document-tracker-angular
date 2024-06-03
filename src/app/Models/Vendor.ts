import { VendorType } from "./VendorType"

export class Vendor {

    vendor_id !: number
    vendor_name !: string
    vendor_email !: string
    vendor_contact !: string
    password !: string
    cnf_password !: string
    username !: string
    vendor_type !: VendorType
}