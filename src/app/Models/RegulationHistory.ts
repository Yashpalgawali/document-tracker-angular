import { Regulation } from "./Regulation"
import { Vendor } from "./Vendor"

export class RegulationHistory {
    hist_regulation_id !: number
    hist_regulation_name!: string
    hist_regulation_description!: string
    hist_regulation_frequency!: string
    hist_regulation_issued_date!: string
    hist_file_path!: string
    hist_file_name!: string

    vendor : Vendor = new Vendor()
    regulation : Regulation = new Regulation()
}