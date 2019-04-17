package com.icradio.icradioserver.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Information about the latest live stream available")
public class LatestStream {

    @ApiModelProperty(value = "The id of the channel")
    private final String channelId;

    @ApiModelProperty(value = "The id of the latest stream")
    private final String streamId;


    public LatestStream(final String channelId, final String streamId) {
        this.channelId = channelId;
        this.streamId = streamId;
    }

    public String getChannelId() {
        return channelId;
    }

    public String getStreamId() {
        return streamId;
    }
}
