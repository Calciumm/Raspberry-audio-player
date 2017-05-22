package com.psochaj.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by socha on 19.05.2017.
 */
@RestController
public class PlayerController {

    @RequestMapping(path = "/test", method = RequestMethod.GET)
    public String Test() {
        return "Hello world";
    }
}
