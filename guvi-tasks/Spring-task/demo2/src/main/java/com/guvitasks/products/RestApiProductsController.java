package com.guvitasks.products;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/products")
public class RestApiProductsController {
    private final ProductRepository productRepository;


    public RestApiProductsController(ProductRepository productRepository) {
        this.productRepository = productRepository;
        this.productRepository.save(new Products(1,"Pears",50.5,"Soap"));
        this.productRepository.save(new Products(2,"Sunrise",25.00,"Coffee"));
    }

    @GetMapping
    public Iterable<Products> getProducts() {
        return this.productRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<Products> getProductId(@PathVariable int id) {
        return this.productRepository.findById(id);
    }

    @PostMapping(value = "",consumes = "application/json")
    Products postProduct(@RequestBody Products products) {
        Products savedProducts = this.productRepository.save(products);
        return savedProducts;
    }

    @PutMapping(value = "/{id}",consumes = "application/json")
    ResponseEntity<Products> putProduct(@PathVariable int id, @RequestBody Products products) {
        boolean isProductExist = this.productRepository.existsById(id);

        if(isProductExist) {
            var productRepository = new ResponseEntity<Products>(this.productRepository.save(products), HttpStatus.OK);
            return productRepository;
        }else {
            var productRepository = new ResponseEntity<Products>(this.productRepository.save(products),HttpStatus.CREATED);
            return productRepository;
        }
    }

    @DeleteMapping("/{id}")
    void deleteProduct(@PathVariable int id) {
        this.productRepository.deleteById(id);
    }
}
