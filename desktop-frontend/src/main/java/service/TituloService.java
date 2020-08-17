package service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import domain.Titulo;
import rest.TituloResource;

import java.lang.reflect.Type;
import java.util.List;

public class TituloService {

    private final TituloResource tituloResource;

    public TituloService() {
        this.tituloResource = new TituloResource();
    }

    public List<Titulo> get() {
        Type listType = new TypeToken<List<Titulo>>() {
        }.getType();
        return new Gson().fromJson(tituloResource.get(), listType);
    }

    public void delete(Long id) throws Exception {
        tituloResource.delete(id);
    }
}
