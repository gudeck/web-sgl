package rest;

import org.springframework.web.client.RestTemplate;

public class TituloResource {

    RestTemplate restTemplate = new RestTemplate();

    public String get() {
        final String uri = "http://localhost:8080/api/titulos";
        return restTemplate.getForObject(uri, String.class);
    }

    public void delete(Long id) throws Exception {
        final String uri = "http://localhost:8080/api/titulos/" + id;
        restTemplate.delete(uri);
    }
}
