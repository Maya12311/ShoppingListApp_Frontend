export interface Product{
    productId: number;
    productName: string;
    amount: number;
    gramMl: number;
    priority: '-1';
    shoppingLocation: string; 
    todo: boolean;
    productCreatedOn: Date; 
    alarmDate: Date;

}