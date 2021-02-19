package backend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;



@SpringBootApplication
//@EnableSwagger2
public class DemoApplication {

    public static void main(String[] args) { // main method of program
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("Welcome To Countries !");
    }

    /*@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }*/

}
