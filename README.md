# Nuupiot-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Kakomis

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'nuupiot-product-cart
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ reset, increaseBy, isMaxCountReached, count }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
        )
    }
</ProductCard>
```