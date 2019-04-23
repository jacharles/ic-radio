package com.icradio.icradioserver.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.ServletContextAware;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.paths.RelativePathProvider;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SwaggerResource;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.servlet.ServletContext;

@Configuration
@EnableSwagger2
public class OpenApiConfig implements ServletContextAware {

    private ServletContext servletContext;

    @Override
    public void setServletContext(final ServletContext servletContext) {
        this.servletContext = servletContext;
    }

    @Bean
    public Docket apiTypeScriptClient(){

        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("angular-client")
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    private static class CustomPathProvider extends RelativePathProvider {

        private CustomPathProvider(final ServletContext servletContext) {
            super(servletContext);
        }

        @Override
        public String getOperationPath(final String operationPath) {
            return "/api";
        }
    }
}
