package com.icradio.icradioserver.controllers;

import com.icradio.icradioserver.configs.ApiConfig;
import com.icradio.icradioserver.models.LatestStream;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ApiConfig.BASE_PATH + "/latest")
public class LatestStreamController {

    @GetMapping("getLatestStream")
    @ApiOperation(value = "Get the latest live stream")
    public LatestStream getLatestStream() {

        // TODO: implement this if necessary
        return new LatestStream(
                "channelId",
                "streamId"
        );
    }
}
