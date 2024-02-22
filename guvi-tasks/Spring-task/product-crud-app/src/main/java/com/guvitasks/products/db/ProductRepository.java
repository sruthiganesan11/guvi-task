package com.guvitasks.products.db;
import com.guvitasks.products.domain.Products;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Products,Integer> {
}
