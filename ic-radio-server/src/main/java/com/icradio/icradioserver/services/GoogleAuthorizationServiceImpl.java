package com.icradio.icradioserver.services;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.auth.oauth2.StoredCredential;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.DataStore;
import com.google.api.client.util.store.FileDataStoreFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

@Service
public class GoogleAuthorizationServiceImpl implements GoogleAuthorizationService {
/*
    private static final String CREDENDTIALS_FILE_NAME = "client_secrets.json";
    private static final String CREDENTIALS_DIRECTORY = ".oauth-credentials";

    private final HttpTransport httpTransport;
    private final JsonFactory jsonFactory;

    public GoogleAuthorizationServiceImpl() {
        this.httpTransport = new NetHttpTransport();
        this.jsonFactory = new JacksonFactory();

    }

    public Credential authorize(final List<String> scopes, final String credentialDatastore) throws IOException {
        final Reader clientSecretReader = new InputStreamReader(this.getClass().getClassLoader().getResourceAsStream(CREDENDTIALS_FILE_NAME));
        final GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(jsonFactory, clientSecretReader);

        final FileDataStoreFactory fileDataStoreFactory = new FileDataStoreFactory(new File(System.getProperty("user.home") + "/" + CREDENTIALS_DIRECTORY));
        final DataStore<StoredCredential> datastore = fileDataStoreFactory.getDataStore(credentialDatastore);

        final GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                httpTransport, jsonFactory, clientSecrets, scopes).setCredentialDataStore(datastore)
                .build();

        final LocalServerReceiver localReceiver = new LocalServerReceiver.Builder().setPort(8080).build();
    }*/


}
