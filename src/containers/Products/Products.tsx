import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IProduct } from '../../interfaces/IProducts';

interface IProductsProps{
    products: IProduct[];
}

export default class Products extends React.Component<IProductsProps, {}>{
    constructor(props:IProductsProps) {
        super(props);
    }
    render() {

        return <></>; 
    }
}