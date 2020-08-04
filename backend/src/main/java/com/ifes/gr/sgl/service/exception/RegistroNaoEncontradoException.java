package com.ifes.gr.sgl.service.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Busca não retornou dados.
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegistroNaoEncontradoException extends RuntimeException {

    public RegistroNaoEncontradoException(final String message) {
        this(message, null);
    }

    public RegistroNaoEncontradoException(final String message, final Throwable cause) {
        super(message, cause);
    }


}
