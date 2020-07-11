package com.icradio.icradioserver.services;

import com.google.api.client.googleapis.json.GoogleJsonResponseException;

import java.io.IOException;
import java.security.GeneralSecurityException;

public interface YoutubeService {
    void getBroadcasts() throws GeneralSecurityException, IOException, GoogleJsonResponseException;
}
