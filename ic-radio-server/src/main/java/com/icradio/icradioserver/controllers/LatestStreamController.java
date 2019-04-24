package com.icradio.icradioserver.controllers;

import com.icradio.icradioserver.configs.ApiConfig;
import com.icradio.icradioserver.models.LatestStream;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ApiConfig.BASE_PATH + "/latest")
public class LatestStreamController {

    private static final Logger logger = LoggerFactory.getLogger(LatestStreamController.class);

    @GetMapping("getLatestStream")
    @CrossOrigin(origins = "*")
    @ApiOperation(value = "Get the latest live stream")
    public LatestStream getLatestStream() {
        logger.info("retrieving latest stream info");
        // TODO: implement this if necessary
        return new LatestStream(
                "channelID",
                "R2UKwzrGoss"
        );
    }
}
