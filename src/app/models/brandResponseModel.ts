import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponseMofel extends ResponseModel{
    data:Brand[]
}