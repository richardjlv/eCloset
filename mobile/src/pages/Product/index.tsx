import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  ProductImageContainer,
  ProductImage,
  Category,
  Title,
  Price,
  ProductInfo,
  ProductDetails,
  Divider,
  SubTitle,
  DetailsTitle,
  DetailsInfo,
  ProductSizeContainer,
  ProductSize,
  ProductSizeText,
  AddButton,
  AddButtonText,
} from './styles';
import { ProductScreenRouteProp } from '~/routes/types';
import api from '~/services/api';
import { formatPrice } from '~/util/format';

interface Product {
  id: number
  name: string
  details: {
    [key: string]: string
  } | string[][]
  category: string
  image: {
    [key: string]: string
  }
  price: number
  formattedPrice: string
}

const Product: React.FC = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const [product, setProduct] = useState<Product>(null);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState({
    sizeP: false,
    sizeM: false,
    sizeG: false,
  });

  const { id } = route.params;

  async function loadProduct() {
    setLoading(true);

    const response = await api.get<Product>(`products/${id}`);

    const data: Product = {
      ...response.data,
      details: Object.entries(response.data.details),
      formattedPrice: formatPrice(response.data.price),
    };

    setProduct(data);
    setLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  function changeSelectedSize(size) {
    setSelectedSize({
      sizeP: size === 'P',
      sizeM: size === 'M',
      sizeG: size === 'G',
    });
  }

  return (
    <>
      <Container>
        <ProductImageContainer>
          <ProductImage source={{ uri: product?.image?.url }} />
        </ProductImageContainer>
        <ProductInfo>
          <Category>{product?.category}</Category>
          <Title>{product?.name}</Title>
          <Price>{product?.formattedPrice}</Price>

          <Divider />

          <SubTitle>TAMANHO</SubTitle>
          <ProductSizeContainer>
            <ProductSize selected={selectedSize.sizeP} onPress={() => changeSelectedSize('P')}>
              <ProductSizeText selected={selectedSize.sizeP}>P</ProductSizeText>
            </ProductSize>
            <ProductSize selected={selectedSize.sizeM} onPress={() => changeSelectedSize('M')}>
              <ProductSizeText selected={selectedSize.sizeM}>M</ProductSizeText>
            </ProductSize>
            <ProductSize selected={selectedSize.sizeG} onPress={() => changeSelectedSize('G')}>
              <ProductSizeText selected={selectedSize.sizeG}>G</ProductSizeText>
            </ProductSize>
          </ProductSizeContainer>

          <Divider />

          <ProductDetails>
            <SubTitle style={{ alignSelf: 'flex-start' }}>Detalhes</SubTitle>
            {product?.details.map((detail, index) => (
              <View key={index}>
                <DetailsTitle>{detail[0]}</DetailsTitle>
                <DetailsInfo>{detail[1]}</DetailsInfo>
              </View>
            ))}
          </ProductDetails>
        </ProductInfo>

      </Container>
      <AddButton>
        <AddButtonText>Adicionar</AddButtonText>
      </AddButton>
    </>
  );
};

export default Product;
