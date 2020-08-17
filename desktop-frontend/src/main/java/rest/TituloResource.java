package rest;

import org.springframework.web.client.RestTemplate;

public class TituloResource {

    public String getTitulos() {
        final String uri = "http://localhost:8080/api/titulos";

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(uri, String.class);
    }

}
