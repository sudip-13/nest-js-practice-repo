export interface IQuery{
    index():string | Promise<string>;
}
type Nullable<T> =T |null