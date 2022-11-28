import { Props as ProductCardPros } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";


export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardPros):JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}