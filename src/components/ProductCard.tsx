import React, { CSSProperties } from 'react'

import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductContext } from '../context/product.contex'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers } from '../interfaces/interfaces'

export interface Props {
  product: Product,
  // children?: ReactElement | ReactElement[],
  children: (args: ProductCardHandlers) => JSX.Element,
  className?: string,
  style?: CSSProperties,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { Provider } = ProductContext
  const { counter, increaseBy, isMaxCountReached, reset, maxCount }
   = useProduct({ onChange, product, value, initialValues })
  
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
        <div 
          className={`${styles.productCard} ${className}` }
          style={style}
        >
            { 
              children({
                count: counter,
                isMaxCountReached,
                maxCount: maxCount,
                product,
                increaseBy,
                reset
              }) 
            }
        </div>
    </Provider>
  )
}
