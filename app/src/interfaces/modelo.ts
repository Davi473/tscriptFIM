import { Imprimivel } from "../utlis/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends Imprimivel, Comparavel<T>
{
  
}