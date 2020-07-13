import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  Title,
  Price,
  Category,
  ProductDetails,
  FilterButton,
  FilterText,
  FilterContainer,
  FilterOptionsButton,
  FilterOptionsText,
  FilterType,
  Divider,
} from './styles';
import api from '~/services/api';
import { colors } from '~/styles/theme';
import { formatPrice } from '~/util/format';

interface Product {
  id: number
  name: string
  details: {
    [key: string]: string
  }
  category: {
    name: string
  }
  image: {
    url: string
    path: string
  }
  price: number
  priceFormatted?: string
}

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [filter, setFilter] = useState('');
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const { navigate } = useNavigation();

  async function loadProducts(category: string) {
    setLoading(true);
    const response = await api.get<Product[]>(`products?category=${category}`);

    const data = response.data.map((product: Product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(data);

    if (categories.length === 0) {
      const { data: dataCategories } = await api.get<string[]>('categories');
      setCategories(dataCategories);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadProducts('');
  }, []);

  function navigateToProduct(id: number) {
    setFilterIsOpen(false);
    navigate('Product', { id });
  }

  function handleFilter(category: string) {
    setFilter(category);
    setFilterIsOpen(false);
    loadProducts(category);
  }

  function handleOpenFilter() {
    setFilterIsOpen(!filterIsOpen);
  }

  return (
    <Container>
      <FilterButton onPress={handleOpenFilter}>
        <FilterText>Filtrar</FilterText>
      </FilterButton>
      {filterIsOpen
        && (
          <FilterContainer filterIsOpen={filterIsOpen}>
            <FilterType>Categorias</FilterType>
            <Divider />
            <FilterOptionsButton selected={filter === ''} onPress={() => handleFilter('')}>
              <FilterOptionsText selected={filter === ''}>Tudo</FilterOptionsText>
            </FilterOptionsButton>
            {categories.map((category, index) => (
              <FilterOptionsButton selected={filter === category} key={String(index)} onPress={() => handleFilter(category)}>
                <FilterOptionsText selected={filter === category}>{category}</FilterOptionsText>
              </FilterOptionsButton>
            ))}
          </FilterContainer>
        )}
      <ProductList
        refreshing={loading}
        onRefresh={loadProducts}
        vertical
        data={products}
        flexBasis={0}
        numColumns={2}
        keyExtractor={(item: Product) => String(item.id)}
        renderItem={({ item }: { item: Product }) => (
          <>
            <ProductItem onPress={() => navigateToProduct(item.id)}>
              <ProductImage source={{ uri: item.image?.url }} />
              <ProductDetails>
                <Category>{item.category.name}</Category>
                <Title>{item.name}</Title>
                <Price>{item.priceFormatted}</Price>
              </ProductDetails>
            </ProductItem>
          </>
        )}
      />
    </Container>
  );
};

export default Dashboard;
