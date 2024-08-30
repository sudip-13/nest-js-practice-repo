export interface IQuery {
    index(): string | Promise<string>;
}
