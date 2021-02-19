package backend.demo.controller;



import backend.demo.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import backend.demo.service.ProductService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/products") //get all countries
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok().body(productService.getAllProduct());
    }


    @GetMapping("/products/{id}") //get country by id
    public ResponseEntity<Product> getProductById(@PathVariable long id){
        return ResponseEntity.ok().body(productService.getProductById(id));
    }

    @PostMapping("/products") // create a country
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        return ResponseEntity.ok().body(this.productService.createProduct(product));
    }

    @PutMapping("/products/{id}") //update a selected country
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product product){
        product.setId(id);
        return ResponseEntity.ok().body(this.productService.updateProduct(product));
    }

    @DeleteMapping("/products/{id}") // delete a selected country
    public HttpStatus deleteProduct(@PathVariable long id){
        this.productService.deleteProduct(id);
        return HttpStatus.OK;
    }


}
