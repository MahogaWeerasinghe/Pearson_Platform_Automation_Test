package backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import  backend.demo.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}