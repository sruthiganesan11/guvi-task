package com.guvitasks.books;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {

        @Bean
        public SecurityFilterChain mySecurityFilterChain(HttpSecurity http) throws Exception {

            http
                    .cors(httpSecurityCorsConfigurer -> {
                        CorsConfiguration configuration = new CorsConfiguration();
                        configuration.setAllowedOrigins(Arrays.asList("*"));
                        configuration.setAllowedMethods(Arrays.asList("*"));
                        configuration.setAllowedHeaders(Arrays.asList("*"));
                        configuration.applyPermitDefaultValues();
configuration.setAllowCredentials(false);

                        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                        source.registerCorsConfiguration("/**", configuration);

                        httpSecurityCorsConfigurer.configurationSource(source);
                    });
            return http.build();
        }
    }
